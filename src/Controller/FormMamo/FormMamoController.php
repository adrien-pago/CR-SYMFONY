<?php

namespace App\Controller\FormMamo;

use App\Service\FormMamo\DocumentGeneratorService;
use App\Service\FormMamo\FormDataService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormMamoController extends AbstractController
{
    private FormDataService $formDataService;
    private DocumentGeneratorService $documentGenerator;

    public function __construct(
        FormDataService $formDataService,
        DocumentGeneratorService $documentGenerator
    ) {
        $this->formDataService = $formDataService;
        $this->documentGenerator = $documentGenerator;
    }

    #[Route('/form/mamo/generate', name: 'app_form_mamo_generate', methods: ['POST'])]
    public function generateReport(Request $request): Response
    {
        $rawData = $request->request->all();
        
        // Formater les données pour correspondre à la structure attendue
        $formData = [
            'titre' => [
                'titre' => $rawData['titre']['titre'] ?? ''
            ]
        ];

        // Valider les données
        if (!$this->formDataService->validateFormData($formData)) {
            return $this->json([
                'success' => false,
                'message' => 'Données du formulaire invalides'
            ], Response::HTTP_BAD_REQUEST);
        }

        try {
            // Générer le document selon le format demandé
            $format = $request->request->get('format', 'pdf');
            $documentPath = $format === 'word' 
                ? $this->documentGenerator->generateWord($formData)
                : $this->documentGenerator->generatePDF($formData);

            // Retourner le chemin du fichier généré
            return $this->json([
                'success' => true,
                'message' => 'Document généré avec succès',
                'path' => $documentPath,
                'filename' => basename($documentPath)
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'message' => 'Erreur lors de la génération du document : ' . $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
} 