document.addEventListener('DOMContentLoaded', function() {

    // Gestion de la visibilité des sections
    const toggleButtons = document.querySelectorAll('.toggle-visibility');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const content = card.querySelector('.card-body');
            const isVisible = !content.classList.contains('d-none');
            
            // Toggle la visibilité
            content.classList.toggle('d-none');
            
            // Changer l'icône
            this.classList.toggle('bi-eye');
            this.classList.toggle('bi-eye-slash');
            
            // Ajouter une animation de transition
            if (!isVisible) {
                content.style.opacity = '0';
                content.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 10);
            }
        });
    });

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
}); 
