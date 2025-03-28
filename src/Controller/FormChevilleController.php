<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormChevilleController extends AbstractController
{
    #[Route('/form/cheville', name: 'app_form_cheville')]
    public function index(): Response
    {
        return $this->render('home/formulaire/Cheville/formCheville.html.twig');
    }
} 