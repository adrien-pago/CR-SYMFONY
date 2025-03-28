document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la section Examen Clinique
    const examenCliniqueBtn = document.getElementById('examenCliniqueBtn');
    const examenCliniqueOptions = document.getElementById('examenCliniqueOptions');
    const optionBtns = document.querySelectorAll('.option-btn');
    const resetBtn = document.getElementById('resetBtn');

    // Gestion du bouton Examen Clinique
    if (examenCliniqueBtn && examenCliniqueOptions) {
        examenCliniqueBtn.addEventListener('click', function() {
            examenCliniqueOptions.classList.toggle('d-none');
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

    // Gestion de l'examen clinique des seins
    const examenCliniqueSeinsSelect = document.querySelector("#form_mamo_examen_clinique_examen_clinique_seins")
    const examenCliniqueSeinsNonDetails = document.getElementById('examenCliniqueSeinsNonDetails');
    const examenTypeBtns = document.querySelectorAll('.examen-type-btn');
    const resetExamenCliniqueBtn = document.getElementById('resetExamenCliniqueBtn');

    // Gestion de l'examen clinique des creux axillaires
    const examenCliniqueAxillairesSelect = document.querySelector("#form_mamo_examen_clinique_examen_clinique_axillaires");
    const examenCliniqueAxillairesNonDetails = document.getElementById('examenCliniqueAxillairesNonDetails');
    const examenAxillaireBtns = document.querySelectorAll('.examen-axillaire-btn');
    const resetExamenAxillaireBtn = document.getElementById('resetExamenAxillaireBtn');

    // Gestion de l'affichage des détails pour l'examen clinique des seins
    if (examenCliniqueSeinsSelect && examenCliniqueSeinsNonDetails) {
        examenCliniqueSeinsSelect.addEventListener('change', function() {
            const isNon = this.value === 'non';
            
            // Ajouter une transition fluide pour l'affichage/masquage
            if (isNon) {
                examenCliniqueSeinsNonDetails.style.display = 'block';
                examenCliniqueSeinsNonDetails.style.opacity = '0';
                setTimeout(() => {
                    examenCliniqueSeinsNonDetails.classList.remove('d-none');
                    examenCliniqueSeinsNonDetails.style.opacity = '1';
                }, 10);
            } else {
                examenCliniqueSeinsNonDetails.style.opacity = '0';
                setTimeout(() => {
                    examenCliniqueSeinsNonDetails.classList.add('d-none');
                }, 300);
            }
            
            // Si "Oui" est sélectionné, afficher le message de normalité avec transition
            if (this.value === 'oui') {
                const normalMessage = document.createElement('div');
                normalMessage.className = 'alert alert-success mt-3';
                normalMessage.style.opacity = '0';
                normalMessage.style.transition = 'opacity 0.3s ease-in-out';
                normalMessage.innerHTML = '<i class="bi bi-check-circle me-2"></i>Absence de masse mammaire palpable ; les seins sont symétriques.';
                examenCliniqueSeinsNonDetails.parentNode.insertBefore(normalMessage, examenCliniqueSeinsNonDetails);
                setTimeout(() => {
                    normalMessage.style.opacity = '1';
                }, 10);
            } else {
                // Supprimer le message de normalité avec transition
                const existingMessage = examenCliniqueSeinsNonDetails.previousElementSibling;
                if (existingMessage && existingMessage.classList.contains('alert-success')) {
                    existingMessage.style.opacity = '0';
                    setTimeout(() => {
                        existingMessage.remove();
                    }, 300);
                }
            }
        });
    }

    // Gestion de l'affichage des détails pour l'examen clinique des creux axillaires
    if (examenCliniqueAxillairesSelect && examenCliniqueAxillairesNonDetails) {
        examenCliniqueAxillairesSelect.addEventListener('change', function() {
            const isNon = this.value === 'non';
            
            // Ajouter une transition fluide pour l'affichage/masquage
            if (isNon) {
                examenCliniqueAxillairesNonDetails.style.display = 'block';
                examenCliniqueAxillairesNonDetails.style.opacity = '0';
                setTimeout(() => {
                    examenCliniqueAxillairesNonDetails.classList.remove('d-none');
                    examenCliniqueAxillairesNonDetails.style.opacity = '1';
                }, 10);
            } else {
                examenCliniqueAxillairesNonDetails.style.opacity = '0';
                setTimeout(() => {
                    examenCliniqueAxillairesNonDetails.classList.add('d-none');
                }, 300);
            }
            
            // Si "Oui" est sélectionné, afficher le message de normalité avec transition
            if (this.value === 'oui') {
                const normalMessage = document.createElement('div');
                normalMessage.className = 'alert alert-success mt-3';
                normalMessage.style.opacity = '0';
                normalMessage.style.transition = 'opacity 0.3s ease-in-out';
                normalMessage.innerHTML = '<i class="bi bi-check-circle me-2"></i>Absence d\'anomalie clinique des creux axillaires.';
                examenCliniqueAxillairesNonDetails.parentNode.insertBefore(normalMessage, examenCliniqueAxillairesNonDetails);
                setTimeout(() => {
                    normalMessage.style.opacity = '1';
                }, 10);
            } else {
                // Supprimer le message de normalité avec transition
                const existingMessage = examenCliniqueAxillairesNonDetails.previousElementSibling;
                if (existingMessage && existingMessage.classList.contains('alert-success')) {
                    existingMessage.style.opacity = '0';
                    setTimeout(() => {
                        existingMessage.remove();
                    }, 300);
                }
            }
        });
    }

    // Gestion des boutons d'options pour l'examen clinique des seins
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
            
            // Masquer tous les conteneurs d'options
            document.querySelectorAll('#examenCliniqueSeinsNonDetails > div:not(.d-flex)').forEach(container => {
                container.classList.add('d-none');
            });
            
            // Afficher le conteneur correspondant
            const targetId = this.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.remove('d-none');
                
                // Ajouter une transition fluide
                targetContainer.style.opacity = '0';
                targetContainer.style.transition = 'opacity 0.3s ease-in-out';
                setTimeout(() => {
                    targetContainer.style.opacity = '1';
                }, 10);
            }
        });
    });

    // Gestion des boutons d'options pour l'examen clinique des creux axillaires
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
            
            // Masquer tous les conteneurs d'options
            document.querySelectorAll('#examenCliniqueAxillairesNonDetails > div:not(.d-flex)').forEach(container => {
                container.classList.add('d-none');
            });
            
            // Afficher le conteneur correspondant
            const targetId = this.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.remove('d-none');
                
                // Ajouter une transition fluide
                targetContainer.style.opacity = '0';
                targetContainer.style.transition = 'opacity 0.3s ease-in-out';
                setTimeout(() => {
                    targetContainer.style.opacity = '1';
                }, 10);
            }
        });
    });

    // Gestion du bouton Reset pour l'examen clinique des seins
    if (resetExamenCliniqueBtn) {
        resetExamenCliniqueBtn.addEventListener('click', function() {
            // Réinitialiser tous les champs de formulaire dans les conteneurs d'options
            document.querySelectorAll('#examenCliniqueSeinsNonDetails select, #examenCliniqueSeinsNonDetails textarea').forEach(field => {
                field.value = '';
            });

            // Retirer la classe active de tous les boutons d'options
            examenTypeBtns.forEach(btn => {
                btn.classList.remove('active');
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.classList.remove('bi-check-circle-fill');
                    icon.classList.add('bi-dot-circle');
                }
            });

            // Masquer tous les conteneurs d'options
            document.querySelectorAll('#examenCliniqueSeinsNonDetails > div:not(.d-flex)').forEach(container => {
                container.classList.add('d-none');
            });

            // Supprimer le message de normalité s'il existe
            const normalMessage = examenCliniqueSeinsNonDetails.previousElementSibling;
            if (normalMessage && normalMessage.classList.contains('alert-success')) {
                normalMessage.remove();
            }
        });
    }

    // Gestion du bouton Reset pour l'examen clinique des creux axillaires
    if (resetExamenAxillaireBtn) {
        resetExamenAxillaireBtn.addEventListener('click', function() {
            // Réinitialiser tous les champs de formulaire dans les conteneurs d'options
            document.querySelectorAll('#examenCliniqueAxillairesNonDetails select, #examenCliniqueAxillairesNonDetails textarea').forEach(field => {
                field.value = '';
            });

            // Retirer la classe active de tous les boutons d'options
            examenAxillaireBtns.forEach(btn => {
                btn.classList.remove('active');
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.classList.remove('bi-check-circle-fill');
                    icon.classList.add('bi-dot-circle');
                }
            });

            // Masquer tous les conteneurs d'options
            document.querySelectorAll('#examenCliniqueAxillairesNonDetails > div:not(.d-flex)').forEach(container => {
                container.classList.add('d-none');
            });

            // Supprimer le message de normalité s'il existe
            const normalMessage = examenCliniqueAxillairesNonDetails.previousElementSibling;
            if (normalMessage && normalMessage.classList.contains('alert-success')) {
                normalMessage.remove();
            }
        });
    }

    // Gestion des champs de topographie avec transitions améliorées
    const topographieSelects = document.querySelectorAll('select[id*="_topographie"]');
    topographieSelects.forEach(select => {
        select.addEventListener('change', function() {
            const container = this.closest('.row');
            if (!container) return;

            // Masquer tous les conteneurs de topographie avec transition
            container.querySelectorAll('[id$="Details"]').forEach(detail => {
                if (!detail.classList.contains('d-none')) {
                    detail.style.opacity = '0';
                    setTimeout(() => {
                        detail.classList.add('d-none');
                    }, 300);
                }
            });

            // Afficher le conteneur correspondant à la sélection avec transition
            const value = this.value;
            if (value) {
                const targetContainer = container.querySelector(`#${value}Details`);
                if (targetContainer) {
                    targetContainer.style.display = 'block';
                    targetContainer.style.opacity = '0';
                    targetContainer.style.transition = 'opacity 0.3s ease-in-out';
                    setTimeout(() => {
                        targetContainer.classList.remove('d-none');
                        targetContainer.style.opacity = '1';
                    }, 10);
                }
            }
        });
    });

    // Gestion des champs de masse
    const masseFields = {
        lateralite: document.getElementById('form_mamo_masse_lateralite'),
        quadrant: document.getElementById('form_mamo_masse_quadrant'),
        taille: document.getElementById('form_mamo_masse_taille'),
        mobilite: document.getElementById('form_mamo_masse_mobilite'),
        douleur: document.getElementById('form_mamo_masse_douleur'),
        consistance: document.getElementById('form_mamo_masse_consistance')
    };

    // Fonction pour gérer l'affichage des champs de masse
    function toggleMasseFields(show) {
        Object.values(masseFields).forEach(field => {
            if (field) {
                field.closest('.form-group').classList.toggle('d-none', !show);
            }
        });
    }

    // Gestion de l'affichage des champs de masse en fonction de la sélection
    const massePresenteSelect = document.getElementById('form_mamo_masse_presente');
    if (massePresenteSelect) {
        massePresenteSelect.addEventListener('change', function() {
            toggleMasseFields(this.value === 'oui');
        });
    }

    // Gestion des champs d'écoulement
    const ecoulementFields = {
        lateralite: document.getElementById('form_mamo_ecoulement_lateralite'),
        type: document.getElementById('form_mamo_ecoulement_type'),
        couleur: document.getElementById('form_mamo_ecoulement_couleur'),
        spontane: document.getElementById('form_mamo_ecoulement_spontane')
    };

    // Fonction pour gérer l'affichage des champs d'écoulement
    function toggleEcoulementFields(show) {
        Object.values(ecoulementFields).forEach(field => {
            if (field) {
                field.closest('.form-group').classList.toggle('d-none', !show);
            }
        });
    }

    // Gestion de l'affichage des champs d'écoulement en fonction de la sélection
    const ecoulementPresentSelect = document.getElementById('form_mamo_ecoulement_present');
    if (ecoulementPresentSelect) {
        ecoulementPresentSelect.addEventListener('change', function() {
            toggleEcoulementFields(this.value === 'oui');
        });
    }

    // Gestion des champs de rétraction
    const retractionFields = {
        lateralite: document.getElementById('form_mamo_retraction_lateralite'),
        type: document.getElementById('form_mamo_retraction_type')
    };

    // Fonction pour gérer l'affichage des champs de rétraction
    function toggleRetractionFields(show) {
        Object.values(retractionFields).forEach(field => {
            if (field) {
                field.closest('.form-group').classList.toggle('d-none', !show);
            }
        });
    }

    // Gestion de l'affichage des champs de rétraction en fonction de la sélection
    const retractionPresenteSelect = document.getElementById('form_mamo_retraction_presente');
    if (retractionPresenteSelect) {
        retractionPresenteSelect.addEventListener('change', function() {
            toggleRetractionFields(this.value === 'oui');
        });
    }

    // Gestion des champs d'aspect cutané
    const aspectCutaneFields = {
        lateralite: document.getElementById('form_mamo_aspect_cutane_lateralite'),
        type: document.getElementById('form_mamo_aspect_cutane_type')
    };

    // Fonction pour gérer l'affichage des champs d'aspect cutané
    function toggleAspectCutaneFields(show) {
        Object.values(aspectCutaneFields).forEach(field => {
            if (field) {
                field.closest('.form-group').classList.toggle('d-none', !show);
            }
        });
    }

    // Gestion de l'affichage des champs d'aspect cutané en fonction de la sélection
    const aspectCutanePresentSelect = document.getElementById('form_mamo_aspect_cutane_present');
    if (aspectCutanePresentSelect) {
        aspectCutanePresentSelect.addEventListener('change', function() {
            toggleAspectCutaneFields(this.value === 'oui');
        });
    }

    // Gestion des champs d'adénopathie
    const adenopathieFields = {
        lateralite: document.getElementById('form_mamo_adenopathie_lateralite'),
        taille: document.getElementById('form_mamo_adenopathie_taille'),
        mobilite: document.getElementById('form_mamo_adenopathie_mobilite'),
        douleur: document.getElementById('form_mamo_adenopathie_douleur')
    };

    // Fonction pour gérer l'affichage des champs d'adénopathie
    function toggleAdenopathieFields(show) {
        Object.values(adenopathieFields).forEach(field => {
            if (field) {
                field.closest('.form-group').classList.toggle('d-none', !show);
            }
        });
    }

    // Gestion de l'affichage des champs d'adénopathie en fonction de la sélection
    const adenopathiePresenteSelect = document.getElementById('form_mamo_adenopathie_presente');
    if (adenopathiePresenteSelect) {
        adenopathiePresenteSelect.addEventListener('change', function() {
            toggleAdenopathieFields(this.value === 'oui');
        });
    }
});
