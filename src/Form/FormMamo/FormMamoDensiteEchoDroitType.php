<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoDensiteEchoDroiteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // Masse échographique
            ->add('masse_echo_droite', ChoiceType::class, [
                'label' => 'Masse',
                'choices' => [
                    'Non renseigné' => 'masse',
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'expanded' => false,
                'multiple' => false,
                'required' => true,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_numero_droite', TextType::class, [
                'label' => 'Numéro Mécho',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_topographie_droite', ChoiceType::class, [
                'label' => 'Topographie',
                'choices' => [
                    'Non renseigné' => 'topographie',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_quadrant_droite', ChoiceType::class, [
                'label' => 'Quadrant',
                'choices' => [
                    'Non renseigné' => 'quadrant',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_union_quadrants_droite', ChoiceType::class, [
                'label' => 'Union des quadrants',
                'choices' => [
                    'Non renseigné' => 'union',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_rayon_droite', TextType::class, [
                'label' => 'Rayon (h)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_distance_mammelon_droite', TextType::class, [
                'label' => 'Distance du mammelon (cm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_taille_x_droite', TextType::class, [
                'label' => 'Taille X (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_taille_y_droite', TextType::class, [
                'label' => 'Taille Y (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_taille_z_droite', TextType::class, [
                'label' => 'Taille Z (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_forme_droite', ChoiceType::class, [
                'label' => 'Forme',
                'choices' => [
                    'Non renseigné' => 'forme',
                    'ronde' => 'ronde',
                    'ovale' => 'ovale',
                    'irrégulière' => 'irreguliere'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_contours_droite', ChoiceType::class, [
                'label' => 'Contours',
                'choices' => [
                    'Non renseigné' => 'contours',
                    'circonscrit' => 'circonscrit',
                    'microlobés' => 'microlobules',
                    'spiculés' => 'spicules',
                    'mal limités irréguliers' => 'mal_limites'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_stroma_droite', ChoiceType::class, [
                'label' => 'Stroma',
                'choices' => [
                    'Non renseigné' => 'stroma',
                    'fibrose périphérique' => 'fibrose_peripherique',
                    'stroma normal' => 'stroma_normal'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_echostructure_droite', ChoiceType::class, [
                'label' => 'Échostructure',
                'choices' => [
                    'Non renseigné' => 'echostructure',
                    'anéchogène pure avec renforcement postérieur, typique de kyste mammaire' => 'anechogene_renforcement',
                    'anéchogène pure sans renforcement postérieur, compatible avec un kyste mammaire mais non typique' => 'anechogene_sans_renforcement',
                    'hétérogène avec des éléments mobiles évoquant un kyste complexe' => 'heterogene_mobile',
                    'fortement hypoéchogène' => 'fortement_hypoechogene',
                    'modérément hypoéchogène' => 'moderement_hypoechogene',
                    'modérément hypoéchogène, homogène' => 'moderement_hypoechogene_homogene',
                    'modérément hypoéchogène avec calcifications périphériques' => 'moderement_hypoechogene_calcifications',
                    'hétérogène' => 'heterogene',
                    'hyperéchogène' => 'hyperechogene'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_correspondance_mammo_droite', ChoiceType::class, [
                'label' => 'Correspondance mammographie',
                'choices' => [
                    'Non renseigné' => 'blancblanc',
                    'Cette masse correspond à la masse mamographique Mmammo' => 'correspond_mammo',
                    'Cette masse ne présente pas de traduction mammographique' => 'pas_correspond_mammo'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_numero_mammo_droite', TextType::class, [
                'label' => 'Numéro Mmammo',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_anteriorite_suivi_droite', ChoiceType::class, [
                'label' => 'Antériorité suivi',
                'choices' => [
                    'Non renseigné' => 'blancblanc',
                    'Cette masse est stable comparativement à l\'antériorité' => 'stable',
                    'Cette masse a diminué de taille comparativement à l\'antériorité' => 'diminue',
                    'Cette masse a augmenté de taille comparativement à l\'antériorité' => 'augmente'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_echo_taille_precedente_droite', TextType::class, [
                'label' => 'Taille précédente',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_taille_actuelle_droite', TextType::class, [
                'label' => 'Taille actuelle',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('masse_echo_birads_droite', ChoiceType::class, [
                'label' => 'Classification BI-RADS',
                'choices' => [
                    'Non renseigné' => 'blancblanc',
                    'Antériorité : BI-RADS 2' => 'birads2',
                    'Pas d\'antériorité BI-RADS 3' => 'birads3',
                    'Non lieu' => 'non_lieu'
                ],
                'required' => false,
                'attr' => [
                    'class' => 'form-select'
                ]
            ])

            // Non-masse échographique
            ->add('non_masse_echo_droite', ChoiceType::class, [
                'label' => 'Non-masse',
                'choices' => [
                    'Non renseigné' => '',
                    'Absence d\'anomalie non-masse échographiquement décelable' => 'absence_anomalie',
                    'Dilatation canalaire focale de contenu échogène sans image endoluminale visible' => 'dilatation_sans_image',
                    'Dilatation canalaire avec image d\'addition endoluminale' => 'dilatation_avec_image',
                    'Plage hypoéchogène atténuante mal limitée' => 'plage_hypoechogene',
                    'Visualisation des microcalcifications mammographiques' => 'microcalcifications'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_topographie_droite', ChoiceType::class, [
                'label' => 'Topographie',
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_quadrant_droite', ChoiceType::class, [
                'label' => 'Quadrant',
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_union_quadrants_droite', ChoiceType::class, [
                'label' => 'Union des quadrants',
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_rayon_droite', TextType::class, [
                'label' => 'Rayon (h)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('non_masse_echo_distance_mammelon_droite', TextType::class, [
                'label' => 'Distance du mammelon (cm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('non_masse_echo_taille_x_droite', TextType::class, [
                'label' => 'Taille X (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('non_masse_echo_taille_y_droite', TextType::class, [
                'label' => 'Taille Y (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('non_masse_echo_taille_z_droite', TextType::class, [
                'label' => 'Taille Z (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number'
                ]
            ])
            ->add('non_masse_echo_forme_droite', ChoiceType::class, [
                'label' => 'Forme',
                'choices' => [
                    'Non renseigné' => '',
                    'ronde' => 'ronde',
                    'ovale' => 'ovale',
                    'irrégulière' => 'irreguliere'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_contours_droite', ChoiceType::class, [
                'label' => 'Contours',
                'choices' => [
                    'Non renseigné' => '',
                    'circonscrit' => 'circonscrit',
                    'microlobés' => 'microlobules',
                    'spiculés' => 'spicules',
                    'mal limités irréguliers' => 'mal_limites'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_birads_droite', ChoiceType::class, [
                'label' => 'Classification BI-RADS',
                'choices' => [
                    'Non renseigné' => '',
                    'Antériorité : BI-RADS 2' => 'birads2',
                    'Pas d\'antériorité BI-RADS 3' => 'birads3',
                    'Non lieu' => 'non_lieu'
                ],
                'required' => false,
                'attr' => ['class' => 'form-select']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
