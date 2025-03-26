<?php

namespace App\Controller;

use App\Form\FormMamoType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormMamoController extends AbstractController
{
    #[Route('/form/mamo', name: 'app_form_mamo')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(FormMamoType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            // TODO: Traitement des données du formulaire
            $this->addFlash('success', 'Le compte-rendu a été enregistré avec succès.');
            return $this->redirectToRoute('app_home');
        }

        return $this->render('home/formulaire/formMamo.html.twig', [
            'form' => $form->createView(),
        ]);
    }
} 