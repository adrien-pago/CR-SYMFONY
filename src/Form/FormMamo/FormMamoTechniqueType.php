<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoTechniqueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Technique
        $builder
            ->add('technique_mammographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Mammographie bilatérale de face et oblique externe ; tomosynthèse de face' => 'bilaterale_face_oblique',
                    'Mammographie unilatérale droite de face et oblique externe ; tomosynthèse de face' => 'unilaterale_droite',
                    'Mammographie unilatérale gauche de face et oblique externe ; tomosynthèse de face' => 'unilaterale_gauche',
                    'Mammographie bilatérale de face selon la méthode d\'Ecklund, avec tomosynthèse' => 'bilaterale_ecklund',
                    'Pas de mammo' => 'pas_de_mammo'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('difficulte_technique', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Pas de difficulté technique' => '0',
                    'Douleur à la compression mammaire limitant la qualité de l\'acquisition' => 'douleur_compression',
                    'Pectus excavatum' => 'pectus_excavatum',
                    'Patiente difficilement mobilisable' => 'patiente_mobilisable',
                    'Patiente porteuse de prothèse mammaire' => 'prothese_mammaire',
                    'Autre' => 'autre'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('difficulte_technique_autre', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Précisez la difficulté technique'
                ]
            ])
            ->add('echographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Echographie mammaire bilatérale réalisée' => 'bilaterale',
                    'Echographie unilatérale gauche réalisée' => 'gauche',
                    'Echographie unilatérale droite réalisée' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('echographie_indication', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Dense' => 'dense',
                    'Clinique' => 'clinique',
                    'Mammo' => 'mammo',
                    'Implants' => 'implants',
                    'Demande' => 'demande'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        // Ajuste si tu as besoin d'un data_class
        $resolver->setDefaults([
            // 'data_class' => ...
        ]);
    }
}
