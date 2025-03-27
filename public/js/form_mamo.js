document.addEventListener('DOMContentLoaded', function() {

    // Gestion de la visibilité des sections
    const toggleButtons = document.querySelectorAll('.toggle-visibility');

    // Initialiser toutes les cartes comme fermées par défaut, sauf la carte principale
    document.querySelectorAll('.card-body').forEach(content => {
        if (!content.closest('.main-card')) {
            content.style.display = 'none';
        }
    });

    // Gestion des boutons individuels
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCardVisibility(this);
        });
    });

    // Ajouter le clic sur l'en-tête de la carte
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', function(e) {
            // Ne pas déclencher si on clique sur le bouton de l'œil
            if (!e.target.closest('.toggle-visibility')) {
                const toggleButton = this.querySelector('.toggle-visibility');
                if (toggleButton) {
                    toggleCardVisibility(toggleButton);
                }
            }
        });
    });

    // Fonction pour basculer la visibilité d'une carte
    function toggleCardVisibility(toggleButton) {
        const card = toggleButton.closest('.card');
        const content = card.querySelector('.card-body');
        const isVisible = content.style.display !== 'none';
        
        // Toggle la visibilité
        content.style.display = isVisible ? 'none' : 'block';
        
        // Changer l'icône
        toggleButton.classList.toggle('bi-eye');
        toggleButton.classList.toggle('bi-eye-slash');
    }

    const bilanBtn = document.getElementById('bilanBtn');
    const bilanOptions = document.getElementById('bilanOptions');
    const bilanText = document.querySelector('.bilan-text');
    const optionBtns = document.querySelectorAll('.option-btn');
    const resetBtn = document.getElementById('resetBtn');

    // Gestion du bouton Bilan
    if (bilanBtn && bilanOptions) {
        bilanBtn.addEventListener('click', function() {
            bilanOptions.classList.toggle('d-none');
            this.classList.toggle('active');
            
            // Changer l'icône du bouton
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-plus-circle');
                icon.classList.toggle('bi-minus-circle');
            }
        });
    }

    // Gestion des boutons d'options
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            optionBtns.forEach(b => {
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
            document.querySelectorAll('.option-container').forEach(container => {
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
            optionBtns.forEach(btn => {
                btn.classList.remove('active');
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.classList.remove('bi-check-circle-fill');
                    icon.classList.add('bi-dot-circle');
                }
            });

            // Masquer tous les conteneurs d'options
            document.querySelectorAll('.option-container').forEach(container => {
                container.classList.add('d-none');
            });
        });
    }

    // Nouveau code pour la section Antécédents
    const antecedentsBtns = document.querySelectorAll('.antecedents-btn');
    const antecedentsDetails = document.getElementById('antecedentsDetails');

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

    // Gestion du bouton Reset des antécédents
    const resetAntecedentsBtn = document.getElementById('resetAntecedentsBtn');
    if (resetAntecedentsBtn) {
        resetAntecedentsBtn.addEventListener('click', function() {
            resetAntecedentsFields();
            // Retirer la classe active de tous les boutons
            antecedentsBtns.forEach(b => b.classList.remove('active'));
        });
    }

    // Gestion du cancer du sein
    const cancerSeinSelect = document.getElementById('cancerSeinSelect');
    const cancerSeinDetails = document.getElementById('cancerSeinDetails');
    const cancerSeinTraitement = document.getElementById('cancerSeinTraitement');
    const mastectomieDetails = document.getElementById('mastectomieDetails');

    if (cancerSeinSelect) {
        cancerSeinSelect.addEventListener('change', function() {
            cancerSeinDetails.classList.toggle('d-none', this.value !== 'oui');
        });
    }

    if (cancerSeinTraitement) {
        cancerSeinTraitement.addEventListener('change', function() {
            mastectomieDetails.classList.toggle('d-none', this.value !== 'mastectomie');
        });
    }

    // Gestion de la chirurgie à risque
    const chirurgieRisqueSelect = document.getElementById('chirurgieRisqueSelect');
    const chirurgieRisqueDetails = document.getElementById('chirurgieRisqueDetails');

    if (chirurgieRisqueSelect) {
        chirurgieRisqueSelect.addEventListener('change', function() {
            chirurgieRisqueDetails.classList.toggle('d-none', this.value !== 'oui');
        });
    }

    // Gestion de la chirurgie bénigne
    const chirurgieBenigneSelect = document.getElementById('chirurgieBenigneSelect');
    const chirurgieBenigneDetails = document.getElementById('chirurgieBenigneDetails');

    if (chirurgieBenigneSelect) {
        chirurgieBenigneSelect.addEventListener('change', function() {
            chirurgieBenigneDetails.classList.toggle('d-none', this.value !== 'oui');
        });
    }

    // Gestion de la chirurgie plastique
    const chirurgiePlastiqueSelect = document.getElementById('chirurgiePlastiqueSelect');
    const chirurgiePlastiqueDetails = document.getElementById('chirurgiePlastiqueDetails');
    const chirurgiePlastiqueType = document.getElementById('chirurgiePlastiqueType');
    const reductionDetails = document.getElementById('reductionDetails');
    const protheseDetails = document.getElementById('protheseDetails');
    const symetrisationDetails = document.getElementById('symetrisationDetails');
    const protheseLateralite = document.getElementById('protheseLateralite');
    const protheseGaucheDetails = document.getElementById('protheseGaucheDetails');
    const protheseDroiteDetails = document.getElementById('protheseDroiteDetails');
    const protheseBilateraleDetails = document.getElementById('protheseBilateraleDetails');

    if (chirurgiePlastiqueSelect) {
        chirurgiePlastiqueSelect.addEventListener('change', function() {
            chirurgiePlastiqueDetails.classList.toggle('d-none', this.value !== 'oui');
        });
    }

    if (chirurgiePlastiqueType) {
        chirurgiePlastiqueType.addEventListener('change', function() {
            reductionDetails.classList.toggle('d-none', this.value !== 'reduction');
            protheseDetails.classList.toggle('d-none', this.value !== 'prothese');
            symetrisationDetails.classList.toggle('d-none', this.value !== 'symetrisation');
        });
    }

    if (protheseLateralite) {
        protheseLateralite.addEventListener('change', function() {
            protheseGaucheDetails.classList.toggle('d-none', this.value !== 'gauche');
            protheseDroiteDetails.classList.toggle('d-none', this.value !== 'droite');
            protheseBilateraleDetails.classList.toggle('d-none', this.value !== 'bilaterale');
        });
    }

    // Gestion de la néoplasie ovarienne
    const neoplasieOvarienneSelect = document.getElementById('neoplasieOvarienneSelect');
    const neoplasieOvarienneDetails = document.getElementById('neoplasieOvarienneDetails');

    if (neoplasieOvarienneSelect) {
        neoplasieOvarienneSelect.addEventListener('change', function() {
            neoplasieOvarienneDetails.classList.toggle('d-none', this.value !== 'oui');
        });
    }

    // Gestion du statut hormonal
    const statutHormonalSelect = document.getElementById('statutHormonalSelect');
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

    // Gestion de la section Enfants
    const nombreEnfantsSelect = document.querySelector('#form_mamo_nombre_enfants');
    const allaitementContainer = document.querySelector('#allaitementContainer');
    const allaitementSelect = document.querySelector('#form_mamo_allaitement');

    if (nombreEnfantsSelect && allaitementContainer && allaitementSelect) {
        // Fonction pour mettre à jour les options d'allaitement
        function updateAllaitementOptions(nombreEnfants) {
            // Réinitialiser les options
            allaitementSelect.innerHTML = '<option value="">Allaitement</option>';
            
            // Ajouter les options en fonction du nombre d'enfants
            switch(nombreEnfants) {
                case '0':
                    allaitementContainer.style.display = 'none';
                    break;
                case '1':
                    allaitementContainer.style.display = 'block';
                    allaitementSelect.innerHTML += `
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                    `;
                    break;
                case '2':
                    allaitementContainer.style.display = 'block';
                    allaitementSelect.innerHTML += `
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                        <option value="1_seul">1 seul</option>
                    `;
                    break;
                case '3':
                    allaitementContainer.style.display = 'block';
                    allaitementSelect.innerHTML += `
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                        <option value="1_seul">1 seul</option>
                        <option value="2">2</option>
                    `;
                    break;
                case '4':
                case '5_plus':
                    allaitementContainer.style.display = 'block';
                    allaitementSelect.innerHTML += `
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                        <option value="1_seul">1</option>
                        <option value="certains">Certains</option>
                    `;
                    break;
                default:
                    allaitementContainer.style.display = 'none';
            }
        }

        // Écouter les changements sur le select du nombre d'enfants
        nombreEnfantsSelect.addEventListener('change', function() {
            updateAllaitementOptions(this.value);
        });

        // Initialiser l'état des options d'allaitement
        updateAllaitementOptions(nombreEnfantsSelect.value);
    }

    // Gestion de la section Antécédents familiaux
    const antecedentsFamiliauxBtns = document.querySelectorAll('.antecedents-familiaux-btn');
    const antecedentsFamiliauxDetails = document.getElementById('antecedentsFamiliauxDetails');

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

    // Fonction pour réinitialiser tous les champs des antécédents familiaux
    function resetAntecedentsFamiliauxFields() {
        // Réinitialiser tous les selects
        document.querySelectorAll('#antecedentsFamiliauxDetails select').forEach(select => {
            select.value = '';
        });
        
        // Réinitialiser tous les inputs
        document.querySelectorAll('#antecedentsFamiliauxDetails input').forEach(input => {
            input.value = '';
        });

        // Masquer tous les champs de nombre
        document.querySelectorAll('#antecedentsFamiliauxDetails .d-none').forEach(element => {
            if (element.classList.contains('cancer-sein-avant-30-nombre') ||
                element.classList.contains('cancer-sein-30-39-nombre') ||
                element.classList.contains('cancer-sein-40-49-nombre') ||
                element.classList.contains('cancer-sein-50-70-nombre') ||
                element.classList.contains('cancer-sein-apres-70-nombre') ||
                element.classList.contains('cancer-ovarien-avant-70-nombre') ||
                element.classList.contains('cancer-ovarien-apres-70-nombre') ||
                element.classList.contains('cancer-sein-homme-nombre')) {
                element.classList.add('d-none');
            }
        });
    }

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
    const resetAntecedentsFamiliauxBtn = document.getElementById('resetAntecedentsFamiliauxBtn');
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

    // Gestion de la section Technique
    const difficulteTechniqueSelect = document.querySelector('#form_mamo_difficulte_technique');
    const difficulteTechniqueAutreContainer = document.getElementById('difficulteTechniqueAutreContainer');
    const echographieSelect = document.querySelector('#form_mamo_echographie');
    const echographieIndicationContainer = document.getElementById('echographieIndicationContainer');
    const ajouterIncidencesBtn = document.getElementById('ajouterIncidencesBtn');
    const incidencesContainer = document.querySelector('.incidences-complementaires');

    // Gestion de la difficulté technique
    if (difficulteTechniqueSelect && difficulteTechniqueAutreContainer) {
        difficulteTechniqueSelect.addEventListener('change', function() {
            difficulteTechniqueAutreContainer.style.display = this.value === 'autre' ? 'block' : 'none';
        });
    }

    // Gestion de l'échographie
    if (echographieSelect && echographieIndicationContainer) {
        echographieSelect.addEventListener('change', function() {
            echographieIndicationContainer.style.display = this.value === 'bilaterale' ? 'block' : 'none';
        });
    }

    // Gestion du bouton Ajouter pour les incidences complémentaires
    if (ajouterIncidencesBtn) {
        ajouterIncidencesBtn.addEventListener('click', function() {
            // Créer un nouveau groupe d'incidences
            const newIncidencesGroup = document.createElement('div');
            newIncidencesGroup.className = 'incidences-group mb-3';
            newIncidencesGroup.innerHTML = `
                <div class="row g-2 align-items-center">
                    <div class="col-md-8">
                        <select class="form-select" name="incidences_complementaires[]">
                            <option value="">Sélectionner une incidence</option>
                            <option value="agrandis_face_profil">Réalisation complémentaire de clichés agrandis de face et de profil</option>
                            <option value="face_roule">Réalisation complémentaire d'un cliché de face roulé</option>
                            <option value="face_cleopatre">Réalisation complémentaire d'un cliché de face tournée (dit de Cléopâtre)</option>
                            <option value="comprime_localise">Réalisation complémentaire d'un cliché comprimé localisé</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" name="incidences_lateralite[]">
                            <option value="">Latéralité ?</option>
                            <option value="droite">Droite</option>
                            <option value="gauche">Gauche</option>
                        </select>
                    </div>
                    <div class="col-md-1 text-end">
                        <button type="button" class="btn btn-outline-danger remove-incidence w-100">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `;

            // Ajouter le nouveau groupe après le dernier groupe existant
            const incidencesContainer = document.querySelector('.incidences-complementaires');
            incidencesContainer.appendChild(newIncidencesGroup);

            // Ajouter l'événement de suppression
            const removeBtn = newIncidencesGroup.querySelector('.remove-incidence');
            removeBtn.addEventListener('click', function() {
                newIncidencesGroup.remove();
            });
        });
    }

    // Gestion de la modification des sections de résultat selon la technique
    const techniqueMammographieSelect = document.querySelector('#form_mamo_technique_mammographie');
    if (techniqueMammographieSelect) {
        techniqueMammographieSelect.addEventListener('change', function() {
            // Cette fonction sera implémentée plus tard quand nous ajouterons les sections de résultat
            console.log('Technique mammographie changée:', this.value);
        });
    }

    // Gestion de la modification des sections de résultat selon l'échographie
    if (echographieSelect) {
        echographieSelect.addEventListener('change', function() {
            // Cette fonction sera implémentée plus tard quand nous ajouterons les sections de résultat
            console.log('Échographie changée:', this.value);
        });
    }

    // Gestion de la section Comparatif
    const comparatifTypeSelect = document.querySelector('#form_mamo_comparatif_type');
    const comparatifDetails = document.getElementById('comparatifDetails');
    const ajouterComparatifAncienBtn = document.getElementById('ajouterComparatifAncienBtn');
    const comparatifAncienContainer = document.getElementById('comparatifAncienContainer');

    // Gestion du type de comparatif
    if (comparatifTypeSelect && comparatifDetails) {
        comparatifTypeSelect.addEventListener('change', function() {
            comparatifDetails.classList.toggle('d-none', this.value === 'non');
            // Réinitialiser le conteneur du bilan plus ancien si "Non" est sélectionné
            if (this.value === 'non') {
                comparatifAncienContainer.classList.add('d-none');
                document.querySelector('#form_mamo_comparatif_ancien_date').value = '';
            }
        });
    }

    // Gestion du bouton pour ajouter un bilan plus ancien
    if (ajouterComparatifAncienBtn && comparatifAncienContainer) {
        ajouterComparatifAncienBtn.addEventListener('click', function() {
            comparatifAncienContainer.classList.toggle('d-none');
            if (!comparatifAncienContainer.classList.contains('d-none')) {
                this.innerHTML = '<i class="bi bi-minus-circle me-1"></i>Supprimer le bilan plus ancien';
            } else {
                this.innerHTML = '<i class="bi bi-plus-circle me-1"></i>Nous disposons également d\'un bilan plus ancien datant de (MM/AAAA)';
                document.querySelector('#form_mamo_comparatif_ancien_date').value = '';
            }
        });
    }

    // Initialisation des calendriers
    const calendarIcons = document.querySelectorAll('.calendar-icon');
    calendarIcons.forEach(icon => {
        const targetId = icon.getAttribute('data-target');
        const input = document.getElementById(targetId);
        
        if (input) {
            // Trouver la carte parente
            const card = input.closest('.card');
            
            // Configuration du calendrier
            const config = {
                dateFormat: targetId.includes('ancien') ? 'm/Y' : 'd/m/Y',
                locale: 'fr',
                allowInput: true,
                altInput: true,
                altFormat: targetId.includes('ancien') ? 'F Y' : 'd/m/Y',
                static: true,
                position: 'below',
                inline: false,
                showMonths: 1,
                disableMobile: true,
                onChange: function(selectedDates, dateStr) {
                    input.value = dateStr;
                },
                onOpen: function() {
                    if (card) {
                        card.classList.add('calendar-open');
                    }
                },
                onClose: function() {
                    if (card) {
                        card.classList.remove('calendar-open');
                    }
                }
            };

            // Initialiser Flatpickr
            const fp = flatpickr(input, config);

            // Gérer le clic sur l'icône
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                fp.toggle();
            });
        }
    });

    // Gestion de la section Densité des seins
    const asymetrieDensiteGauche = document.getElementById('form_mamo_asymetrie_densite_gauche');
    const asymetrieDensiteTypeGauche = document.getElementById('form_mamo_asymetrie_densite_type_gauche');
    const asymetrieDensiteDroite = document.getElementById('form_mamo_asymetrie_densite_droite');
    const asymetrieDensiteTypeDroite = document.getElementById('form_mamo_asymetrie_densite_type_droite');

    // Fonction pour mettre à jour les détails d'asymétrie pour un sein
    function updateAsymetrieTypeDetails(prefix) {
        const asymetrieDensite = document.getElementById(`form_mamo_asymetrie_densite_${prefix}`);
        const asymetrieDensiteType = document.getElementById(`form_mamo_asymetrie_densite_type_${prefix}`);
        const detailsContainer = document.getElementById(`asymetrieDensite${prefix.charAt(0).toUpperCase() + prefix.slice(1)}Details`);
        
        if (asymetrieDensite && asymetrieDensiteType && detailsContainer) {
            if (asymetrieDensite.value === 'oui') {
                detailsContainer.classList.remove('d-none');
                updateAsymetrieTypeDetailsDisplay(prefix);
            } else {
                detailsContainer.classList.add('d-none');
            }
        }
    }

    // Fonction pour mettre à jour l'affichage des détails selon le type d'asymétrie
    function updateAsymetrieTypeDetailsDisplay(prefix) {
        const asymetrieDensiteType = document.getElementById(`form_mamo_asymetrie_densite_type_${prefix}`);
        const focaleDetails = document.getElementById(`asymetrieFocale${prefix.charAt(0).toUpperCase() + prefix.slice(1)}Details`);
        const globaleDetails = document.getElementById(`asymetrieGlobale${prefix.charAt(0).toUpperCase() + prefix.slice(1)}Details`);
        const simpleDetails = document.getElementById(`asymetrieSimple${prefix.charAt(0).toUpperCase() + prefix.slice(1)}Details`);

        if (asymetrieDensiteType && focaleDetails && globaleDetails && simpleDetails) {
            // Masquer tous les détails
            focaleDetails.classList.add('d-none');
            globaleDetails.classList.add('d-none');
            simpleDetails.classList.add('d-none');

            // Afficher les détails correspondants
            switch (asymetrieDensiteType.value) {
                case 'focale':
                    focaleDetails.classList.remove('d-none');
                    break;
                case 'globale':
                    globaleDetails.classList.remove('d-none');
                    break;
                case 'simple':
                    simpleDetails.classList.remove('d-none');
                    break;
            }
        }
    }

    // Écouteurs d'événements pour le sein gauche
    if (asymetrieDensiteGauche) {
        asymetrieDensiteGauche.addEventListener('change', () => updateAsymetrieTypeDetails('gauche'));
    }

    if (asymetrieDensiteTypeGauche) {
        asymetrieDensiteTypeGauche.addEventListener('change', () => updateAsymetrieTypeDetailsDisplay('gauche'));
    }

    // Écouteurs d'événements pour le sein droit
    if (asymetrieDensiteDroite) {
        asymetrieDensiteDroite.addEventListener('change', () => updateAsymetrieTypeDetails('droite'));
    }

    if (asymetrieDensiteTypeDroite) {
        asymetrieDensiteTypeDroite.addEventListener('change', () => updateAsymetrieTypeDetailsDisplay('droite'));
    }

    // Initialisation de l'affichage
    document.addEventListener('DOMContentLoaded', () => {
        updateAsymetrieTypeDetails('gauche');
        updateAsymetrieTypeDetails('droite');
    });

    // Gestion de l'examen clinique des seins
    const examenCliniqueSeins = document.getElementById('form_mamo_examen_clinique_seins');
    const examenCliniqueSeinsNonDetails = document.getElementById('examenCliniqueSeinsNonDetails');
    const examenTypeBtns = document.querySelectorAll('.examen-type-btn');
    const resetExamenCliniqueBtn = document.getElementById('resetExamenCliniqueBtn');

    // Gestion de l'examen clinique des seins
    if (examenCliniqueSeins) {
        examenCliniqueSeins.addEventListener('change', function() {
            if (this.value === 'non') {
                examenCliniqueSeinsNonDetails.classList.remove('d-none');
            } else {
                examenCliniqueSeinsNonDetails.classList.add('d-none');
                resetExamenCliniqueFields();
            }
        });
    }

    // Gestion des boutons d'examen clinique
    examenTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            examenTypeBtns.forEach(b => {
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
            
            // Masquer tous les conteneurs de détails
            document.querySelectorAll('#examenCliniqueSeinsNonDetails > div:not(:first-child)').forEach(container => {
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

    // Gestion des topographies
    const topographieFields = ['masse', 'erytheme', 'retraction'];
    topographieFields.forEach(field => {
        const topographieSelect = document.getElementById(`form_mamo_${field}_topographie`);
        const topographieDetails = document.getElementById(`${field}TopographieDetails`);
        
        if (topographieSelect && topographieDetails) {
            topographieSelect.addEventListener('change', function() {
                topographieDetails.classList.add('d-none');
                if (['quadrant', 'union', 'region'].includes(this.value)) {
                    topographieDetails.classList.remove('d-none');
                }
            });
        }
    });

    // Fonction pour réinitialiser tous les champs
    function resetExamenCliniqueFields() {
        // Réinitialiser tous les selects
        document.querySelectorAll('#examenCliniqueSeinsNonDetails select').forEach(select => {
            select.value = '';
        });
        
        // Réinitialiser tous les inputs
        document.querySelectorAll('#examenCliniqueSeinsNonDetails input').forEach(input => {
            input.value = '';
        });

        // Masquer tous les conteneurs de détails
        document.querySelectorAll('#examenCliniqueSeinsNonDetails > div:not(:first-child)').forEach(container => {
            container.classList.add('d-none');
        });

        // Retirer la classe active de tous les boutons
        examenTypeBtns.forEach(btn => {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('bi-check-circle-fill');
                icon.classList.add('bi-dot-circle');
            }
        });
    }

    // Gestion du bouton Reset
    if (resetExamenCliniqueBtn) {
        resetExamenCliniqueBtn.addEventListener('click', resetExamenCliniqueFields);
    }

    // Gestion de l'examen clinique des creux axillaires
    const examenCliniqueAxillaires = document.getElementById('form_mamo_examen_clinique_axillaires');
    const examenCliniqueAxillairesNonDetails = document.getElementById('examenCliniqueAxillairesNonDetails');
    const examenAxillaireBtns = document.querySelectorAll('.examen-axillaire-btn');
    const resetExamenAxillaireBtn = document.getElementById('resetExamenAxillaireBtn');

    // Gestion de l'examen clinique des creux axillaires
    if (examenCliniqueAxillaires) {
        examenCliniqueAxillaires.addEventListener('change', function() {
            if (this.value === 'non') {
                examenCliniqueAxillairesNonDetails.classList.remove('d-none');
            } else {
                examenCliniqueAxillairesNonDetails.classList.add('d-none');
                resetExamenAxillaireFields();
            }
        });
    }

    // Gestion des boutons d'examen axillaire
    examenAxillaireBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            examenAxillaireBtns.forEach(b => {
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
            
            // Masquer tous les conteneurs de détails
            document.querySelectorAll('#examenCliniqueAxillairesNonDetails > div:not(:first-child)').forEach(container => {
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

    // Fonction pour réinitialiser tous les champs
    function resetExamenAxillaireFields() {
        // Réinitialiser tous les selects
        document.querySelectorAll('#examenCliniqueAxillairesNonDetails select').forEach(select => {
            select.value = '';
        });
        
        // Réinitialiser tous les inputs
        document.querySelectorAll('#examenCliniqueAxillairesNonDetails input').forEach(input => {
            input.value = '';
        });

        // Masquer tous les conteneurs de détails
        document.querySelectorAll('#examenCliniqueAxillairesNonDetails > div:not(:first-child)').forEach(container => {
            container.classList.add('d-none');
        });

        // Retirer la classe active de tous les boutons
        examenAxillaireBtns.forEach(btn => {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('bi-check-circle-fill');
                icon.classList.add('bi-dot-circle');
            }
        });
    }

    // Gestion du bouton Reset
    if (resetExamenAxillaireBtn) {
        resetExamenAxillaireBtn.addEventListener('click', resetExamenAxillaireFields);
    }
}); 

