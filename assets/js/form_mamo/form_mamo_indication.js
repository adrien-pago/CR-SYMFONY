document.addEventListener('DOMContentLoaded', function() {
    // Variables pour la gestion des options d'indication
    const indicationSelect = document.querySelector('#form_mamo_indication_indication');
    const bilanOptions = document.getElementById('bilanOptions');
    const optionButtons = document.querySelectorAll('.option-btn');
    const optionContainers = document.querySelectorAll('.option-container');
    const resetBtn = document.getElementById('resetBtn');

    // Fonction pour gérer l'affichage des options en fonction de la sélection
    function handleIndicationChange() {
        if (!indicationSelect || !bilanOptions) return;
        
        const selectedValue = indicationSelect.value;
        
        if (selectedValue === 'Anomalie_clinique') {
            bilanOptions.classList.remove('d-none');
        } else {
            bilanOptions.classList.add('d-none');
            // Réinitialiser tous les conteneurs d'options
            optionContainers.forEach(container => container.classList.add('d-none'));
            optionButtons.forEach(btn => btn.classList.remove('active'));
        }
    }

    // Écouter les changements sur le select d'indication
    if (indicationSelect) {
        indicationSelect.addEventListener('change', handleIndicationChange);
        // Vérifier l'état initial
        handleIndicationChange();
    } else {
        console.error('Le sélecteur d\'indication n\'a pas été trouvé');
    }

    // Gestion des boutons d'options
    optionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            optionButtons.forEach(b => {
                b.classList.remove('active');
                const icon = b.querySelector('i');
                if (icon) {
                    icon.classList.remove('bi-check-circle-fill');
                    icon.classList.add('bi-dot-circle');
                }
            });
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.remove('bi-dot-circle');
                icon.classList.add('bi-check-circle-fill');
            }
            
            // Masquer tous les conteneurs d'options
            optionContainers.forEach(container => {
                container.classList.add('d-none');
            });
            
            // Afficher le conteneur correspondant
            const targetId = this.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.remove('d-none');
            }
        });
    });

    // Gestion du bouton Reset
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            // Réinitialiser tous les champs de formulaire dans les conteneurs d'options
            document.querySelectorAll('.option-container select, .option-container textarea').forEach(field => {
                field.value = '';
            });

            // Retirer la classe active de tous les boutons d'options
            optionButtons.forEach(btn => {
                btn.classList.remove('active');
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.classList.remove('bi-check-circle-fill');
                    icon.classList.add('bi-dot-circle');
                }
            });

            // Masquer tous les conteneurs d'options
            optionContainers.forEach(container => {
                container.classList.add('d-none');
            });
        });
    }

    // Gestion de la section Antécédents
    const antecedentsBtns = document.querySelectorAll('.antecedents-btn');
    const antecedentsDetails = document.getElementById('antecedentsDetails');
    const resetAntecedentsBtn = document.getElementById('resetAntecedentsBtn');

    // Gestion des boutons Antécédents (Non/Oui/Ne sait pas)
    antecedentsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            antecedentsBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            const value = this.getAttribute('data-value');
            if (value === 'non' || value === 'ne_sait_pas') {
                antecedentsDetails.classList.add('d-none');
                // Réinitialiser tous les champs si "Ne sait pas" est sélectionné
                if (value === 'ne_sait_pas') {
                    resetAntecedentsFields();
                }
            } else {
                antecedentsDetails.classList.remove('d-none');
            }
        });
    });

    // Fonction pour réinitialiser tous les champs des antécédents
    function resetAntecedentsFields() {
        // Réinitialiser tous les selects
        document.querySelectorAll('#antecedentsDetails select').forEach(select => {
            select.value = '';
        });
        
        // Réinitialiser tous les inputs
        document.querySelectorAll('#antecedentsDetails input').forEach(input => {
            input.value = '';
        });

        // Masquer tous les détails
        document.querySelectorAll('#antecedentsDetails .d-none').forEach(element => {
            if (!element.classList.contains('card')) {
                element.classList.add('d-none');
            }
        });
    }

    // Gestion du cancer du sein
    const cancerSeinSelect = document.querySelector('#form_mamo_indication_cancer_sein');
    const cancerSeinDetails = document.getElementById('cancerSeinDetails');
    const cancerSeinTraitement = document.querySelector('#form_mamo_indication_cancer_sein_traitement');
    const mastectomieDetails = document.getElementById('mastectomieDetails');

    if (cancerSeinSelect) {
        cancerSeinSelect.addEventListener('change', function() {
            if (this.value === 'oui') {
                cancerSeinDetails.classList.remove('d-none');
            } else {
                cancerSeinDetails.classList.add('d-none');
                // Réinitialiser les champs si "non" ou "non renseigné" est sélectionné
                if (cancerSeinDetails) {
                    cancerSeinDetails.querySelectorAll('select, input').forEach(field => {
                        field.value = '';
                    });
                }
            }
        });
    }

    if (cancerSeinTraitement) {
        cancerSeinTraitement.addEventListener('change', function() {
            if (this.value === 'mastectomie') {
                mastectomieDetails.classList.remove('d-none');
            } else {
                mastectomieDetails.classList.add('d-none');
                // Réinitialiser le champ de reconstruction si mastectomie n'est pas sélectionné
                if (mastectomieDetails) {
                    mastectomieDetails.querySelector('select').value = '';
                }
            }
        });
    }

    // Gestion de la chirurgie à risque
    const chirurgieRisqueSelect = document.querySelector('#form_mamo_indication_chirurgie_risque');
    const chirurgieRisqueDetails = document.getElementById('chirurgieRisqueDetails');

    if (chirurgieRisqueSelect) {
        chirurgieRisqueSelect.addEventListener('change', function() {
            if (this.value === 'oui') {
                chirurgieRisqueDetails.classList.remove('d-none');
            } else {
                chirurgieRisqueDetails.classList.add('d-none');
                // Réinitialiser les champs si "non" ou "non renseigné" est sélectionné
                if (chirurgieRisqueDetails) {
                    chirurgieRisqueDetails.querySelectorAll('select, input').forEach(field => {
                        field.value = '';
                    });
                }
            }
        });
    }

    // Gestion de la chirurgie bénigne
    const chirurgieBenigneSelect = document.querySelector('#form_mamo_indication_chirurgie_benigne');
    const chirurgieBenigneDetails = document.getElementById('chirurgieBenigneDetails');

    if (chirurgieBenigneSelect) {
        chirurgieBenigneSelect.addEventListener('change', function() {
            if (this.value === 'oui') {
                chirurgieBenigneDetails.classList.remove('d-none');
            } else {
                chirurgieBenigneDetails.classList.add('d-none');
                // Réinitialiser les champs si "non" ou "non renseigné" est sélectionné
                if (chirurgieBenigneDetails) {
                    chirurgieBenigneDetails.querySelectorAll('select, input').forEach(field => {
                        field.value = '';
                    });
                }
            }
        });
    }

    // Gestion de la chirurgie plastique
    const chirurgiePlastiqueSelect = document.querySelector('#form_mamo_indication_chirurgie_plastique');
    const chirurgiePlastiqueDetails = document.getElementById('chirurgiePlastiqueDetails');
    const chirurgiePlastiqueType = document.querySelector('#form_mamo_indication_chirurgie_plastique_type');
    const reductionDetails = document.getElementById('reductionDetails');
    const protheseDetails = document.getElementById('protheseDetails');
    const symetrisationDetails = document.getElementById('symetrisationDetails');
    const protheseLateralite = document.querySelector('#form_mamo_indication_prothese_lateralite');
    const protheseGaucheDetails = document.getElementById('protheseGaucheDetails');
    const protheseDroiteDetails = document.getElementById('protheseDroiteDetails');
    const protheseBilateraleDetails = document.getElementById('protheseBilateraleDetails');

    if (chirurgiePlastiqueSelect) {
        chirurgiePlastiqueSelect.addEventListener('change', function() {
            if (this.value === 'oui') {
                chirurgiePlastiqueDetails.classList.remove('d-none');
            } else {
                chirurgiePlastiqueDetails.classList.add('d-none');
                // Réinitialiser les champs si "non" ou "non renseigné" est sélectionné
                if (chirurgiePlastiqueDetails) {
                    chirurgiePlastiqueDetails.querySelectorAll('select, input').forEach(field => {
                        field.value = '';
                    });
                }
            }
        });
    }

    if (chirurgiePlastiqueType) {
        chirurgiePlastiqueType.addEventListener('change', function() {
            // Masquer tous les détails d'abord
            reductionDetails.classList.add('d-none');
            protheseDetails.classList.add('d-none');
            symetrisationDetails.classList.add('d-none');

            // Afficher les détails appropriés selon la sélection
            switch(this.value) {
                case 'reduction':
                    reductionDetails.classList.remove('d-none');
                    break;
                case 'prothese':
                    protheseDetails.classList.remove('d-none');
                    break;
                case 'symetrisation':
                    symetrisationDetails.classList.remove('d-none');
                    break;
            }
        });
    }

    if (protheseLateralite) {
        protheseLateralite.addEventListener('change', function() {
            // Masquer tous les détails d'abord
            protheseGaucheDetails.classList.add('d-none');
            protheseDroiteDetails.classList.add('d-none');
            protheseBilateraleDetails.classList.add('d-none');

            // Afficher les détails appropriés selon la sélection
            switch(this.value) {
                case 'gauche':
                    protheseGaucheDetails.classList.remove('d-none');
                    break;
                case 'droite':
                    protheseDroiteDetails.classList.remove('d-none');
                    break;
                case 'bilaterale':
                    protheseBilateraleDetails.classList.remove('d-none');
                    break;
            }
        });
    }

    // Gestion de la néoplasie ovarienne
    const neoplasieOvarienneSelect = document.querySelector('#form_mamo_indication_neoplasie_ovarienne');
    const neoplasieOvarienneDetails = document.getElementById('neoplasieOvarienneDetails');

    if (neoplasieOvarienneSelect) {
        neoplasieOvarienneSelect.addEventListener('change', function() {
            if (this.value === 'oui') {
                neoplasieOvarienneDetails.classList.remove('d-none');
            } else {
                neoplasieOvarienneDetails.classList.add('d-none');
                // Réinitialiser les champs si "non" ou "non renseigné" est sélectionné
                if (neoplasieOvarienneDetails) {
                    neoplasieOvarienneDetails.querySelectorAll('select, input').forEach(field => {
                        field.value = '';
                    });
                }
            }
        });
    }

    // Gestion du statut hormonal
    const statutHormonalSelect = document.querySelector('#form_mamo_indication_statut_hormonal');
    const menopauseeDetails = document.getElementById('menopauseeDetails');
    const nonMenopauseeDetails = document.getElementById('nonMenopauseeDetails');

    if (statutHormonalSelect) {
        statutHormonalSelect.addEventListener('change', function() {
            // Masquer tous les détails d'abord
            menopauseeDetails.classList.add('d-none');
            nonMenopauseeDetails.classList.add('d-none');

            // Afficher les détails appropriés selon la sélection
            switch(this.value) {
                case 'menopausee':
                    menopauseeDetails.classList.remove('d-none');
                    break;
                case 'non_menopausee':
                    nonMenopauseeDetails.classList.remove('d-none');
                    break;
                case 'menopause_en_cours':
                    // Pas de détails supplémentaires pour la ménopause en cours
                    break;
                default:
                    // Si aucune option n'est sélectionnée, on ne montre rien
                    break;
            }
        });
    }

    // Gestion des enfants et allaitement
    const nombreEnfantsSelect = document.querySelector('#form_mamo_indication_nombre_enfants');
    const allaitementContainer = document.querySelector('#allaitementContainer');
    const allaitementSelect = document.querySelector('#form_mamo_indication_allaitement');

    if (nombreEnfantsSelect && allaitementContainer && allaitementSelect) {
        nombreEnfantsSelect.addEventListener('change', function() {
            const nombreEnfants = this.value;
            const allaitementOptions = allaitementSelect.querySelectorAll('option');
            
            // Réinitialiser le select d'allaitement
            allaitementSelect.value = '';
            
            // Cacher le container d'allaitement par défaut
            allaitementContainer.style.display = 'none';
            
            // Afficher le container d'allaitement si un nombre d'enfants est sélectionné
            if (nombreEnfants) {
                allaitementContainer.style.display = 'block';
                
                // Mettre à jour les options d'allaitement selon le nombre d'enfants
                allaitementOptions.forEach(option => {
                    option.style.display = 'none';
                });
                
                // Afficher les options appropriées selon le nombre d'enfants
                switch(nombreEnfants) {
                    case '0':
                        allaitementContainer.style.display = 'none';
                        break;
                    case '1':
                        allaitementOptions.forEach(option => {
                            if (option.value === '' || option.value === 'oui' || option.value === 'non') {
                                option.style.display = 'block';
                                if (option.value === 'oui') option.textContent = 'Oui, allaité';
                                if (option.value === 'non') option.textContent = 'Non, non allaité';
                            }
                        });
                        break;
                    case '2':
                        allaitementOptions.forEach(option => {
                            if (option.value === '' || option.value === 'oui' || option.value === 'non' || option.value === '1_seul') {
                                option.style.display = 'block';
                                if (option.value === 'oui') option.textContent = 'Oui, allaités';
                                if (option.value === 'non') option.textContent = 'Non, non allaités';
                                if (option.value === '1_seul') option.textContent = '1 seul allaité';
                            }
                        });
                        break;
                    case '3':
                        allaitementOptions.forEach(option => {
                            if (option.value === '' || option.value === 'oui' || option.value === 'non' || option.value === '1_seul' || option.value === '2') {
                                option.style.display = 'block';
                                if (option.value === 'oui') option.textContent = 'Oui, allaités';
                                if (option.value === 'non') option.textContent = 'Non, non allaités';
                                if (option.value === '1_seul') option.textContent = '1 seul allaité';
                                if (option.value === '2') option.textContent = '2 allaités';
                            }
                        });
                        break;
                    case '4':
                    case '5_plus':
                        allaitementOptions.forEach(option => {
                            if (option.value === '' || option.value === 'oui' || option.value === 'non' || option.value === '1_seul' || option.value === 'certains') {
                                option.style.display = 'block';
                                if (option.value === 'oui') option.textContent = 'Oui, allaités';
                                if (option.value === 'non') option.textContent = 'Non, non allaités';
                                if (option.value === '1_seul') option.textContent = '1 seul allaité';
                                if (option.value === 'certains') option.textContent = 'Certains allaités';
                            }
                        });
                        break;
                }
            }
        });
    }

    // Gestion de la section Antécédents familiaux
    const antecedentsFamiliauxBtns = document.querySelectorAll('.antecedents-familiaux-btn');
    const antecedentsFamiliauxDetails = document.getElementById('antecedentsFamiliauxDetails');
    const resetAntecedentsFamiliauxBtn = document.getElementById('resetAntecedentsFamiliauxBtn');

    // Fonction pour gérer l'affichage des champs de nombre
    function toggleNombreField(selectElement, nombreContainer) {
        if (selectElement && nombreContainer) {
            const value = selectElement.value;
            if (value === 'branche_paternelle' || value === 'branche_maternelle' || value === 'soeur' || value === 'frere') {
                nombreContainer.classList.remove('d-none');
            } else {
                nombreContainer.classList.add('d-none');
            }
        }
    }

    // Gestion des boutons Antécédents familiaux
    antecedentsFamiliauxBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            antecedentsFamiliauxBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            const value = this.getAttribute('data-value');
            if (value === 'non' || value === 'ne_sait_pas') {
                antecedentsFamiliauxDetails.classList.add('d-none');
                // Réinitialiser tous les champs si "Ne sait pas" est sélectionné
                if (value === 'ne_sait_pas') {
                    resetAntecedentsFamiliauxFields();
                }
            } else {
                antecedentsFamiliauxDetails.classList.remove('d-none');
            }
        });
    });

    // Gestion des champs de nombre pour chaque type de cancer
    const cancerFields = [
        { select: 'cancer_sein_avant_30', nombre: 'cancer-sein-avant-30-nombre' },
        { select: 'cancer_sein_30_39', nombre: 'cancer-sein-30-39-nombre' },
        { select: 'cancer_sein_40_49', nombre: 'cancer-sein-40-49-nombre' },
        { select: 'cancer_sein_50_70', nombre: 'cancer-sein-50-70-nombre' },
        { select: 'cancer_sein_apres_70', nombre: 'cancer-sein-apres-70-nombre' },
        { select: 'cancer_ovarien_avant_70', nombre: 'cancer-ovarien-avant-70-nombre' },
        { select: 'cancer_ovarien_apres_70', nombre: 'cancer-ovarien-apres-70-nombre' },
        { select: 'cancer_sein_homme', nombre: 'cancer-sein-homme-nombre' }
    ];

    cancerFields.forEach(field => {
        const select = document.querySelector(`#form_mamo_${field.select}`);
        const nombreContainer = document.querySelector(`.${field.nombre}`);
        
        if (select && nombreContainer) {
            select.addEventListener('change', function() {
                toggleNombreField(this, nombreContainer);
            });
        }
    });

    // Gestion du reset des antécédents familiaux
    if (resetAntecedentsFamiliauxBtn) {
        resetAntecedentsFamiliauxBtn.addEventListener('click', function() {
            // Reset des boutons d'antécédents familiaux
            document.querySelectorAll('.antecedents-familiaux-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Reset des champs select dans la section des antécédents familiaux
            const antecedentsFamiliauxSection = document.getElementById('antecedentsFamiliauxDetails');
            if (antecedentsFamiliauxSection) {
                // Reset des selects
                antecedentsFamiliauxSection.querySelectorAll('select').forEach(select => {
                    select.value = '';
                });

                // Reset des champs number
                antecedentsFamiliauxSection.querySelectorAll('input[type="number"]').forEach(input => {
                    input.value = '';
                });

                // Masquer les champs nombre
                document.querySelectorAll('.cancer-sein-avant-30-nombre, .cancer-sein-30-39-nombre, .cancer-sein-40-49-nombre, .cancer-sein-50-70-nombre, .cancer-sein-apres-70-nombre, .cancer-ovarien-avant-70-nombre, .cancer-ovarien-apres-70-nombre, .cancer-sein-homme-nombre').forEach(el => {
                    el.classList.add('d-none');
                });
            }
        });
    }
});
