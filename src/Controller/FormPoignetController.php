<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormPoignetController extends AbstractController
{
    #[Route('/form/poignet', name: 'app_form_poignet')]
    public function index(): Response
    {
        return $this->render('home/formulaire/formPoignet.html.twig');
    }
} 