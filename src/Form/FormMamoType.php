<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', ChoiceType::class, [
                'label' => 'Titre',
                'choices' => [
                    'Mammographie bilatérale' => 'mammographie_bilaterale',
                    'Mammographie et échographie bilatérale' => 'mammographie_echo_bilaterale',
                    'Mammographie unilatérale droite' => 'mammographie_unilaterale_droite',
                    'Mammographie unilatérale gauche' => 'mammographie_unilaterale_gauche',
                    'Mammographie et échographie unilatérale droite' => 'mammographie_echo_unilaterale_droite',
                    'Mammographie et échographie unilatérale gauche' => 'mammographie_echo_unilaterale_gauche',
                    'Échographie mammaire bilatérale' => 'echo_bilaterale',
                    'Échographie mammaire unilatérale droite' => 'echo_unilaterale_droite',
                    'Échographie mammaire unilatérale gauche' => 'echo_unilaterale_gauche'
                ],
                'required' => true,
                'attr' => [
                    'class' => 'form-select',
                    'data-default' => 'mammographie_bilaterale'
                ]
            ])
            ->add('indication', ChoiceType::class, [
                'label' => 'Indication',
                'choices' => [
                    'Dépistage organisé' => 'depistage_organise',
                    'Dépistage individuel' => 'depistage_individuel',
                    'Suivi d\'une anomalie classée ACR 3' => 'suivi_acr3',
                    'Suivi annuel chez une patiente aux antécédents de néoplasie mammaire' => 'suivi_neoplasie',
                    'Anomalie clinique' => 'anomalie_clinique'
                ],
                'required' => true,
                'attr' => [
                    'class' => 'form-select',
                    'data-default' => 'depistage_organise'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
} 