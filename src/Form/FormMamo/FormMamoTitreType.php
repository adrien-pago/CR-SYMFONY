<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoTitreType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Titre
        $builder->add('titre', ChoiceType::class, [
            'required' => true,
            'label' => false,
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
            'attr' => [
                'class' => 'form-select',
                'data-default' => 'mammographie_bilaterale'
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // 'data_class' => ... si besoin
        ]);
    }
}
