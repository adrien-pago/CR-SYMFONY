<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateExamen', DateType::class, [
                'label' => 'Date de l\'examen',
                'widget' => 'single_text',
                'required' => true,
                'attr' => ['class' => 'form-control']
            ])
            ->add('typeExamen', ChoiceType::class, [
                'label' => 'Type d\'examen',
                'choices' => [
                    'Mammographie numérique' => 'mammographie_numerique',
                    'Mammographie avec échographie' => 'mammographie_echo',
                    'Mammographie avec échographie et biopsie' => 'mammographie_echo_biopsie'
                ],
                'required' => true,
                'attr' => ['class' => 'form-select']
            ])
            ->add('motif', TextareaType::class, [
                'label' => 'Motif de l\'examen',
                'required' => true,
                'attr' => ['class' => 'form-control', 'rows' => 3]
            ])
            ->add('antecedents', TextareaType::class, [
                'label' => 'Antécédents',
                'required' => false,
                'attr' => ['class' => 'form-control', 'rows' => 3]
            ])
            ->add('resultats', TextareaType::class, [
                'label' => 'Résultats',
                'required' => true,
                'attr' => ['class' => 'form-control', 'rows' => 5]
            ])
            ->add('conclusion', TextareaType::class, [
                'label' => 'Conclusion',
                'required' => true,
                'attr' => ['class' => 'form-control', 'rows' => 3]
            ])
            ->add('recommandations', TextareaType::class, [
                'label' => 'Recommandations',
                'required' => false,
                'attr' => ['class' => 'form-control', 'rows' => 3]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
} 