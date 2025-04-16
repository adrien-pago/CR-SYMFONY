<?php

namespace App\Controller;

use App\Form\FormMamoType;
use App\Service\Document\PdfGeneratorService;
use App\Service\FormMamo\FormDataService;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormMamoController extends AbstractController
{
    private $pdfGenerator;
    private $formDataService;
    private $logger;

    public function __construct(
        PdfGeneratorService $pdfGenerator,
        FormDataService $formDataService,
        LoggerInterface $logger
    ) {
        $this->pdfGenerator = $pdfGenerator;
        $this->formDataService = $formDataService;
        $this->logger = $logger;
    }

    #[Route('/form/mamo', name: 'app_form_mamo')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(FormMamoType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                $formData = $form->getData();
                $formattedData = $this->formDataService->formatFormData($formData);
                $pdfPath = $this->pdfGenerator->generate($formattedData, 'mamo');

                $response = new Response(file_get_contents($pdfPath));
                $response->headers->set('Content-Type', 'application/pdf');
                $response->headers->set('Content-Disposition', 'attachment; filename="compte-rendu-mammographie.pdf"');

                unlink($pdfPath);

                return $response;
            } catch (\Exception $e) {
                $this->addFlash('error', 'Erreur lors de la génération : ' . $e->getMessage());
                return $this->redirectToRoute('app_form_mamo');
            }
        }

        return $this->render('home/formulaire/Mamo/formMamo.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/form/mamo/generate', name: 'app_form_mamo_generate', methods: ['POST'])]
    public function generate(Request $request): Response
    {
        try {
            $formData = $request->request->all('form_mamo');
            $formattedData = $this->formDataService->formatFormData($formData);
            $pdfPath = $this->pdfGenerator->generate($formattedData, 'mamo');

            $filename = basename($pdfPath);
            $publicPath = 'temp/' . $filename;
            $fullPath = $this->getParameter('kernel.project_dir') . '/public/' . $publicPath;

            if (!is_dir(dirname($fullPath))) {
                mkdir(dirname($fullPath), 0777, true);
            }
            copy($pdfPath, $fullPath);
            unlink($pdfPath);

            return $this->json([
                'success' => true,
                'path' => '/' . $publicPath,
                'filename' => 'compte-rendu-mammographie.pdf'
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Erreur lors de la génération du PDF : ' . $e->getMessage()
            ], 500);
        }
    }
} 