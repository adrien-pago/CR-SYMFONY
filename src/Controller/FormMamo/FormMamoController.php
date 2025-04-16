<?php

namespace App\Controller\FormMamo;

use App\Service\FormMamo\DocumentGeneratorService;
use App\Service\FormMamo\EmailService;
use App\Service\FormMamo\FormDataService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormMamoController extends AbstractController
{
    private FormDataService $formDataService;
    private DocumentGeneratorService $documentGenerator;
    private EmailService $emailService;

    public function __construct(
        FormDataService $formDataService,
        DocumentGeneratorService $documentGenerator,
        EmailService $emailService
    ) {
        $this->formDataService = $formDataService;
        $this->documentGenerator = $documentGenerator;
        $this->emailService = $emailService;
    }

    #[Route('/form/mamo/generate', name: 'app_form_mamo_generate', methods: ['POST'])]
    public function generateReport(Request $request): Response
    {
        $formData = $request->request->all();

        // Valider les données
        if (!$this->formDataService->validateFormData($formData)) {
            return $this->json([
                'success' => false,
                'message' => 'Données du formulaire invalides'
            ], Response::HTTP_BAD_REQUEST);
        }

        try {
            // Générer le document (PDF ou Word selon la demande)
            $documentPath = $request->request->get('format') === 'word' 
                ? $this->documentGenerator->generateWord($formData)
                : $this->documentGenerator->generatePDF($formData);

            // Envoyer par email si demandé
            if ($recipientEmail = $request->request->get('email')) {
                $this->emailService->sendReport(
                    $recipientEmail,
                    $formData,
                    $documentPath,
                    $request->request->get('format', 'pdf')
                );
            }

            return $this->json([
                'success' => true,
                'message' => 'Document généré avec succès',
                'path' => $documentPath
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'message' => 'Erreur lors de la génération du document : ' . $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
} 