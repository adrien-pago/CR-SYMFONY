<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, ParameterBagInterface $params): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            // Débogage
            $this->addFlash('debug', 'Formulaire soumis');
            
            // Afficher les données soumises
            $formData = $form->getData();
            $this->addFlash('debug', 'Données du formulaire : ' . json_encode([
                'firstName' => $formData->getFirstName(),
                'lastName' => $formData->getLastName(),
                'email' => $formData->getEmail(),
                'plainPassword' => $form->get('plainPassword')->getData(),
                'agreeTerms' => $form->get('agreeTerms')->getData()
            ]));

            if ($form->isValid()) {
                // Débogage
                $this->addFlash('debug', 'Formulaire valide');
                
                try {
                    // encode the plain password
                    $user->setPassword(
                        $userPasswordHasher->hashPassword(
                            $user,
                            $form->get('plainPassword')->getData()
                        )
                    );

                    $entityManager->persist($user);
                    $entityManager->flush();

                    // add a flash message
                    $this->addFlash('success', 'Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.');

                    return $this->redirectToRoute('app_login');
                } catch (\Exception $e) {
                    // Débogage
                    $this->addFlash('error', 'Erreur lors de l\'enregistrement : ' . $e->getMessage());
                    return $this->render('registration/register.html.twig', [
                        'registrationForm' => $form->createView(),
                    ]);
                }
            } else {
                // Débogage détaillé des erreurs
                $errors = $form->getErrors(true);
                foreach ($errors as $error) {
                    $field = $error->getOrigin()->getName();
                    $this->addFlash('error', "Erreur sur le champ '$field' : " . $error->getMessage());
                }
            }
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
            'recaptcha_site_key' => $params->get('recaptcha.site_key'),
        ]);
    }
} 