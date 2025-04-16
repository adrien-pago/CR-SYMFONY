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
            // Champs pour asymétrie focale
            ->add('asymetrie_focale_siege_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Quadrant supéro-externe' => 'quadrant_supero_externe',
                    'Quadrant supéro-interne' => 'quadrant_supero_interne',
                    'Quadrant inféro-externe' => 'quadrant_infero_externe',
                    'Quadrant inféro-interne' => 'quadrant_infero_interne',
                    'Prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_profondeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Superficiel' => 'superficiel',
                    'Moyen' => 'moyen',
                    'Profond' => 'profond'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_tomo_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Tomosynthèse négative' => 'tomo_negative',
                    'Tomosynthèse confirme' => 'tomo_confirme',
                    'Tomosynthèse masse' => 'tomo_masse'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_evolution_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Évolutive' => 'evolutive',
                    'Non évolutive' => 'non_evolutive',
                    'Pas d\'antériorité' => 'pas_antecedents'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_bords_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Bords convexes' => 'bords_convexes',
                    'Bords concaves' => 'bords_concaves'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_anomalie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Pas d\'anomalie associée' => 'pas_anomalie',
                    'Microcalcification' => 'microcalcification',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Champs pour asymétrie globale
            ->add('asymetrie_globale_localisation_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Diffuse' => 'diffuse',
                    'Supérieure' => 'superieure',
                    'Inférieure' => 'inferieure',
                    'Interne' => 'interne',
                    'Externe' => 'externe'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_globale_valeur_gauche', TextType::class, [
                'required' => false,
                'attr' => ['class' => 'form-control']
            ])
            // Champs pour asymétrie simple
            ->add('asymetrie_simple_incidence_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Face' => 'face',
                    'Oblique externe' => 'oblique_externe'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_siege_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Supérieure' => 'superieure',
                    'Interne' => 'interne',
                    'Inférieure' => 'inferieure',
                    'Externe' => 'externe'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_profondeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Superficiel' => 'superficiel',
                    'Moyen' => 'moyen',
                    'Profond' => 'profond'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_evolution_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Évolutive' => 'evolutive',
                    'Non évolutive' => 'non_evolutive',
                    'Pas d\'antériorité' => 'pas_antecedents'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_anomalie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Pas d\'anomalie associée' => 'pas_anomalie',
                    'Microcalcification' => 'microcalcification',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_valeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Bénin' => 'benin',
                    'Autre' => 'autre'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_valeur_autre_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Précisez l\'asymétrie'
                ]
            ])
            // Distorsion architecturale
            ->add('distorsion_architecturale_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Non' => 'non',
                    'Intramammaire' => 'intramammaire',
                    'Des bords mammaires' => 'bords_mammaires'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_intramammaire_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'en projection' => 'projection',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_intramammaire_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_intramammaire_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_intramammaire_densite_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'à centre clair' => 'centre_clair',
                    'à centre dense' => 'centre_dense',
                    'sans anomalie de densité associée' => 'sans_anomalie'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_bords_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'superficiel' => 'superficiel',
                    'profond' => 'profond'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_bords_localisation_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'au quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'en projection' => 'projection',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_bords_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_bords_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('distorsion_bords_type_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'à type de rétraction' => 'retraction',
                    'à type de bombement' => 'bombement'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Masse
            ->add('masse_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'en projection' => 'projection',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_profondeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'antérieur' => 'anterieur',
                    'moyen' => 'moyen',
                    'profond' => 'profond'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_taille_x_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Largeur en mm'
                ]
            ])
            ->add('masse_taille_y_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Hauteur en mm'
                ]
            ])
            ->add('masse_forme_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'ovale' => 'ovale',
                    'ronde' => 'ronde',
                    'irrégulière' => 'irreguliere'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_contours_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'circonscrits' => 'circonscrits',
                    'microlobulés' => 'microlobules',
                    'masqués' => 'masques',
                    'indistincts' => 'indistincts',
                    'spiculés' => 'spicules'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_densite_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'graisseuse' => 'graisseuse',
                    'faible' => 'faible',
                    'isodense' => 'isodense',
                    'élevée' => 'elevee',
                    'ganglion' => 'ganglion',
                    'hamartome' => 'hamartome'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_calcifications_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Présence' => 'presence',
                    'Absence' => 'absence'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_anteriorite_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Antériorité : BI-RADS 2' => 'birads2',
                    'Pas d\'antériorité BI-RADS 3' => 'birads3',
                    'Non lieu' => 'non_lieu'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Microcalcifications suspectes
            ->add('microcalcifications_suspectes_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_distribution_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Diffuse' => 'diffuse',
                    'Régionale' => 'regionale',
                    'Groupée' => 'groupee',
                    'Linéaire' => 'lineaire',
                    'Segmentaire' => 'segmentaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_forme_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Fines polymorphes' => 'fines_polymorphes',
                    'Grossières hétérogènes' => 'grossieres_heterogenes',
                    'Rondes punctiformes' => 'rondes_punctiformes',
                    'Amorphes' => 'amorphes',
                    'Linéaires' => 'lineaires',
                    'Linéaires branchées' => 'lineaires_branchees'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'en projection' => 'projection',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_profondeur_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'antérieur' => 'anterieur',
                    'moyen' => 'moyen',
                    'profond' => 'profond'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_taille_x_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Largeur en mm'
                ]
            ])
            ->add('microcalcifications_taille_y_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Hauteur en mm'
                ]
            ])
            ->add('microcalcifications_comparaison_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Apparues' => 'apparues',
                    'Évolutives' => 'evolutives',
                    'Stables' => 'stables',
                    'Pas d\'antériorité' => 'pas_anteriorite'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_anomalie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Aucune' => 'aucune',
                    'Masse' => 'masse',
                    'Distorsion' => 'distorsion',
                    'Asymétrie' => 'asymetrie'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('microcalcifications_attitude_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Bénin' => 'benin',
                    'Suivi' => 'suivi',
                    'Histologie' => 'histologie',
                    'Joker' => 'joker'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Calcifications non suspectes
            ->add('calcifications_non_suspectes_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('calcifications_type_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'En bâtonnets' => 'batonnets',
                    'Fines régulières, denses, linéaires, orientées vers le mammelon' => 'fines_regulieres',
                    'Macrocalcifications en pop-corn' => 'pop_corn',
                    'De morphologie vasculaire' => 'vasculaire',
                    'Cutanées' => 'cutanees',
                    'Rondes à centre clair' => 'rondes_centre_clair',
                    'Cuppuliformes' => 'cuppuliformes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Désorganisation architecturale
            ->add('desorganisation_architecturale_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Pas de chirurgie' => 'pas_chirurgie',
                    'Désorganisation architecturale en rapport avec les antécédents chirurgicaux' => 'chirurgie'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('desorganisation_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'en projection' => 'projection',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('desorganisation_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('desorganisation_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Prolongement axillaire
            ->add('prolongement_axillaire_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('prolongement_axillaire_type_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Libre' => 'libre',
                    'Formation ganglionnaire' => 'FG',
                    'Formations ganglionnaires' => 'FGs',
                    'Adénomégalie' => 'ADM',
                    'Adénomégalies' => 'ADMs'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Téguments cutanés
            ->add('teguments_cutanes_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Normal' => 'normal',
                    'Épaissi' => 'epaissi',
                    'Rétraction' => 'retraction',
                    'Cutané' => 'cutane'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('teguments_epaissi_type_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Diffus' => 'diffus',
                    'Focal' => 'focal'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('teguments_epaissi_rt_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'RT+' => 'rt_plus',
                    'RT-' => 'rt_minus'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('teguments_epaissi_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Supérieur' => 'superieur',
                    'Interne' => 'interne',
                    'Inférieur' => 'inferieur',
                    'Externe' => 'externe'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('teguments_commentaire_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Commentaire sur les téguments cutanés'
                ]
            ])
            // Exploration échographique - Masse
            ->add('masse_echo_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_numero_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Numéro Mécho'
                ]
            ])
            ->add('masse_echo_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_rayon_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Rayon (h)'
                ]
            ])
            ->add('masse_echo_distance_mammelon_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Distance du mammelon (cm)'
                ]
            ])
            ->add('masse_echo_taille_x_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille X (mm)'
                ]
            ])
            ->add('masse_echo_taille_y_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille Y (mm)'
                ]
            ])
            ->add('masse_echo_taille_z_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille Z (mm)'
                ]
            ])
            ->add('masse_echo_forme_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'ronde' => 'ronde',
                    'ovale' => 'ovale',
                    'irrégulière' => 'irreguliere'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_contours_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'circonscrit' => 'circonscrit',
                    'microlobulés' => 'microlobules',
                    'spiculés' => 'spicules',
                    'mal limités irréguliers' => 'mal_limites'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_stroma_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'fibrose périphérique' => 'fibrose_peripherique',
                    'stroma normal' => 'stroma_normal'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_echostructure_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
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
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_correspondance_mammo_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Cette masse correspond à la masse mamographique Mmammo' => 'correspond_mammo',
                    'Cette masse ne présente pas de traduction mammographique' => 'pas_traduction_mammo'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_numero_mammo_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Numéro Mmammo'
                ]
            ])
            ->add('masse_echo_anteriorite_suivi_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Cette masse est stable comparativement à l\'antériorité' => 'stable',
                    'Cette masse a diminué de taille comparativement à l\'antériorité' => 'diminue',
                    'Cette masse a augmenté de taille comparativement à l\'antériorité' => 'augmente'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_echo_taille_precedente_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille précédente'
                ]
            ])
            ->add('masse_echo_taille_actuelle_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille actuelle'
                ]
            ])
            ->add('masse_echo_birads_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Antériorité : BI-RADS 2' => 'birads2',
                    'Pas d\'antériorité BI-RADS 3' => 'birads3',
                    'Non lieu' => 'non_lieu'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Non masse échographique
            ->add('non_masse_echo_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Absence d\'anomalie non-masse échographiquement décelable' => 'absence',
                    'Dilatation canalaire focale de contenu échogène sans image endoluminale visible' => 'dilatation_sans_image',
                    'Dilatation canalaire avec image d\'addition endoluminale' => 'dilatation_avec_image',
                    'Plage hypoéchogène atténuante mal limitée' => 'plage_hypoechogene',
                    'Visualisation des microcalcifications mammographiques' => 'visualisation_micros'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Champs pour dilatation canalaire avec image
            ->add('non_masse_echo_rayon_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Rayon (h)'
                ]
            ])
            ->add('non_masse_echo_distance_mammelon_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Distance du mammelon (cm)'
                ]
            ])
            ->add('non_masse_echo_taille_x_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille X (mm)'
                ]
            ])
            ->add('non_masse_echo_taille_y_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille Y (mm)'
                ]
            ])
            ->add('non_masse_echo_taille_z_gauche', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille Z (mm)'
                ]
            ])
            ->add('non_masse_echo_forme_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'ronde' => 'ronde',
                    'ovale' => 'ovale',
                    'irrégulière' => 'irreguliere'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_contours_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'circonscrit' => 'circonscrit',
                    'microlobulés' => 'microlobules',
                    'spiculés' => 'spicules',
                    'mal limités irréguliers' => 'mal_limites'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Champs pour plage hypoéchogène et microcalcifications
            ->add('non_masse_echo_topographie_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'du quadrant' => 'quadrant',
                    'à l\'union' => 'union',
                    'rétro-aréolaire' => 'retro_areolaire',
                    'du prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_quadrant_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supéroexterne' => 'superoexterne',
                    'supérointerne' => 'superointerne',
                    'inférointerne' => 'inferointerne',
                    'inféroexterne' => 'inferoexterne'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('non_masse_echo_union_quadrants_gauche', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'supérieurs' => 'superieurs',
                    'internes' => 'internes',
                    'inférieurs' => 'inferieurs',
                    'externes' => 'externes'
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
