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
            // Creux axillaire
            ->add('creux_axillaire_gauche', ChoiceType::class, [
                'label' => 'Creux axillaire',
                'choices' => [
                    'Non renseigné' => '',
                    'Libre' => 'libre',
                    'Formation ganglionnaire (FG)' => 'fg',
                    'Formations ganglionnaires (FGs)' => 'fgs',
                    'Adénomégalie (ADM)' => 'adm',
                    'Adénomégalies (ADMs)' => 'adms'
                ],
                'attr' => ['class' => 'form-select']
            ])
            // Pour ADM simple
            ->add('creux_axillaire_adm_type_gauche', ChoiceType::class, [
                'label' => 'Type d\'adénomégalie',
                'choices' => [
                    'Non renseigné' => '',
                    'Cortex épaissi' => 'cortex_epaissi',
                    'Petit axe' => 'petit_axe',
                    'Petit axe + perte hile graisseux' => 'petit_axe_perte_hile'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('creux_axillaire_cortex_taille_gauche', TextType::class, [
                'label' => 'Taille du cortex (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille en mm'
                ]
            ])
            ->add('creux_axillaire_adm_petit_axe_taille_gauche', TextType::class, [
                'label' => 'Taille du petit axe (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille en mm'
                ]
            ])
            // Pour ADMs
            ->add('creux_axillaire_adms_nombre_gauche', TextType::class, [
                'label' => 'Nombre d\'adénomégalies',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('creux_axillaire_adms_taille_gauche', TextType::class, [
                'label' => 'Taille de la plus volumineuse (mm)',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'type' => 'number',
                    'placeholder' => 'Taille en mm'
                ]
            ])
            ->add('creux_axillaire_commentaire_gauche', TextType::class, [
                'label' => 'Commentaire',
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Commentaire sur le creux axillaire'
                ]
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
