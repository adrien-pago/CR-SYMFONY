<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormMamoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', ChoiceType::class, [
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
                ]
            ])
            ->add('indication', ChoiceType::class, [
                'choices' => [
                    'Dépistage organisé' => 'depistage_organise',
                    'Dépistage individuel' => 'depistage_individuel',
                    'Suivi d\'une anomalie classée ACR 3' => 'suivi_acr3',
                    'Suivi annuel chez une patiente aux antécédents de néoplasie mammaire' => 'suivi_neoplasie',
                    'Anomalie clinique' => 'anomalie_clinique'
                ],
                'required' => true,
                'label' => false,
                'attr' => [
                    'class' => 'form-select',
                    'data-default' => 'depistage_organise'
                ]
            ])
            ->add('bilan', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('douleur', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Oui' => 'oui'
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
            ->add('douleur_type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Spontanée' => 'spontanee',
                    'Provoquée' => 'provoquee'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('douleur_description', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Description de la douleur'
                ]
            ])
            ->add('masse', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Oui' => 'oui'
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
            ->add('masse_type', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Unique' => 'unique',
                    'Multiple' => 'multiple'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_description', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Description de la masse'
                ]
            ])
            ->add('ecoulement', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Oui' => 'oui'
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
            ->add('ecoulement_description', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Description de l\'écoulement'
                ]
            ])
            ->add('gynecomastie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Oui' => 'oui'
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
            ->add('gynecomastie_description', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Description de la gynécomastie'
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
            ->add('antecedents', ChoiceType::class, [
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
            ->add('mutation_brca', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('cancer_sein_avant_30', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez une sœur' => 'soeur',
                    'Ne sait pas' => 'ne_sait_pas'
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
                'choices' => [
                    'Non' => 'non',
                    'Dans la branche paternelle' => 'branche_paternelle',
                    'Dans la branche maternelle' => 'branche_maternelle',
                    'Chez un frère' => 'frere',
                    'Ne sait pas' => 'ne_sait_pas'
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
            ->add('cancer_sein_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
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
                    'Type de lésion' => '',
                    'Hyperplasie canalaire atypique' => 'hyperplasie_canalaire',
                    'Hyperplasie lobulaire atypique' => 'hyperplasie_lobulaire',
                    'Carcinome lobulaire in situ' => 'carcinome_lobulaire'
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
            ->add('chirurgie_risque_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
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
                    'Type de lésion' => '',
                    'Fibroadénome' => 'fibroadenome',
                    'Papillome intracanalaire' => 'papillome',
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
            ->add('chirurgie_benigne_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
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
                    'Type de chirurgie' => '',
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
                    'Latéralité' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite',
                    'Bilatérale' => 'bilaterale'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('reduction_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
                ]
            ])
            ->add('prothese_lateralite', ChoiceType::class, [
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
            ->add('prothese_gauche_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
                ]
            ])
            ->add('prothese_droite_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
                ]
            ])
            ->add('prothese_bilaterale_gauche_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année à gauche'
                ]
            ])
            ->add('prothese_bilaterale_droite_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année à droite'
                ]
            ])
            ->add('symetrisation_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité' => '',
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
            ->add('neoplasie_ovarienne_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
                ]
            ])
            ->add('neoplasie_ovarienne_type', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Type de néoplasie'
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
            ->add('hodgkin_annee', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Année'
                ]
            ])
            ->add('hodgkin_type', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Type de maladie de Hodgkin'
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
                    'Statut hormonal' => '',
                    'Ménopausée' => 'menopausee',
                    'Non ménopausée' => 'non_menopausee',
                    'Ménopause en cours' => 'menopause_en_cours'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('age_menopause', NumberType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Âge'
                ]
            ])
            ->add('traitement_hormonal', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Traitement hormonal substitutif' => '',
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
                    'Cycle' => '',
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
                    'Allaitement' => '',
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
            ->add('technique_mammographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Mammographie bilatérale de face et oblique externe ; tomosynthèse de face' => 'bilaterale_face_oblique',
                    'Mammographie unilatérale droite de face et oblique externe ; tomosynthèse de face' => 'unilaterale_droite',
                    'Mammographie unilatérale gauche de face et oblique externe ; tomosynthèse de face' => 'unilaterale_gauche',
                    'Mammographie bilatérale de face selon la méthode d\'Ecklund, avec tomosynthèse' => 'bilaterale_ecklund',
                    'Pas de mammo' => 'pas_de_mammo'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('incidences_complementaires', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Réalisation complémentaire de clichés agrandis de face et de profil' => 'agrandis_face_profil',
                    'Réalisation complémentaire d\'un cliché de face roulé' => 'face_roule',
                    'Réalisation complémentaire d\'un cliché de face tournée (dit de Cléopâtre)' => 'face_cleopatre',
                    'Réalisation complémentaire d\'un cliché comprimé localisé' => 'comprime_localise'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('incidences_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Droite' => 'droite',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('difficulte_technique', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Pas de difficulté technique' => '0',
                    'Douleur à la compression mammaire limitant la qualité de l\'acquisition' => 'douleur_compression',
                    'Pectus excavatum' => 'pectus_excavatum',
                    'Patiente difficilement mobilisable' => 'patiente_mobilisable',
                    'Patiente porteuse de prothèse mammaire' => 'prothese_mammaire',
                    'Autre' => 'autre'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('difficulte_technique_autre', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Précisez la difficulté technique'
                ]
            ])
            ->add('echographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Echographie mammaire bilatérale réalisée' => 'bilaterale',
                    'Echographie unilatérale gauche réalisée' => 'gauche',
                    'Echographie unilatérale droite réalisée' => 'droite'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('echographie_indication', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Dense' => 'dense',
                    'Clinique' => 'clinique',
                    'Mammo' => 'mammo',
                    'Implants' => 'implants',
                    'Demande' => 'demande'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('comparatif_type', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Mammographie' => 'mammo',
                    'Mammographie et échographie' => 'mammo_echo',
                    'Non' => 'non'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('comparatif_date', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'JJ/MM/AAAA'
                ]
            ])
            ->add('comparatif_mode', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Clichés' => 'cliches',
                    'PACS' => 'pacs',
                    'Internet' => 'internet'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('comparatif_ancien_date', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'MM/AAAA'
                ]
            ])
            // Section Densité des seins
            ->add('examen_clinique_seins', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                    'Refus' => 'refus',
                    '' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_clinique_type', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Asymétrie de volume' => 'volume',
                    'Asymétrie de forme' => 'forme',
                    'Asymétrie de position' => 'position'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('masse_mobilite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Mobile' => 'mobile',
                    'Fixée' => 'fixee',
                    'Mobilité' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_topographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Diffuse' => 'diffuse',
                    'Quadrant' => 'quadrant',
                    'Union' => 'union',
                    'Région' => 'region',
                    'Péri-aréolaire' => 'peri_areolaire',
                    'Sous-mammaire' => 'sous_mammaire',
                    'Axillaire' => 'axillaire',
                    'Topographie ?' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_quadrant', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne',
                    'Quadrant' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_union', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes',
                    'Union' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('masse_region', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes',
                    'Régions' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('ecoulement_reproductible', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Reproduit' => 'reproduit',
                    'Non reproductible ce jour' => 'non_reproductible',
                    '.' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_topographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Diffus' => 'diffus',
                    'Quadrant' => 'quadrant',
                    'Union' => 'union',
                    'Région' => 'region',
                    'Péri-aréolaire' => 'peri_areolaire',
                    'Sous-mammaire' => 'sous_mammaire',
                    'Axillaire' => 'axillaire',
                    'Topographie ?' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_quadrant', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne',
                    'Quadrant' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_union', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes',
                    'Union' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_region', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes',
                    'Régions' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('erytheme_lateralite', ChoiceType::class, [
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
            ->add('retraction_topographie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Diffuse' => 'diffuse',
                    'Quadrant' => 'quadrant',
                    'Union' => 'union',
                    'Région' => 'region',
                    'Péri-aréolaire' => 'peri_areolaire',
                    'Sous-mammaire' => 'sous_mammaire',
                    'Axillaire' => 'axillaire',
                    'Topographie ?' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_quadrant', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne',
                    'Quadrant' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_union', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes',
                    'Union' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_region', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Supérieurs' => 'superieurs',
                    'Internes' => 'internes',
                    'Inférieurs' => 'inferieurs',
                    'Externes' => 'externes',
                    'Régions' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('retraction_lateralite', ChoiceType::class, [
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
            ->add('asymetrie_densite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'BI-RADS A (Seins principalement graisseux)' => 'birads_a',
                    'BI-RADS B (Quelques opacités fibroglandulaires éparses)' => 'birads_b',
                    'BI-RADS C (Densité mammaire hétérogène)' => 'birads_c',
                    'BI-RADS D (Seins extrêmement denses)' => 'birads_d',
                    'Densité mammaire non précisée' => 'non_precisee'
                ],
                'attr' => ['class' => 'form-select']
            ])
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
            // Champs pour le sein droit
            ->add('asymetrie_densite_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_densite_type_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Asymétrie focale' => 'focale',
                    'Asymétrie globale' => 'globale',
                    'Asymétrie simple' => 'simple'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_siege_droite', ChoiceType::class, [
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
            ->add('asymetrie_focale_profondeur_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Antérieure' => 'anterieure',
                    'Moyenne' => 'moyenne',
                    'Postérieure' => 'posterieure'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_tomo_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Absence de masse' => 'absence_masse',
                    'Masse bénigne' => 'masse_benigne',
                    'Masse suspecte' => 'masse_suspecte'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_evolution_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Stable' => 'stable',
                    'En augmentation' => 'augmentation',
                    'En diminution' => 'diminution',
                    'Nouvelle' => 'nouvelle'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_bords_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Bien délimités' => 'bien_delimites',
                    'Mal délimités' => 'mal_delimites',
                    'Spiculés' => 'spicules'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_focale_anomalie_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Aucune' => 'aucune',
                    'Microcalcifications' => 'microcalcifications',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_globale_localisation_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Supérieure' => 'superieure',
                    'Inférieure' => 'inferieure',
                    'Interne' => 'interne',
                    'Externe' => 'externe'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_globale_valeur_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Légère' => 'legere',
                    'Modérée' => 'moderee',
                    'Importante' => 'importante'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_incidence_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Face' => 'face',
                    'Profil' => 'profil',
                    'Oblique' => 'oblique'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_siege_droite', ChoiceType::class, [
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
            ->add('asymetrie_simple_profondeur_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Antérieure' => 'anterieure',
                    'Moyenne' => 'moyenne',
                    'Postérieure' => 'posterieure'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_evolution_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Stable' => 'stable',
                    'En augmentation' => 'augmentation',
                    'En diminution' => 'diminution',
                    'Nouvelle' => 'nouvelle'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_anomalie_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Aucune' => 'aucune',
                    'Microcalcifications' => 'microcalcifications',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_simple_valeur_droite', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'Légère' => 'legere',
                    'Modérée' => 'moderee',
                    'Importante' => 'importante'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('examen_clinique_autre', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Description'
                ]
            ])
            ->add('examen_clinique_axillaires', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                    'Refus' => 'refus',
                    '' => ''
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('examen_clinique_axillaires_autre', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Précisez'
                ]
            ])
            ->add('examen_clinique_axillaires_non_type', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'Infiltration' => 'infiltration',
                    'Nodule' => 'nodule',
                    'Autre' => 'autre'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('infiltration_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Droite' => 'droite',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('nodule_mobilite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Mobilité' => '',
                    'Mobile' => 'mobile',
                    'Fixé' => 'fixe'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('nodule_lateralite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Latéralité ?' => '',
                    'Droite' => 'droite',
                    'Gauche' => 'gauche'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Section Densité des seins
            ->add('densite_seins', ChoiceType::class, [
                'choices' => [
                    'Non renseigné' => '',
                    'BI-RADS A (Seins principalement graisseux)' => 'birads_a',
                    'BI-RADS B (Quelques opacités fibroglandulaires éparses)' => 'birads_b',
                    'BI-RADS C (Densité mammaire hétérogène)' => 'birads_c',
                    'BI-RADS D (Seins extrêmement denses)' => 'birads_d',
                    'Densité mammaire non précisée' => 'non_precisee'
                ],
                'attr' => ['class' => 'form-select']
            ])
            ->add('asymetrie_densite', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Asymétrie' => '',
                    'Non' => 'non',
                    'Oui' => 'oui'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_densite_type', ChoiceType::class, [
                'choices' => [
                    'Asymétrie focale' => 'focale',
                    'Asymétrie globale' => 'globale',
                    'Asymétrie simple' => 'simple'
                ],
                'expanded' => false,
                'multiple' => false,
                'required' => false,
                'label' => false
            ])
            // Options pour asymétrie focale
            ->add('asymetrie_focale_siege', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Siège' => '',
                    'Supéroexterne' => 'superoexterne',
                    'Supérointerne' => 'superointerne',
                    'Inférointerne' => 'inferointerne',
                    'Inféroexterne' => 'inferoexterne',
                    'Prolongement axillaire' => 'prolongement_axillaire'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_focale_profondeur', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Profondeur' => '',
                    'Superficiel' => 'superficiel',
                    'Moyen' => 'moyen',
                    'Profond' => 'profond'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_focale_tomo', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Tomosynthèse' => '',
                    'Tomo négative' => 'tomo_negative',
                    'Tomo confirme' => 'tomo_confirme',
                    'Tomo masse' => 'tomo_masse'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_focale_evolution', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Évolution' => '',
                    'Évolutive' => 'evolutive',
                    'Non évolutive' => 'non_evolutive',
                    'Pas d\'antériorité' => 'pas_antecedents'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_focale_bords', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Bords' => '',
                    'Bords convexes' => 'bords_convexes',
                    'Bords concaves' => 'bords_concaves'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_focale_anomalie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Anomalie associée' => '',
                    'Pas d\'anomalie associée' => 'pas_anomalie',
                    'Microcalcification' => 'microcalcification',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Options pour asymétrie globale
            ->add('asymetrie_globale_localisation', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Localisation' => '',
                    'Diffuse' => 'diffuse',
                    'Supérieure' => 'superieure',
                    'Inférieure' => 'inferieure',
                    'Interne' => 'interne',
                    'Externe' => 'externe'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_globale_valeur', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Valeur' => '',
                    'Sans valeur pathologique' => 'sans_valeur',
                    'Champ libre' => 'champ_libre'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            // Options pour asymétrie simple
            ->add('asymetrie_simple_incidence', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Incidence' => '',
                    'Face' => 'face',
                    'Oblique externe' => 'oblique_externe'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_simple_siege', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Siège' => '',
                    'Supérieure' => 'superieure',
                    'Interne' => 'interne',
                    'Inférieure' => 'inferieure',
                    'Externe' => 'externe'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_simple_profondeur', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Profondeur' => '',
                    'Superficiel' => 'superficiel',
                    'Moyen' => 'moyen',
                    'Profond' => 'profond'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_simple_evolution', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Évolution' => '',
                    'Évolutive' => 'evolutive',
                    'Non évolutive' => 'non_evolutive',
                    'Pas d\'antériorité' => 'pas_antecedents'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_simple_anomalie', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Anomalie associée' => '',
                    'Pas d\'anomalie associée' => 'pas_anomalie',
                    'Microcalcification' => 'microcalcification',
                    'Distorsion architecturale' => 'distorsion_architecturale'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ])
            ->add('asymetrie_simple_valeur', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Valeur' => '',
                    'Bénin' => 'benin',
                    'Champ libre' => 'champ_libre'
                ],
                'attr' => [
                    'class' => 'form-select'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
} 