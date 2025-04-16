document.addEventListener('DOMContentLoaded', function() {

    // Configuration des masses échographiques pour le sein droit
    const masseEchoDroiteConfig = {
        masseEchoSelect: document.querySelector('#form_mamo_densite_echo_droite_masse_echo_droite'),
        container: document.querySelector('#masses-echo-droite-container'),
        template: document.querySelector('#masseEchoTemplateDroite'),
        addButton: document.querySelector('#ajouterMasseEchoDroite'),
        counter: 0
    };

    // Configuration des non-masses échographiques pour le sein droit
    const nonMasseEchoDroiteConfig = {
        nonMasseEchoSelect: document.querySelector('#form_mamo_densite_echo_droite_non_masse_echo_droite'),
        container: document.querySelector('#non-masses-echo-droite-container'),
        template: document.querySelector('#nonMasseEchoTemplateDroite'),
        addButton: document.querySelector('#ajouterNonMasseEchoDroite'),
        counter: 0
    };

    // Fonctions pour les masses échographiques
    function handleMasseEchoDroite() {
        if (!masseEchoDroiteConfig.masseEchoSelect || !masseEchoDroiteConfig.addButton) return;

        if (masseEchoDroiteConfig.masseEchoSelect.value === 'oui') {
            masseEchoDroiteConfig.addButton.classList.remove('d-none');
            if (masseEchoDroiteConfig.counter === 0) {
                ajouterMasseEchoDroite();
            }
        } else {
            masseEchoDroiteConfig.addButton.classList.add('d-none');
            const masses = masseEchoDroiteConfig.container.querySelectorAll('.masse-echo-item:not(#masseEchoTemplateDroite)');
            masses.forEach(masse => masse.remove());
            masseEchoDroiteConfig.counter = 0;
        }
    }

    function ajouterMasseEchoDroite() {
        if (!masseEchoDroiteConfig.template || !masseEchoDroiteConfig.container) return;

        masseEchoDroiteConfig.counter++;
        const newMasse = masseEchoDroiteConfig.template.cloneNode(true);
        const masseId = `masse-echo-droite-${masseEchoDroiteConfig.counter}`;
        
        newMasse.id = masseId;
        newMasse.classList.remove('d-none');

        // Mise à jour des IDs et noms
        newMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${masseEchoDroiteConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${masseEchoDroiteConfig.counter}`;
            }
        });

        // Gestion de la topographie
        const topographieSelect = newMasse.querySelector('.masse-echo-topographie');
        if (topographieSelect) {
            topographieSelect.addEventListener('change', function() {
                handleMasseEchoTopographieDroite(newMasse, this.value);
            });
        }

        // Gestion de la correspondance mammographie
        const correspondanceSelect = newMasse.querySelector('[id*="masse_echo_correspondance_mammo_droite"]');
        if (correspondanceSelect) {
            correspondanceSelect.addEventListener('change', function() {
                handleCorrespondanceMammoDroite(newMasse, this.value);
            });
        }

        // Gestion de l'antériorité
        const anterioriteSelect = newMasse.querySelector('[id*="masse_echo_anteriorite_suivi_droite"]');
        if (anterioriteSelect) {
            anterioriteSelect.addEventListener('change', function() {
                handleAnterioriteEchoDroite(newMasse, this.value);
            });
        }

        // Bouton de suppression
        const deleteButton = newMasse.querySelector('.delete-masse-echo');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMasse.remove();
                updateMasseEchoNumbersDroite();
            });
        }

        masseEchoDroiteConfig.container.appendChild(newMasse);
    }

    function handleMasseEchoTopographieDroite(masseElement, value) {
        const quadrantDetails = masseElement.querySelector('.quadrant-echo-details');
        const unionDetails = masseElement.querySelector('.union-echo-details');

        if (quadrantDetails) quadrantDetails.classList.add('d-none');
        if (unionDetails) unionDetails.classList.add('d-none');

        switch(value) {
            case 'quadrant':
                if (quadrantDetails) quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
                if (unionDetails) unionDetails.classList.remove('d-none');
                break;
        }
    }

    function handleCorrespondanceMammoDroite(masseElement, value) {
        const numeroMammoContainer = masseElement.querySelector('.numero-mammo-container');
        if (numeroMammoContainer) {
            if (value === 'correspond_mammo') {
                numeroMammoContainer.classList.remove('d-none');
            } else {
                numeroMammoContainer.classList.add('d-none');
            }
        }
    }

    function handleAnterioriteEchoDroite(masseElement, value) {
        const taillesContainers = masseElement.querySelectorAll('.tailles-evolution');
        taillesContainers.forEach(container => {
            if (value === 'diminue' || value === 'augmente') {
                container.classList.remove('d-none');
            } else {
                container.classList.add('d-none');
            }
        });
    }

    function updateMasseEchoNumbersDroite() {
        const masses = masseEchoDroiteConfig.container.querySelectorAll('.masse-echo-item:not(#masseEchoTemplateDroite)');
        masseEchoDroiteConfig.counter = masses.length;
    }

    // Fonctions pour les non-masses échographiques
    function handleNonMasseEchoDroite() {
        if (!nonMasseEchoDroiteConfig.nonMasseEchoSelect || !nonMasseEchoDroiteConfig.addButton) return;

        const value = nonMasseEchoDroiteConfig.nonMasseEchoSelect.value;
        
        // Réinitialiser le conteneur et le compteur
        const nonMasses = nonMasseEchoDroiteConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateDroite)');
        nonMasses.forEach(nonMasse => nonMasse.remove());
        nonMasseEchoDroiteConfig.counter = 0;

        // Afficher le bouton d'ajout uniquement pour les options qui nécessitent des détails
        const needsDetails = ['dilatation_avec_image', 'plage_hypoechogene', 'microcalcifications'].includes(value);
        
        if (needsDetails) {
            nonMasseEchoDroiteConfig.addButton.classList.remove('d-none');
            ajouterNonMasseEchoDroite();
        } else {
            nonMasseEchoDroiteConfig.addButton.classList.add('d-none');
        }
    }

    function ajouterNonMasseEchoDroite() {
        if (!nonMasseEchoDroiteConfig.template || !nonMasseEchoDroiteConfig.container) return;

        nonMasseEchoDroiteConfig.counter++;
        const newNonMasse = nonMasseEchoDroiteConfig.template.cloneNode(true);
        const nonMasseId = `non-masse-echo-droite-${nonMasseEchoDroiteConfig.counter}`;
        
        newNonMasse.id = nonMasseId;
        newNonMasse.classList.remove('d-none');

        // Mise à jour des IDs et noms
        newNonMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${nonMasseEchoDroiteConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${nonMasseEchoDroiteConfig.counter}`;
            }
        });

        // Affichage des champs selon le type de non-masse
        const value = nonMasseEchoDroiteConfig.nonMasseEchoSelect.value;

        // Masquer tous les conteneurs par défaut
        const topographieContainer = newNonMasse.querySelector('.topographie-container');
        const rayonDistance = newNonMasse.querySelector('.rayon-distance-container');
        const taillesContainer = newNonMasse.querySelector('.tailles-echo-details');
        const dilatationDetails = newNonMasse.querySelector('.dilatation-details');

        if (topographieContainer) topographieContainer.classList.add('d-none');
        if (rayonDistance) rayonDistance.classList.add('d-none');
        if (taillesContainer) taillesContainer.classList.add('d-none');
        if (dilatationDetails) dilatationDetails.classList.add('d-none');

        switch(value) {
            case 'dilatation_avec_image':
                if (rayonDistance) rayonDistance.classList.remove('d-none');
                if (taillesContainer) taillesContainer.classList.remove('d-none');
                if (dilatationDetails) dilatationDetails.classList.remove('d-none');
                break;
            case 'plage_hypoechogene':
                if (topographieContainer) topographieContainer.classList.remove('d-none');
                if (rayonDistance) rayonDistance.classList.remove('d-none');
                if (taillesContainer) taillesContainer.classList.remove('d-none');
                break;
            case 'microcalcifications':
                if (topographieContainer) topographieContainer.classList.remove('d-none');
                if (rayonDistance) rayonDistance.classList.remove('d-none');
                break;
        }

        // Gestion de la topographie
        const topographieSelect = newNonMasse.querySelector('.non-masse-echo-topographie');
        if (topographieSelect) {
            topographieSelect.addEventListener('change', function() {
                handleNonMasseEchoTopographieDroite(newNonMasse, this.value);
            });
        }

        // Bouton de suppression
        const deleteButton = newNonMasse.querySelector('.delete-non-masse-echo');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newNonMasse.remove();
                if (nonMasseEchoDroiteConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateDroite)').length === 0) {
                    nonMasseEchoDroiteConfig.counter = 0;
                }
            });
        }

        nonMasseEchoDroiteConfig.container.appendChild(newNonMasse);
    }

    function handleNonMasseEchoTopographieDroite(nonMasseElement, value) {
        const quadrantDetails = nonMasseElement.querySelector('.quadrant-non-masse-echo-details');
        const unionDetails = nonMasseElement.querySelector('.union-non-masse-echo-details');

        if (quadrantDetails) quadrantDetails.classList.add('d-none');
        if (unionDetails) unionDetails.classList.add('d-none');

        switch(value) {
            case 'quadrant':
                if (quadrantDetails) quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
                if (unionDetails) unionDetails.classList.remove('d-none');
                break;
        }
    }

    // Export des configurations et fonctions
    window.densiteDroite = {
        config: {        
            masseEcho: masseEchoDroiteConfig,
            nonMasseEcho: nonMasseEchoDroiteConfig
        },
        handlers: {
            handleMasseEcho: handleMasseEchoDroite,
            handleNonMasseEcho: handleNonMasseEchoDroite
        }
    }

    // Ajout des écouteurs d'événements
    if (masseEchoDroiteConfig.masseEchoSelect) {
        masseEchoDroiteConfig.masseEchoSelect.addEventListener('change', handleMasseEchoDroite);
    }

    if (masseEchoDroiteConfig.addButton) {
        masseEchoDroiteConfig.addButton.addEventListener('click', ajouterMasseEchoDroite);
    }

    if (nonMasseEchoDroiteConfig.nonMasseEchoSelect) {
        nonMasseEchoDroiteConfig.nonMasseEchoSelect.addEventListener('change', handleNonMasseEchoDroite);
    }

    if (nonMasseEchoDroiteConfig.addButton) {
        nonMasseEchoDroiteConfig.addButton.addEventListener('click', ajouterNonMasseEchoDroite);
    }

    // Initialisation
    handleMasseEchoDroite();
    handleNonMasseEchoDroite();
});
