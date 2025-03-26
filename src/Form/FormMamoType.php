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
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
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
                    'Latéralité ?' => '',
                    'Gauche' => 'gauche',
                    'Droite' => 'droite'
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
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
} 