<?php

namespace App\Form\FormMamo;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoIndicationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section Indication
        $builder
            ->add('indication', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Dépistage organisé' => 'Dépistage organisé.',
                    'Dépistage individuel' => 'Dépistage individuel.',
                    'Suivi d\'une anomalie classée ACR 3' => 'Suivi d\'une anomalie classée ACR 3.',
                    'Suivi annuel chez une patiente aux antécédents de néoplasie mammaire' => 'Suivi annuel chez une patiente aux antécédents de néoplasie mammaire.',
                    'Anomalie clinique' => 'Anomalie clinique.'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('douleur_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('douleur_apparition', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Apparition' => '',
                    'Spontanée' => 'spontanee',
                    'Post-traumatique' => 'post_traumatique'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('douleur_anciennete', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Ancienneté' => '',
                    'Récente' => 'recente',
                    'Datant de plusieurs mois' => 'ancienne'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Droite' => 'droite',
                    'Gauche' => 'gauche',
                    'Latéralité ?' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_palpation', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Palpation' => '',
                    'De découverte récente' => 'recente',
                    'Ancienne, stable' => 'ancienne_stable',
                    'Ancienne, évolutive' => 'ancienne_evolutive'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('ecoulement_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Droit' => 'droit',
                    'Gauche' => 'gauche',
                    'Latéralité ?' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('ecoulement_type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Type' => '',
                    'Unipore' => 'unipore',
                    'Multipore' => 'multipore'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('ecoulement_aspect', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Aspect' => '',
                    'Clair' => 'clair',
                    'Lactescent' => 'lactescent',
                    'Verdâtre' => 'verdatre',
                    'Sanguinolant' => 'sanguinolant'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('gynecomastie_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite',
                    'Bilatérale' => 'bilaterale'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('gynecomastie_douleur', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Douleur' => '',
                    'Douloureuse' => 'douloureuse',
                    'Indolore' => 'indolore'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('autre_description', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Description de l\'anomalie',
                    'rows' => '3'
                ]
            ])
            ->add('cancer_sein', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_histologie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Histologie' => '',
                    'Carcinome infiltrant non spécifique' => 'carcinome_infiltrant',
                    'Carcinome lobulaire infiltrant' => 'carcinome_lobulaire'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_traitement', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Traitement' => '',
                    'Traitement conservateur' => 'conservateur',
                    'Mastectomie totale' => 'mastectomie'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('mastectomie_reconstruction', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Reconstruction' => '',
                    'Sans geste de reconstruction' => 'sans',
                    'Reconstruction par prothèse' => 'prothese',
                    'Reconstruction par lipofilling' => 'lipofilling'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_risque', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_risque_type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Type de lésion ?' => '',
                    'Hyperplasie canalaire atypique' => 'hyperplasie_canalaire_atypique',
                    'Hyperplasie lobulaire atypique' => 'hyperplasie_lobulaire_atypique',
                    'Carcinome lobulaire in situ' => 'carcinome_lobulaire_in_situ'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_risque_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_risque_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_benigne', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_benigne_type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Type de lésion ?' => '',
                    'Fibroadénome' => 'fibroadenome',
                    'Papillome intracanalaire' => 'papillome_intracanalaire',
                    'Tumeur phyllode' => 'tumeur_phyllode'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_benigne_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_benigne_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_plastique', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('chirurgie_plastique_type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Type de chirurgie ?' => '',
                    'Réduction mammaire' => 'reduction',
                    'Prothèse mammaire' => 'prothese',
                    'Symétrisation' => 'symetrisation'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('reduction_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite',
                    'Bilatérale' => 'bilaterale'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('reduction_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('prothese_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite',
                    'Bilatérale' => 'bilaterale'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('prothese_gauche_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('prothese_droite_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('prothese_bilaterale_gauche_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('prothese_bilaterale_droite_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('symetrisation_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'À gauche' => 'gauche',
                    'À droite' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('neoplasie_ovarienne', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('neoplasie_ovarienne_annee', ChoiceType::class, [
                'required' => false,
                'choices' => $this->getYearChoices(),
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('hodgkin', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('age_patiente', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Âge en années'
                ]
            ])
            ->add('statut_hormonal', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Ménopausée' => 'menopausee',
                    'Non ménopausée' => 'non_menopausee',
                    'Ménopause en cours' => 'menopause_en_cours'
                ],
                'attr' => [
                    'class' => 'form-select',
                    'id' => 'statutHormonalSelect'
                ]
            ])
            ->add('age_menopause', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Âge de la ménopause',
                    'type' => 'number'
                ]
            ])
            ->add('traitement_hormonal', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Pas de traitement hormonal substitutif' => 'pas_de_traitement',
                    'Traitement hormonal substitutif en cours' => 'en_cours',
                    'Traitement hormonal substitutif arrêté' => 'arrete'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cycle', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'En première quinzaine du cycle' => 'premiere_quinzaine',
                    'En seconde quinzaine du cycle' => 'seconde_quinzaine',
                    'En milieu de cycle' => 'milieu_cycle'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('nombre_enfants', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Nombre d\'enfants' => '',
                    '0' => '0',
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                    '5+' => '5_plus'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('allaitement', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non',
                    '1 seul' => '1_seul',
                    '2' => '2',
                    'Certains' => 'certains'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('mutation_brca', ChoiceType::class, [
                'required' => false,
                'label' => 'Mutation BRCA 1 ou BRCA 2 identifiée',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_avant_30', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer du sein avant 30 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_avant_30_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_sein_30_39', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer du sein entre 30 et 39 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_30_39_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_sein_40_49', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer du sein entre 40 et 49 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_40_49_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_sein_50_70', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer du sein entre 50 et 70 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_50_70_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_sein_apres_70', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer du sein après 70 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_apres_70_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_ovarien_avant_70', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer ovarien avant 70 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_ovarien_avant_70_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_ovarien_apres_70', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer ovarien après 70 ans',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_ovarien_apres_70_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
                ]
            ])
            ->add('cancer_sein_homme', ChoiceType::class, [
                'required' => false,
                'label' => 'Cancer du sein chez un homme quel que soit l\'âge',
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_homme_nombre', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Nombre'
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

    private function getYearChoices(): array
    {
        $currentYear = (int)date('Y');
        $choices = ['Année' => ''];
        
        for ($year = $currentYear; $year >= $currentYear - 50; $year--) {
            $choices[$year] = $year;
        }
        
        return $choices;
    }
}
