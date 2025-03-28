<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoExamenCliniqueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Examen clinique des seins
        $builder
            ->add('examen_clinique_seins', ChoiceType::class, [
                'required' => true,
                'placeholder' => '',
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                    'Refus' => 'refus'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour la masse
            ->add('masse_lateralite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Latéralité ?',
                'choices' => [
                    'Droite' => 'droite',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_mobilite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Mobilité',
                'choices' => [
                    'Mobile' => 'mobile',
                    'Fixée' => 'fixee'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_topographie', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Topographie ?',
                'choices' => [
                    'Diffuse' => 'diffuse',
                    'Quadrant' => 'quadrant',
                    'Union' => 'union',
                    'Région' => 'region',
                    'Péri-aréolaire' => 'peri_areolaire',
                    'Sous-mammaire' => 'sous_mammaire',
                    'Axillaire' => 'axillaire'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_quadrant', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Quadrant',
                'choices' => [
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_union', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Union',
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_region', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Régions',
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour l'écoulement
            ->add('ecoulement_lateralite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Latéralité ?',
                'choices' => [
                    'Droite' => 'droite',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('ecoulement_reproductible', ChoiceType::class, [
                'required' => false,
                'placeholder' => '.',
                'choices' => [
                    'Reproduit' => 'reproduit',
                    'Non reproductible ce jour' => 'non_reproductible'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour l'érythème
            ->add('erytheme_topographie', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Topographie ?',
                'choices' => [
                    'Diffus' => 'diffus',
                    'Quadrant' => 'quadrant',
                    'Union' => 'union',
                    'Région' => 'region',
                    'Péri-aréolaire' => 'peri_areolaire',
                    'Sous-mammaire' => 'sous_mammaire',
                    'Axillaire' => 'axillaire'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_quadrant', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Quadrant',
                'choices' => [
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_union', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Union',
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_region', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Régions',
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_lateralite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Latéralité ?',
                'choices' => [
                    'Droit' => 'droit',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour la rétraction
            ->add('retraction_topographie', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Topographie ?',
                'choices' => [
                    'Diffuse' => 'diffuse',
                    'Quadrant' => 'quadrant',
                    'Union' => 'union',
                    'Région' => 'region',
                    'Péri-aréolaire' => 'peri_areolaire',
                    'Sous-mammaire' => 'sous_mammaire',
                    'Axillaire' => 'axillaire'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_quadrant', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Quadrant',
                'choices' => [
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_union', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Union',
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_region', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Régions',
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_lateralite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Latéralité ?',
                'choices' => [
                    'Droit' => 'droit',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour l'asymétrie
            ->add('asymetrie_clinique_type', ChoiceType::class, [
                'required' => false,
                'placeholder' => '.',
                'choices' => [
                    'Le sein droit est plus volumineux' => 'droit_plus_volumineux',
                    'Le sein gauche est plus volumineux' => 'gauche_plus_volumineux'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champ pour autre
            ->add('examen_clinique_autre', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Autre anomalie'
                ]
            ])
            // Section Examen clinique des creux axillaires
            ->add('examen_clinique_axillaires', ChoiceType::class, [
                'required' => true,
                'placeholder' => '',
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                    'Refus' => 'refus'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour l'infiltration
            ->add('infiltration_lateralite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Latéralité ?',
                'choices' => [
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champs pour le nodule
            ->add('nodule_mobilite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Mobilité',
                'choices' => [
                    'Mobile' => 'mobile',
                    'Fixé' => 'fixe'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('nodule_lateralite', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Latéralité ?',
                'choices' => [
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Champ pour autre anomalie axillaire
            ->add('examen_clinique_axillaires_autre', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Autre anomalie axillaire'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // 'data_class' => ...
        ]);
    }
}
