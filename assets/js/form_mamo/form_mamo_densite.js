document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la section Densité
    const densiteBtn = document.getElementById('densiteBtn');
    const densiteOptions = document.getElementById('densiteOptions');
    const optionBtns = document.querySelectorAll('.option-btn');
    const resetBtn = document.getElementById('resetBtn');

    // Gestion du bouton Densité
    if (densiteBtn && densiteOptions) {
        densiteBtn.addEventListener('click', function() {
            densiteOptions.classList.toggle('d-none');
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

    // Configuration des asymétries de densité pour les deux seins
    const asymetrieConfig = {
        // Sélecteurs pour le sein gauche
        gauche: {
            asymetrieSelect: document.querySelector('#form_mamo_densite_gauche_asymetrie_densite_gauche'),
            typeSelect: document.querySelector('#form_mamo_densite_gauche_asymetrie_densite_type_gauche'),
            detailsContainer: document.getElementById('asymetrieDensiteGaucheDetails'),
            focaleContainer: document.getElementById('asymetrieFocaleGaucheDetails'),
            globaleContainer: document.getElementById('asymetrieGlobaleGaucheDetails'),
            simpleContainer: document.getElementById('asymetrieSimpleGaucheDetails'),
            simpleValeurSelect: document.querySelector('#form_mamo_densite_gauche_asymetrie_simple_valeur_gauche'),
            simpleValeurAutreContainer: document.getElementById('asymetrieSimpleValeurAutreGauche')
        },
        // Sélecteurs pour le sein droit
        droit: {
            asymetrieSelect: document.querySelector('#form_mamo_densite_droite_asymetrie_densite_droite'),
            typeSelect: document.querySelector('#form_mamo_densite_droite_asymetrie_densite_type_droite'),
            detailsContainer: document.getElementById('asymetrieDensiteDroiteDetails'),
            focaleContainer: document.getElementById('asymetrieFocaleDroiteDetails'),
            globaleContainer: document.getElementById('asymetrieGlobaleDroiteDetails'),
            simpleContainer: document.getElementById('asymetrieSimpleDroiteDetails'),
            simpleValeurSelect: document.querySelector('#form_mamo_densite_droite_asymetrie_simple_valeur_droite'),
            simpleValeurAutreContainer: document.getElementById('asymetrieSimpleValeurAutreDroite')
        }
    };

    // Fonction pour gérer l'affichage des détails d'asymétrie
    function handleAsymetrieChange(cote) {
        const config = asymetrieConfig[cote];
        if (!config.asymetrieSelect || !config.detailsContainer) return;

        if (config.asymetrieSelect.value === 'oui') {
            config.detailsContainer.classList.remove('d-none');
            // Vérifier le type d'asymétrie déjà sélectionné
            handleTypeAsymetrieChange(cote);
        } else {
            config.detailsContainer.classList.add('d-none');
            // Masquer tous les conteneurs de type d'asymétrie
            if (config.focaleContainer) config.focaleContainer.classList.add('d-none');
            if (config.globaleContainer) config.globaleContainer.classList.add('d-none');
            if (config.simpleContainer) config.simpleContainer.classList.add('d-none');
            // Masquer le champ texte libre pour "Autre"
            if (config.simpleValeurAutreContainer) config.simpleValeurAutreContainer.classList.add('d-none');
        }
    }

    // Fonction pour gérer l'affichage des détails selon le type d'asymétrie
    function handleTypeAsymetrieChange(cote) {
        const config = asymetrieConfig[cote];
        if (!config.typeSelect) return;

        // Masquer tous les conteneurs de type d'asymétrie
        if (config.focaleContainer) config.focaleContainer.classList.add('d-none');
        if (config.globaleContainer) config.globaleContainer.classList.add('d-none');
        if (config.simpleContainer) config.simpleContainer.classList.add('d-none');
        // Masquer le champ texte libre pour "Autre"
        if (config.simpleValeurAutreContainer) config.simpleValeurAutreContainer.classList.add('d-none');

        // Afficher le conteneur correspondant au type sélectionné
        switch(config.typeSelect.value) {
            case 'focale':
                if (config.focaleContainer) config.focaleContainer.classList.remove('d-none');
                break;
            case 'globale':
                if (config.globaleContainer) config.globaleContainer.classList.remove('d-none');
                break;
            case 'simple':
                if (config.simpleContainer) config.simpleContainer.classList.remove('d-none');
                // Vérifier la valeur sélectionnée pour le champ "Asymétrie simple valeur"
                handleSimpleValeurChange(cote);
                break;
        }
    }

    // Fonction pour gérer l'affichage du champ texte libre pour "Autre"
    function handleSimpleValeurChange(cote) {
        const config = asymetrieConfig[cote];
        if (!config.simpleValeurSelect || !config.simpleValeurAutreContainer) return;

        if (config.simpleValeurSelect.value === 'autre') {
            config.simpleValeurAutreContainer.classList.remove('d-none');
        } else {
            config.simpleValeurAutreContainer.classList.add('d-none');
        }
    }

    // Initialiser les écouteurs d'événements pour le sein gauche
    if (asymetrieConfig.gauche.asymetrieSelect) {
        asymetrieConfig.gauche.asymetrieSelect.addEventListener('change', function() {
            handleAsymetrieChange('gauche');
        });
    }

    if (asymetrieConfig.gauche.typeSelect) {
        asymetrieConfig.gauche.typeSelect.addEventListener('change', function() {
            handleTypeAsymetrieChange('gauche');
        });
    }

    if (asymetrieConfig.gauche.simpleValeurSelect) {
        asymetrieConfig.gauche.simpleValeurSelect.addEventListener('change', function() {
            handleSimpleValeurChange('gauche');
        });
    }

    // Initialiser les écouteurs d'événements pour le sein droit
    if (asymetrieConfig.droit.asymetrieSelect) {
        asymetrieConfig.droit.asymetrieSelect.addEventListener('change', function() {
            handleAsymetrieChange('droit');
        });
    }

    if (asymetrieConfig.droit.typeSelect) {
        asymetrieConfig.droit.typeSelect.addEventListener('change', function() {
            handleTypeAsymetrieChange('droit');
        });
    }

    if (asymetrieConfig.droit.simpleValeurSelect) {
        asymetrieConfig.droit.simpleValeurSelect.addEventListener('change', function() {
            handleSimpleValeurChange('droit');
        });
    }

    // Vérifier l'état initial des sélecteurs
    handleAsymetrieChange('gauche');
    handleAsymetrieChange('droit');

    // Gestion des champs de densité
    const densiteSeinsSelect = document.getElementById('form_mamo_densite_seins');
    const densiteGaucheSelect = document.getElementById('form_mamo_densite_gauche');
    const densiteDroiteSelect = document.getElementById('form_mamo_densite_droite');
    const asymetrieDensiteGaucheSelect = document.getElementById('form_mamo_asymetrie_densite_gauche');
    const asymetrieDensiteDroiteSelect = document.getElementById('form_mamo_asymetrie_densite_droite');

    // Fonction pour mettre à jour les classes CSS en fonction de la densité
    function updateDensiteClass(select) {
        if (select) {
            // Réinitialiser les classes
            select.className = 'form-select';
            
            // Ajouter les classes en fonction de la valeur
            switch(select.value) {
                case 'a':
                    select.classList.add('bg-success', 'text-white');
                    break;
                case 'b':
                    select.classList.add('bg-info', 'text-white');
                    break;
                case 'c':
                    select.classList.add('bg-warning');
                    break;
                case 'd':
                    select.classList.add('bg-danger', 'text-white');
                    break;
                default:
                    // Pas de classe supplémentaire pour la valeur par défaut
                    break;
            }
        }
    }

    // Ajouter les écouteurs d'événements pour les champs de densité
    [densiteSeinsSelect, densiteGaucheSelect, densiteDroiteSelect].forEach(select => {
        if (select) {
            select.addEventListener('change', function() {
                updateDensiteClass(this);
            });
        }
    });

    // Fonction pour mettre à jour les classes CSS en fonction de l'asymétrie
    function updateAsymetrieClass(select) {
        if (select) {
            // Réinitialiser les classes
            select.className = 'form-select';
            
            // Ajouter les classes en fonction de la valeur
            switch(select.value) {
                case 'minime':
                    select.classList.add('bg-success', 'text-white');
                    break;
                case 'moderee':
                    select.classList.add('bg-warning');
                    break;
                case 'marquee':
                    select.classList.add('bg-danger', 'text-white');
                    break;
                default:
                    // Pas de classe supplémentaire pour la valeur par défaut
                    break;
            }
        }
    }

    // Ajouter les écouteurs d'événements pour les champs d'asymétrie
    [asymetrieDensiteGaucheSelect, asymetrieDensiteDroiteSelect].forEach(select => {
        if (select) {
            select.addEventListener('change', function() {
                updateAsymetrieClass(this);
            });
        }
    });

    // Gestion de l'affichage des champs d'asymétrie
    const asymetrieDensiteSelect = document.getElementById('form_mamo_asymetrie_densite');
    const asymetrieDensiteDetails = document.getElementById('asymetrieDensiteDetails');

    if (asymetrieDensiteSelect && asymetrieDensiteDetails) {
        asymetrieDensiteSelect.addEventListener('change', function() {
            asymetrieDensiteDetails.classList.toggle('d-none', this.value !== 'oui');
        });
    }

    // Gestion de la distorsion architecturale - Sein gauche
    const distorsionGaucheSelect = document.querySelector('#form_mamo_densite_gauche_distorsion_architecturale_gauche');
    const distorsionIntramammaireGaucheDetails = document.querySelector('#distorsionIntramammaireGaucheDetails');
    const distorsionBordsGaucheDetails = document.querySelector('#distorsionBordsGaucheDetails');

    if (distorsionGaucheSelect) {
        // Vérifier l'état initial
        const initialValueGauche = distorsionGaucheSelect.value;
        if (initialValueGauche === 'intramammaire') {
            distorsionIntramammaireGaucheDetails.classList.remove('d-none');
        } else if (initialValueGauche === 'bords_mammaires') {
            distorsionBordsGaucheDetails.classList.remove('d-none');
        }

        distorsionGaucheSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Distorsion gauche selected:', selectedValue); // Debug
            
            // Cacher tous les détails
            if (distorsionIntramammaireGaucheDetails) distorsionIntramammaireGaucheDetails.classList.add('d-none');
            if (distorsionBordsGaucheDetails) distorsionBordsGaucheDetails.classList.add('d-none');
            
            // Afficher les détails en fonction de la sélection
            if (selectedValue === 'intramammaire') {
                if (distorsionIntramammaireGaucheDetails) distorsionIntramammaireGaucheDetails.classList.remove('d-none');
            } else if (selectedValue === 'bords_mammaires') {
                if (distorsionBordsGaucheDetails) distorsionBordsGaucheDetails.classList.remove('d-none');
            }
        });
    }

    // Gestion de la distorsion architecturale - Sein droit
    const distorsionDroiteSelect = document.querySelector('#form_mamo_densite_droite_distorsion_architecturale_droite');
    const distorsionIntramammaireDroiteDetails = document.querySelector('#distorsionIntramammaireDroiteDetails');
    const distorsionBordsDroiteDetails = document.querySelector('#distorsionBordsDroiteDetails');

    if (distorsionDroiteSelect) {
        // Vérifier l'état initial
        const initialValueDroite = distorsionDroiteSelect.value;
        if (initialValueDroite === 'intramammaire') {
            distorsionIntramammaireDroiteDetails.classList.remove('d-none');
        } else if (initialValueDroite === 'bords_mammaires') {
            distorsionBordsDroiteDetails.classList.remove('d-none');
        }

        distorsionDroiteSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Distorsion droite selected:', selectedValue); // Debug
            
            // Cacher tous les détails
            if (distorsionIntramammaireDroiteDetails) distorsionIntramammaireDroiteDetails.classList.add('d-none');
            if (distorsionBordsDroiteDetails) distorsionBordsDroiteDetails.classList.add('d-none');
            
            // Afficher les détails en fonction de la sélection
            if (selectedValue === 'intramammaire') {
                if (distorsionIntramammaireDroiteDetails) distorsionIntramammaireDroiteDetails.classList.remove('d-none');
            } else if (selectedValue === 'bords_mammaires') {
                if (distorsionBordsDroiteDetails) distorsionBordsDroiteDetails.classList.remove('d-none');
            }
        });
    }

    // Gestion des sous-options pour Intramammaire - Sein gauche
    const topographieGaucheSelect = document.querySelector('#form_mamo_densite_gauche_distorsion_intramammaire_topographie_gauche');
    const quadrantGaucheDetails = document.querySelector('#distorsionIntramammaireQuadrantGaucheDetails');
    const unionGaucheDetails = document.querySelector('#distorsionIntraUnionGaucheDetails');

    if (topographieGaucheSelect) {
        // Vérifier l'état initial
        const initialValueTopoGauche = topographieGaucheSelect.value;
        if (initialValueTopoGauche === 'quadrant') {
            quadrantGaucheDetails.classList.remove('d-none');
        } else if (initialValueTopoGauche === 'union' || initialValueTopoGauche === 'projection') {
            unionGaucheDetails.classList.remove('d-none');
        }

        topographieGaucheSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Topographie gauche selected:', selectedValue); // Debug
            
            // Cacher tous les détails
            if (quadrantGaucheDetails) quadrantGaucheDetails.classList.add('d-none');
            if (unionGaucheDetails) unionGaucheDetails.classList.add('d-none');
            
            // Afficher les détails en fonction de la sélection
            if (selectedValue === 'quadrant') {
                if (quadrantGaucheDetails) quadrantGaucheDetails.classList.remove('d-none');
            } else if (selectedValue === 'union' || selectedValue === 'projection') {
                if (unionGaucheDetails) unionGaucheDetails.classList.remove('d-none');
            }
        });
    }

    // Gestion des sous-options pour Intramammaire - Sein droit
    const topographieDroiteSelect = document.querySelector('#form_mamo_densite_droite_distorsion_intramammaire_topographie_droite');
    const quadrantDroiteDetails = document.querySelector('#distorsionIntramammaireQuadrantDroiteDetails');
    const unionDroiteDetails = document.querySelector('#distorsionIntraUnionDroiteDetails');

    if (topographieDroiteSelect) {
        // Vérifier l'état initial
        const initialValueTopoDroite = topographieDroiteSelect.value;
        if (initialValueTopoDroite === 'quadrant') {
            quadrantDroiteDetails.classList.remove('d-none');
        } else if (initialValueTopoDroite === 'union' || initialValueTopoDroite === 'projection') {
            unionDroiteDetails.classList.remove('d-none');
        }

        topographieDroiteSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Topographie droite selected:', selectedValue); // Debug
            
            // Cacher tous les détails
            if (quadrantDroiteDetails) quadrantDroiteDetails.classList.add('d-none');
            if (unionDroiteDetails) unionDroiteDetails.classList.add('d-none');
            
            // Afficher les détails en fonction de la sélection
            if (selectedValue === 'quadrant') {
                if (quadrantDroiteDetails) quadrantDroiteDetails.classList.remove('d-none');
            } else if (selectedValue === 'union' || selectedValue === 'projection') {
                if (unionDroiteDetails) unionDroiteDetails.classList.remove('d-none');
            }
        });
    }

    // Configuration des masses pour les deux seins
    const masseConfig = {
        gauche: {
            masseSelect: document.querySelector('#form_mamo_densite_gauche_masse_gauche'),
            container: document.querySelector('#massesGaucheContainer'),
            template: document.querySelector('#masseTemplateGauche'),
            addButton: document.querySelector('#ajouterMasseGauche'),
            counter: 0
        },
        droit: {
            masseSelect: document.querySelector('#form_mamo_densite_droite_masse_droite'),
            container: document.querySelector('#massesDroiteContainer'),
            template: document.querySelector('#masseTemplateDroite'),
            addButton: document.querySelector('#ajouterMasseDroite'),
            counter: 0
        }
    };

    // Fonction pour gérer l'affichage du bouton d'ajout de masse
    function handleMasseChange(cote) {
        const config = masseConfig[cote];
        if (!config.masseSelect || !config.addButton) return;

        if (config.masseSelect.value === 'oui') {
            config.addButton.classList.remove('d-none');
            // Ajouter une première masse si aucune n'existe
            if (config.counter === 0) {
                ajouterMasse(cote);
            }
        } else {
            config.addButton.classList.add('d-none');
            // Supprimer toutes les masses existantes
            const masses = config.container.querySelectorAll('.masse-item:not(#masseTemplate' + cote.charAt(0).toUpperCase() + cote.slice(1) + ')');
            masses.forEach(masse => masse.remove());
            config.counter = 0;
        }
    }

    // Fonction pour ajouter une nouvelle masse
    function ajouterMasse(cote) {
        const config = masseConfig[cote];
        if (!config.template || !config.container) return;

        config.counter++;
        const newMasse = config.template.cloneNode(true);
        const masseId = `masse-${cote}-${config.counter}`;
        
        newMasse.id = masseId;
        newMasse.classList.remove('d-none');
        
        // Mettre à jour le numéro de la masse
        const numeroMasse = newMasse.querySelector('.numero-masse');
        if (numeroMasse) {
            numeroMasse.textContent = `Masse ${config.counter}`;
        }

        // Mettre à jour les IDs des champs
        newMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${config.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${config.counter}`;
            }
        });

        // Ajouter les écouteurs d'événements pour la topographie
        const topographieSelect = newMasse.querySelector('.masse-topographie');
        if (topographieSelect) {
            topographieSelect.addEventListener('change', function() {
                handleTopographieChange(newMasse, this.value);
            });
        }

        // Ajouter l'écouteur d'événements pour la densité
        const densiteSelect = newMasse.querySelector('.masse-densite');
        if (densiteSelect) {
            densiteSelect.addEventListener('change', function() {
                handleDensiteChange(this);
            });
        }

        // Ajouter l'écouteur d'événements pour le bouton de suppression
        const deleteButton = newMasse.querySelector('.delete-masse');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMasse.remove();
                // Mettre à jour les numéros des masses restantes
                updateMasseNumbers(cote);
            });
        }

        config.container.appendChild(newMasse);
    }

    // Fonction pour mettre à jour les numéros des masses
    function updateMasseNumbers(cote) {
        const config = masseConfig[cote];
        const masses = config.container.querySelectorAll('.masse-item:not(#masseTemplate' + cote.charAt(0).toUpperCase() + cote.slice(1) + ')');
        let counter = 1;
        masses.forEach(masse => {
            const numeroMasse = masse.querySelector('.numero-masse');
            if (numeroMasse) {
                numeroMasse.textContent = `Masse ${counter}`;
            }
            counter++;
        });
        config.counter = counter - 1;
    }

    // Fonction pour gérer l'affichage des champs en fonction de la topographie
    function handleTopographieChange(masseElement, value) {
        const quadrantDetails = masseElement.querySelector('.quadrant-details');
        const unionDetails = masseElement.querySelector('.union-details');

        if (quadrantDetails) quadrantDetails.classList.add('d-none');
        if (unionDetails) unionDetails.classList.add('d-none');

        switch(value) {
            case 'quadrant':
                if (quadrantDetails) quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
            case 'projection':
                if (unionDetails) unionDetails.classList.remove('d-none');
                break;
        }
    }

    // Fonction pour gérer l'affichage du texte spécifique en fonction de la densité
    function handleDensiteChange(select) {
        const value = select.value;
        const masseItem = select.closest('.masse-item');
        let message = '';

        switch(value) {
            case 'ganglion':
                message = 'densité graisseuse centrale typique de ganglion intraparenchymateux.';
                break;
            case 'hamartome':
                message = 'densité hétérogène circonscrite, suggérant un hamartome mammaire.';
                break;
        }

        // Mettre à jour ou créer le message
        let messageElement = masseItem.querySelector('.densite-message');
        if (message) {
            if (!messageElement) {
                messageElement = document.createElement('div');
                messageElement.className = 'densite-message mt-2 text-muted';
                select.parentNode.appendChild(messageElement);
            }
            messageElement.textContent = message;
        } else if (messageElement) {
            messageElement.remove();
        }
    }

    // Initialiser les écouteurs d'événements pour les masses
    ['gauche', 'droit'].forEach(cote => {
        const config = masseConfig[cote];
        
        if (config.masseSelect) {
            config.masseSelect.addEventListener('change', function() {
                handleMasseChange(cote);
            });
        }

        if (config.addButton) {
            config.addButton.addEventListener('click', function() {
                ajouterMasse(cote);
            });
        }

        // Vérifier l'état initial
        if (config.masseSelect) {
            handleMasseChange(cote);
        }
    });

    // Configuration des microcalcifications pour les deux seins
    const microcalcificationsConfig = {
        gauche: {
            microcalcificationsSelect: document.querySelector('#form_mamo_densite_gauche_microcalcifications_suspectes_gauche'),
            container: document.querySelector('#microcalcificationsGaucheContainer'),
            template: document.querySelector('#microcalcificationsTemplateGauche'),
            addButton: document.querySelector('#ajouterMicrocalcificationsGauche'),
            counter: 0
        },
        droit: {
            microcalcificationsSelect: document.querySelector('#form_mamo_densite_droite_microcalcifications_suspectes_droite'),
            container: document.querySelector('#microcalcificationsDroiteContainer'),
            template: document.querySelector('#microcalcificationsTemplateDroite'),
            addButton: document.querySelector('#ajouterMicrocalcificationsDroite'),
            counter: 0
        }
    };

    // Fonction pour gérer l'affichage du bouton d'ajout de microcalcifications
    function handleMicrocalcificationsChange(cote) {
        const config = microcalcificationsConfig[cote];
        if (!config.microcalcificationsSelect || !config.addButton) return;

        if (config.microcalcificationsSelect.value === 'oui') {
            config.addButton.classList.remove('d-none');
            if (config.counter === 0) {
                ajouterMicrocalcifications(cote);
            }
        } else {
            config.addButton.classList.add('d-none');
            const microcalcifications = config.container.querySelectorAll('.microcalcifications-item:not(#microcalcificationsTemplate' + cote.charAt(0).toUpperCase() + cote.slice(1) + ')');
            microcalcifications.forEach(micro => micro.remove());
            config.counter = 0;
        }
    }

    // Fonction pour ajouter de nouvelles microcalcifications
    function ajouterMicrocalcifications(cote) {
        const config = microcalcificationsConfig[cote];
        if (!config.template || !config.container) return;

        config.counter++;
        const newMicro = config.template.cloneNode(true);
        const microId = `microcalcifications-${cote}-${config.counter}`;
        
        newMicro.id = microId;
        newMicro.classList.remove('d-none');
        
        const numeroMicro = newMicro.querySelector('.numero-microcalcifications');
        if (numeroMicro) {
            numeroMicro.textContent = `Microcalcifications ${config.counter}`;
        }

        newMicro.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${config.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${config.counter}`;
            }
        });

        const deleteButton = newMicro.querySelector('.delete-microcalcifications');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMicro.remove();
                updateMicrocalcificationsNumbers(cote);
            });
        }

        config.container.appendChild(newMicro);
    }

    // Fonction pour mettre à jour les numéros des microcalcifications
    function updateMicrocalcificationsNumbers(cote) {
        const config = microcalcificationsConfig[cote];
        const microcalcifications = config.container.querySelectorAll('.microcalcifications-item:not(#microcalcificationsTemplate' + cote.charAt(0).toUpperCase() + cote.slice(1) + ')');
        let counter = 1;
        microcalcifications.forEach(micro => {
            const numeroMicro = micro.querySelector('.numero-microcalcifications');
            if (numeroMicro) {
                numeroMicro.textContent = `Microcalcifications ${counter}`;
            }
            counter++;
        });
        config.counter = counter - 1;
    }

    // Initialiser les écouteurs d'événements pour les microcalcifications
    ['gauche', 'droit'].forEach(cote => {
        const config = microcalcificationsConfig[cote];
        
        if (config.microcalcificationsSelect) {
            config.microcalcificationsSelect.addEventListener('change', function() {
                handleMicrocalcificationsChange(cote);
            });
        }

        if (config.addButton) {
            config.addButton.addEventListener('click', function() {
                ajouterMicrocalcifications(cote);
            });
        }

        if (config.microcalcificationsSelect) {
            handleMicrocalcificationsChange(cote);
        }
    });

    // Gestion des calcifications non suspectes - Sein gauche
    const calcificationsNonSuspectesGaucheSelect = document.querySelector('#form_densite_gauche_calcifications_non_suspectes_gauche');
    const calcificationsNonSuspectesOptionsGauche = document.querySelector('#calcificationsNonSuspectesOptionsGauche');
    const calcificationsTypeGaucheSelect = document.querySelector('#form_densite_gauche_calcifications_type_gauche');

    if (calcificationsNonSuspectesGaucheSelect && calcificationsNonSuspectesOptionsGauche) {
        const handleCalcificationsNonSuspectesGaucheChange = () => {
            if (calcificationsNonSuspectesGaucheSelect.value === 'oui') {
                calcificationsNonSuspectesOptionsGauche.classList.remove('d-none');
                // Réinitialiser la sélection du type de calcification
                if (calcificationsTypeGaucheSelect) {
                    calcificationsTypeGaucheSelect.value = '';
                }
            } else {
                calcificationsNonSuspectesOptionsGauche.classList.add('d-none');
            }
        };

        calcificationsNonSuspectesGaucheSelect.addEventListener('change', handleCalcificationsNonSuspectesGaucheChange);
        // Initialiser l'état au chargement
        handleCalcificationsNonSuspectesGaucheChange();
    }

    // Gestion des calcifications non suspectes - Sein droit
    const calcificationsNonSuspectesDroiteSelect = document.querySelector('#form_densite_droite_calcifications_non_suspectes_droite');
    const calcificationsNonSuspectesOptionsDroite = document.querySelector('#calcificationsNonSuspectesOptionsDroite');
    const calcificationsTypeDroiteSelect = document.querySelector('#form_densite_droite_calcifications_type_droite');

    if (calcificationsNonSuspectesDroiteSelect && calcificationsNonSuspectesOptionsDroite) {
        const handleCalcificationsNonSuspectesDroiteChange = () => {
            if (calcificationsNonSuspectesDroiteSelect.value === 'oui') {
                calcificationsNonSuspectesOptionsDroite.classList.remove('d-none');
                // Réinitialiser la sélection du type de calcification
                if (calcificationsTypeDroiteSelect) {
                    calcificationsTypeDroiteSelect.value = '';
                }
            } else {
                calcificationsNonSuspectesOptionsDroite.classList.add('d-none');
            }
        };

        calcificationsNonSuspectesDroiteSelect.addEventListener('change', handleCalcificationsNonSuspectesDroiteChange);
        // Initialiser l'état au chargement
        handleCalcificationsNonSuspectesDroiteChange();
    }

    // Fonction pour logger les éléments trouvés/non trouvés
    function logElementStatus(elementId, element) {
        console.log(`Élément ${elementId} ${element ? 'trouvé' : 'non trouvé'}`);
    }

    // Gestion de la désorganisation architecturale - Sein gauche
    const desorganisationGaucheSelect = document.querySelector('#form_densite_gauche_desorganisation_architecturale_gauche');
    const desorganisationOptionsGauche = document.querySelector('#desorganisationOptionsGauche');
    const desorganisationTopographieGaucheSelect = document.querySelector('#form_densite_gauche_desorganisation_topographie_gauche');
    const desorganisationQuadrantGaucheDetails = document.querySelector('#desorganisationQuadrantGaucheDetails');
    const desorganisationUnionGaucheDetails = document.querySelector('#desorganisationUnionGaucheDetails');

    if (desorganisationGaucheSelect && desorganisationOptionsGauche) {
        console.log('Initialisation désorganisation gauche');
        const handleDesorganisationGaucheChange = () => {
            console.log('Changement désorganisation gauche:', desorganisationGaucheSelect.value);
            if (desorganisationGaucheSelect.value === 'chirurgie') {
                desorganisationOptionsGauche.classList.remove('d-none');
                if (desorganisationTopographieGaucheSelect) {
                    handleDesorganisationTopographieGaucheChange();
                }
            } else {
                desorganisationOptionsGauche.classList.add('d-none');
                if (desorganisationQuadrantGaucheDetails) desorganisationQuadrantGaucheDetails.classList.add('d-none');
                if (desorganisationUnionGaucheDetails) desorganisationUnionGaucheDetails.classList.add('d-none');
            }
        };

        const handleDesorganisationTopographieGaucheChange = () => {
            console.log('Changement topographie gauche:', desorganisationTopographieGaucheSelect.value);
            if (desorganisationQuadrantGaucheDetails) desorganisationQuadrantGaucheDetails.classList.add('d-none');
            if (desorganisationUnionGaucheDetails) desorganisationUnionGaucheDetails.classList.add('d-none');

            switch(desorganisationTopographieGaucheSelect.value) {
                case 'quadrant':
                    if (desorganisationQuadrantGaucheDetails) desorganisationQuadrantGaucheDetails.classList.remove('d-none');
                    break;
                case 'union':
                case 'projection':
                    if (desorganisationUnionGaucheDetails) desorganisationUnionGaucheDetails.classList.remove('d-none');
                    break;
            }
        };

        desorganisationGaucheSelect.addEventListener('change', handleDesorganisationGaucheChange);
        if (desorganisationTopographieGaucheSelect) {
            desorganisationTopographieGaucheSelect.addEventListener('change', handleDesorganisationTopographieGaucheChange);
        }
        handleDesorganisationGaucheChange();
    }

    // Gestion de la désorganisation architecturale - Sein droit
    const desorganisationDroiteSelect = document.querySelector('#form_densite_droite_desorganisation_architecturale_droite');
    const desorganisationOptionsDroite = document.querySelector('#desorganisationOptionsDroite');
    const desorganisationTopographieDroiteSelect = document.querySelector('#form_densite_droite_desorganisation_topographie_droite');
    const desorganisationQuadrantDroiteDetails = document.querySelector('#desorganisationQuadrantDroiteDetails');
    const desorganisationUnionDroiteDetails = document.querySelector('#desorganisationUnionDroiteDetails');

    if (desorganisationDroiteSelect && desorganisationOptionsDroite) {
        console.log('Initialisation désorganisation droite');
        const handleDesorganisationDroiteChange = () => {
            console.log('Changement désorganisation droite:', desorganisationDroiteSelect.value);
            if (desorganisationDroiteSelect.value === 'chirurgie') {
                desorganisationOptionsDroite.classList.remove('d-none');
                if (desorganisationTopographieDroiteSelect) {
                    handleDesorganisationTopographieDroiteChange();
                }
            } else {
                desorganisationOptionsDroite.classList.add('d-none');
                if (desorganisationQuadrantDroiteDetails) desorganisationQuadrantDroiteDetails.classList.add('d-none');
                if (desorganisationUnionDroiteDetails) desorganisationUnionDroiteDetails.classList.add('d-none');
            }
        };

        const handleDesorganisationTopographieDroiteChange = () => {
            console.log('Changement topographie droite:', desorganisationTopographieDroiteSelect.value);
            if (desorganisationQuadrantDroiteDetails) desorganisationQuadrantDroiteDetails.classList.add('d-none');
            if (desorganisationUnionDroiteDetails) desorganisationUnionDroiteDetails.classList.add('d-none');

            switch(desorganisationTopographieDroiteSelect.value) {
                case 'quadrant':
                    if (desorganisationQuadrantDroiteDetails) desorganisationQuadrantDroiteDetails.classList.remove('d-none');
                    break;
                case 'union':
                case 'projection':
                    if (desorganisationUnionDroiteDetails) desorganisationUnionDroiteDetails.classList.remove('d-none');
                    break;
            }
        };

        desorganisationDroiteSelect.addEventListener('change', handleDesorganisationDroiteChange);
        if (desorganisationTopographieDroiteSelect) {
            desorganisationTopographieDroiteSelect.addEventListener('change', handleDesorganisationTopographieDroiteChange);
        }
        handleDesorganisationDroiteChange();
    }

    // Configuration des prolongements axillaires pour les deux seins
    const prolongementAxillaireConfig = {
        // Sélecteurs pour le sein gauche
        gauche: {
            prolongementSelect: document.querySelector('#form_mamo_densite_gauche_prolongement_axillaire_gauche'),
            typeSelect: document.querySelector('#form_mamo_densite_gauche_prolongement_axillaire_type_gauche'),
            typeContainer: document.getElementById('prolongementAxillaireTypeGauche')
        },
        // Sélecteurs pour le sein droit
        droit: {
            prolongementSelect: document.querySelector('#form_mamo_densite_droite_prolongement_axillaire_droite'),
            typeSelect: document.querySelector('#form_mamo_densite_droite_prolongement_axillaire_type_droite'),
            typeContainer: document.getElementById('prolongementAxillaireTypeDroite')
        }
    };

    // Fonction pour gérer l'affichage des types de prolongement axillaire
    function handleProlongementAxillaireChange(cote) {
        const config = prolongementAxillaireConfig[cote];
        console.log('Config pour ' + cote + ':', config); // Debug

        if (!config.prolongementSelect) {
            console.log('ProlongementSelect non trouvé pour ' + cote);
            return;
        }
        if (!config.typeContainer) {
            console.log('TypeContainer non trouvé pour ' + cote);
            return;
        }
        if (!config.typeSelect) {
            console.log('TypeSelect non trouvé pour ' + cote);
            return;
        }

        if (config.prolongementSelect.value === 'oui') {
            config.typeContainer.classList.remove('d-none');
            console.log('Affichage du container pour ' + cote); // Debug
        } else {
            config.typeContainer.classList.add('d-none');
            if (config.typeSelect) {
                config.typeSelect.value = '';
            }
            console.log('Masquage du container pour ' + cote); // Debug
        }
    }

    // Initialiser les écouteurs d'événements pour le sein gauche
    if (prolongementAxillaireConfig.gauche.prolongementSelect) {
        console.log('Initialisation écouteur gauche'); // Debug
        prolongementAxillaireConfig.gauche.prolongementSelect.addEventListener('change', function() {
            console.log('Changement détecté pour le sein gauche'); // Debug
            handleProlongementAxillaireChange('gauche');
        });
        // Initialiser l'état au chargement
        handleProlongementAxillaireChange('gauche');
    } else {
        console.log('Sélecteur prolongement gauche non trouvé'); // Debug
    }

    // Initialiser les écouteurs d'événements pour le sein droit
    if (prolongementAxillaireConfig.droit.prolongementSelect) {
        console.log('Initialisation écouteur droit'); // Debug
        prolongementAxillaireConfig.droit.prolongementSelect.addEventListener('change', function() {
            console.log('Changement détecté pour le sein droit'); // Debug
            handleProlongementAxillaireChange('droit');
        });
        // Initialiser l'état au chargement
        handleProlongementAxillaireChange('droit');
    } else {
        console.log('Sélecteur prolongement droit non trouvé'); // Debug
    }

    // Configuration des téguments cutanés pour les deux seins
    const tegumentsConfig = {
        // Sélecteurs pour le sein gauche
        gauche: {
            tegumentsSelect: document.querySelector('#form_mamo_densite_gauche_teguments_cutanes_gauche'),
            epaissiTypeContainer: document.getElementById('tegumentsEpaissiTypeGauche'),
            epaissiTypeSelect: document.querySelector('#form_mamo_densite_gauche_teguments_epaissi_type_gauche'),
            epaissiRTContainer: document.getElementById('tegumentsEpaissiRTGauche'),
            epaissiRTSelect: document.querySelector('#form_mamo_densite_gauche_teguments_epaissi_rt_gauche'),
            epaissiTopoContainer: document.getElementById('tegumentsEpaissiTopoGauche'),
            epaissiTopoSelect: document.querySelector('#form_mamo_densite_gauche_teguments_epaissi_topographie_gauche'),
            commentaireContainer: document.getElementById('tegumentsCommentaireGauche')
        },
        // Sélecteurs pour le sein droit
        droit: {
            tegumentsSelect: document.querySelector('#form_mamo_densite_droite_teguments_cutanes_droite'),
            epaissiTypeContainer: document.getElementById('tegumentsEpaissiTypeDroite'),
            epaissiTypeSelect: document.querySelector('#form_mamo_densite_droite_teguments_epaissi_type_droite'),
            epaissiRTContainer: document.getElementById('tegumentsEpaissiRTDroite'),
            epaissiRTSelect: document.querySelector('#form_mamo_densite_droite_teguments_epaissi_rt_droite'),
            epaissiTopoContainer: document.getElementById('tegumentsEpaissiTopoDroite'),
            epaissiTopoSelect: document.querySelector('#form_mamo_densite_droite_teguments_epaissi_topographie_droite'),
            commentaireContainer: document.getElementById('tegumentsCommentaireDroite')
        }
    };

    // Fonction pour gérer l'affichage des options des téguments cutanés
    function handleTegumentsChange(cote) {
        const config = tegumentsConfig[cote];
        if (!config.tegumentsSelect) {
            console.log('TegumentsSelect non trouvé pour ' + cote);
            return;
        }

        // Masquer tous les conteneurs par défaut
        if (config.epaissiTypeContainer) config.epaissiTypeContainer.classList.add('d-none');
        if (config.epaissiRTContainer) config.epaissiRTContainer.classList.add('d-none');
        if (config.epaissiTopoContainer) config.epaissiTopoContainer.classList.add('d-none');
        if (config.commentaireContainer) config.commentaireContainer.classList.add('d-none');

        // Afficher les conteneurs appropriés selon la sélection
        switch(config.tegumentsSelect.value) {
            case 'epaissi':
                if (config.epaissiTypeContainer) {
                    config.epaissiTypeContainer.classList.remove('d-none');
                    handleEpaissiTypeChange(cote);
                }
                if (config.commentaireContainer) config.commentaireContainer.classList.remove('d-none');
                break;
            case 'retraction':
            case 'cutane':
                if (config.commentaireContainer) config.commentaireContainer.classList.remove('d-none');
                break;
        }
    }

    // Fonction pour gérer l'affichage des options selon le type d'épaississement
    function handleEpaissiTypeChange(cote) {
        const config = tegumentsConfig[cote];
        if (!config.epaissiTypeSelect) return;

        if (config.epaissiRTContainer) config.epaissiRTContainer.classList.add('d-none');
        if (config.epaissiTopoContainer) config.epaissiTopoContainer.classList.add('d-none');

        switch(config.epaissiTypeSelect.value) {
            case 'diffus':
                if (config.epaissiRTContainer) config.epaissiRTContainer.classList.remove('d-none');
                break;
            case 'focal':
                if (config.epaissiTopoContainer) config.epaissiTopoContainer.classList.remove('d-none');
                break;
        }
    }

    // Initialiser les écouteurs d'événements pour le sein gauche
    if (tegumentsConfig.gauche.tegumentsSelect) {
        tegumentsConfig.gauche.tegumentsSelect.addEventListener('change', function() {
            handleTegumentsChange('gauche');
        });
        // Initialiser l'état au chargement
        handleTegumentsChange('gauche');
    }

    if (tegumentsConfig.gauche.epaissiTypeSelect) {
        tegumentsConfig.gauche.epaissiTypeSelect.addEventListener('change', function() {
            handleEpaissiTypeChange('gauche');
        });
    }

    // Initialiser les écouteurs d'événements pour le sein droit
    if (tegumentsConfig.droit.tegumentsSelect) {
        tegumentsConfig.droit.tegumentsSelect.addEventListener('change', function() {
            handleTegumentsChange('droit');
        });
        // Initialiser l'état au chargement
        handleTegumentsChange('droit');
    }

    if (tegumentsConfig.droit.epaissiTypeSelect) {
        tegumentsConfig.droit.epaissiTypeSelect.addEventListener('change', function() {
            handleEpaissiTypeChange('droit');
        });
    }

}); // Fin du DOMContentLoaded
