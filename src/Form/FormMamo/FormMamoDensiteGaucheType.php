<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoDensiteGaucheType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Densité des seins gauches
        $builder
            ->add('asymetrie_densite_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_densite_type_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Asymétrie focale' => 'focale',
                    'Asymétrie globale' => 'globale',
                    'Asymétrie simple' => 'simple'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_siege_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Quadrant supéro-externe' => 'quadrant_supero_externe',
                    'Quadrant supéro-interne' => 'quadrant_supero_interne',
                    'Quadrant inféro-externe' => 'quadrant_infero_externe',
                    'Quadrant inféro-interne' => 'quadrant_infero_interne',
                    'Union des quadrants' => 'union_quadrants',
                    'Région rétro-aréolaire' => 'region_retro_areolaire',
                    'Région axillaire' => 'region_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_profondeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Antérieure' => 'anterieure',
                    'Moyenne' => 'moyenne',
                    'Postérieure' => 'posterieure'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_tomo_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Absence de masse' => 'absence_masse',
                    'Masse bénigne' => 'masse_benigne',
                    'Masse suspecte' => 'masse_suspecte'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_evolution_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Stable' => 'stable',
                    'En augmentation' => 'augmentation',
                    'En diminution' => 'diminution',
                    'Nouvelle' => 'nouvelle'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_bords_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Bien délimités' => 'bien_delimites',
                    'Mal délimités' => 'mal_delimites',
                    'Spiculés' => 'spicules'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_anomalie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Aucune' => 'aucune',
                    'Microcalcifications' => 'microcalcifications',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_globale_localisation_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Supérieure' => 'superieure',
                    'Inférieure' => 'inferieure',
                    'Interne' => 'interne',
                    'Externe' => 'externe'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_globale_valeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Légère' => 'legere',
                    'Modérée' => 'moderee',
                    'Importante' => 'importante'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_incidence_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Face' => 'face',
                    'Profil' => 'profil',
                    'Oblique' => 'oblique'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_siege_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Quadrant supéro-externe' => 'quadrant_supero_externe',
                    'Quadrant supéro-interne' => 'quadrant_supero_interne',
                    'Quadrant inféro-externe' => 'quadrant_infero_externe',
                    'Quadrant inféro-interne' => 'quadrant_infero_interne',
                    'Union des quadrants' => 'union_quadrants',
                    'Région rétro-aréolaire' => 'region_retro_areolaire',
                    'Région axillaire' => 'region_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_profondeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Antérieure' => 'anterieure',
                    'Moyenne' => 'moyenne',
                    'Postérieure' => 'posterieure'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_evolution_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Stable' => 'stable',
                    'En augmentation' => 'augmentation',
                    'En diminution' => 'diminution',
                    'Nouvelle' => 'nouvelle'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_anomalie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Aucune' => 'aucune',
                    'Microcalcifications' => 'microcalcifications',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_valeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Légère' => 'legere',
                    'Modérée' => 'moderee',
                    'Importante' => 'importante'
                ],
                'attr' => ['class' => 'form-select']
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
