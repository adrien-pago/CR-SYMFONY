<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

// Importe les sous-formulaires que tu as créés
use App\Form\FormMamo\FormMamoTitreType;
use App\Form\FormMamo\FormMamoIndicationType;
use App\Form\FormMamo\FormMamoTechniqueType;
use App\Form\FormMamo\FormMamoComparatifType;
use App\Form\FormMamo\FormMamoExamenCliniqueType;
use App\Form\FormMamo\FormMamoDensiteGaucheType;
use App\Form\FormMamo\FormMamoDensiteDroitType;
use App\Form\FormMamo\FormMamoDensiteType;
use App\Form\FormMamo\FormMamoDensiteEchoGaucheType;
use App\Form\FormMamo\FormMamoDensiteEchoDroiteType;

class FormMamoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', FormMamoTitreType::class)
            ->add('indication', FormMamoIndicationType::class)
            ->add('technique', FormMamoTechniqueType::class)
            ->add('comparatif', FormMamoComparatifType::class)
            ->add('examen_clinique', FormMamoExamenCliniqueType::class)
            ->add('densite_seins', FormMamoDensiteType::class)
            ->add('densite_gauche', FormMamoDensiteGaucheType::class)
            ->add('densite_droite', FormMamoDensiteDroitType::class)
            ->add('densite_echo_gauche', FormMamoDensiteEchoGaucheType::class)
            ->add('densite_echo_droite', FormMamoDensiteEchoDroiteType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // 'data_class' => ...
        ]);
    }
}
