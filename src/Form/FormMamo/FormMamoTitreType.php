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
                'Mammographie bilatérale' => 'mammographie bilaterale',
                'Mammographie et échographie bilatérale' => 'mammographie echo bilaterale',
                'Mammographie unilatérale droite' => 'mammographie unilaterale droite',
                'Mammographie unilatérale gauche' => 'mammographie unilaterale gauche',
                'Mammographie et échographie unilatérale droite' => 'mammographie echo unilaterale droite',
                'Mammographie et échographie unilatérale gauche' => 'mammographie echo unilaterale gauche',
                'Échographie mammaire bilatérale' => 'echo bilaterale',
                'Échographie mammaire unilatérale droite' => 'echo unilaterale droite',
                'Échographie mammaire unilatérale gauche' => 'echo unilaterale gauche'
            ],
            'attr' => [
                'class' => 'form-select',
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
