<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoDensiteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Densité des seins
        $builder
            ->add('densite_seins', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'BI-RADS A (Seins principalement graisseux)' => 'birads_a',
                    'BI-RADS B (Quelques opacités fibroglandulaires éparses)' => 'birads_b',
                    'BI-RADS C (Densité mammaire hétérogène)' => 'birads_c',
                    'BI-RADS D (Seins extrêmement denses)' => 'birads_d',
                    'Densité mammaire non précisée' => 'non_precisee'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('densite_gauche', FormMamoDensiteGaucheType::class, [
                'label' => false,
                'required' => false
            ])
            ->add('densite_droite', FormMamoDensiteDroitType::class, [
                'label' => false,
                'required' => false
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

