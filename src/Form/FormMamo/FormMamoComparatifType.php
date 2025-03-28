<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoComparatifType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Comparatif
        $builder
            ->add('comparatif_type', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Mammographie' => 'mammo',
                    'Mammographie et échographie' => 'mammo_echo',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('comparatif_date', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'JJ/MM/AAAA'
                ]
            ])
            ->add('comparatif_mode', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Clichés' => 'cliches',
                    'PACS' => 'pacs',
                    'Internet' => 'internet'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('comparatif_ancien_date', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'MM/AAAA'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        // À ajuster si tu as un data_class
        $resolver->setDefaults([
            // 'data_class' => ...
        ]);
    }
}
