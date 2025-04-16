document.addEventListener('DOMContentLoaded', function() {

      // Configuration des masses échographiques pour le sein gauche
      const masseEchoGaucheConfig = {
        masseEchoSelect: document.querySelector('#form_mamo_densite_echo_gauche_masse_echo_gauche'),
        container: document.querySelector('#masses-echo-gauche-container'),
        template: document.querySelector('#masseEchoTemplateGauche'),
        addButton: document.querySelector('#ajouterMasseEchoGauche'),
        counter: 0
    };

    // Configuration des non-masses échographiques pour le sein gauche
    const nonMasseEchoGaucheConfig = {
        nonMasseEchoSelect: document.querySelector('#form_mamo_densite_echo_gauche_non_masse_echo_gauche'),
        container: document.querySelector('#non-masses-echo-gauche-container'),
        template: document.querySelector('#nonMasseEchoTemplateGauche'),
        addButton: document.querySelector('#ajouterNonMasseEchoGauche'),
        counter: 0
    };

     // Fonctions pour les masses échographiques
     function handleMasseEchoGauche() {
        if (!masseEchoGaucheConfig.masseEchoSelect || !masseEchoGaucheConfig.addButton) return;

        if (masseEchoGaucheConfig.masseEchoSelect.value === 'oui') {
            masseEchoGaucheConfig.addButton.classList.remove('d-none');
            if (masseEchoGaucheConfig.counter === 0) {
                ajouterMasseEchoGauche();
            }
        } else {
            masseEchoGaucheConfig.addButton.classList.add('d-none');
            const masses = masseEchoGaucheConfig.container.querySelectorAll('.masse-echo-item:not(#masseEchoTemplateGauche)');
            masses.forEach(masse => masse.remove());
            masseEchoGaucheConfig.counter = 0;
        }
    }

    function ajouterMasseEchoGauche() {
        if (!masseEchoGaucheConfig.template || !masseEchoGaucheConfig.container) return;

        masseEchoGaucheConfig.counter++;
        const newMasse = masseEchoGaucheConfig.template.cloneNode(true);
        const masseId = `masse-echo-gauche-${masseEchoGaucheConfig.counter}`;
        
        newMasse.id = masseId;
        newMasse.classList.remove('d-none');

        // Mise à jour des IDs et noms
        newMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${masseEchoGaucheConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${masseEchoGaucheConfig.counter}`;
            }
        });

        // Gestion de la topographie
        const topographieSelect = newMasse.querySelector('.masse-echo-topographie');
        if (topographieSelect) {
            topographieSelect.addEventListener('change', function() {
                handleMasseEchoTopographieGauche(newMasse, this.value);
            });
        }

        // Gestion de la correspondance mammographie
        const correspondanceSelect = newMasse.querySelector('[id*="masse_echo_correspondance_mammo_gauche"]');
        if (correspondanceSelect) {
            correspondanceSelect.addEventListener('change', function() {
                handleCorrespondanceMammoGauche(newMasse, this.value);
            });
        }

        // Gestion de l'antériorité
        const anterioriteSelect = newMasse.querySelector('[id*="masse_echo_anteriorite_suivi_gauche"]');
        if (anterioriteSelect) {
            anterioriteSelect.addEventListener('change', function() {
                handleAnterioriteEchoGauche(newMasse, this.value);
            });
        }

        // Bouton de suppression
        const deleteButton = newMasse.querySelector('.delete-masse-echo');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMasse.remove();
                updateMasseEchoNumbersGauche();
            });
        }

        masseEchoGaucheConfig.container.appendChild(newMasse);
    }

    function handleMasseEchoTopographieGauche(masseElement, value) {
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

    function handleCorrespondanceMammoGauche(masseElement, value) {
        const numeroMammoContainer = masseElement.querySelector('.numero-mammo-container');
        if (numeroMammoContainer) {
            if (value === 'correspond_mammo') {
                numeroMammoContainer.classList.remove('d-none');
            } else {
                numeroMammoContainer.classList.add('d-none');
            }
        }
    }

    function handleAnterioriteEchoGauche(masseElement, value) {
        const taillesContainers = masseElement.querySelectorAll('.tailles-evolution');
        taillesContainers.forEach(container => {
            if (value === 'diminue' || value === 'augmente') {
                container.classList.remove('d-none');
            } else {
                container.classList.add('d-none');
            }
        });
    }

    function updateMasseEchoNumbersGauche() {
        const masses = masseEchoGaucheConfig.container.querySelectorAll('.masse-echo-item:not(#masseEchoTemplateGauche)');
        masseEchoGaucheConfig.counter = masses.length;
    }

    // Fonctions pour les non-masses échographiques
    function handleNonMasseEchoGauche() {
        if (!nonMasseEchoGaucheConfig.nonMasseEchoSelect || !nonMasseEchoGaucheConfig.addButton) return;

        const value = nonMasseEchoGaucheConfig.nonMasseEchoSelect.value;
        
        // Réinitialiser le conteneur et le compteur
        const nonMasses = nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)');
        nonMasses.forEach(nonMasse => nonMasse.remove());
        nonMasseEchoGaucheConfig.counter = 0;

        // Afficher le bouton d'ajout uniquement pour les options qui nécessitent des détails
        const needsDetails = ['dilatation_avec_image', 'plage_hypoechogene', 'microcalcifications'].includes(value);
        
        if (needsDetails) {
            nonMasseEchoGaucheConfig.addButton.classList.remove('d-none');
            ajouterNonMasseEchoGauche();
        } else {
            nonMasseEchoGaucheConfig.addButton.classList.add('d-none');
        }
    }

    function ajouterNonMasseEchoGauche() {
        if (!nonMasseEchoGaucheConfig.template || !nonMasseEchoGaucheConfig.container) return;

        nonMasseEchoGaucheConfig.counter++;
        const newNonMasse = nonMasseEchoGaucheConfig.template.cloneNode(true);
        const nonMasseId = `non-masse-echo-gauche-${nonMasseEchoGaucheConfig.counter}`;
        
        newNonMasse.id = nonMasseId;
        newNonMasse.classList.remove('d-none');

        // Mise à jour des IDs et noms
        newNonMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${nonMasseEchoGaucheConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${nonMasseEchoGaucheConfig.counter}`;
            }
        });

        // Affichage des champs selon le type de non-masse
        const value = nonMasseEchoGaucheConfig.nonMasseEchoSelect.value;

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
                handleNonMasseEchoTopographieGauche(newNonMasse, this.value);
            });
        }

        // Bouton de suppression
        const deleteButton = newNonMasse.querySelector('.delete-non-masse-echo');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newNonMasse.remove();
                if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                    nonMasseEchoGaucheConfig.counter = 0;
                }
            });
        }

        nonMasseEchoGaucheConfig.container.appendChild(newNonMasse);
    }

    function handleNonMasseEchoTopographieGauche(nonMasseElement, value) {
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
    window.densiteGauche = {
        config: {        
            masseEcho: masseEchoGaucheConfig,
            nonMasseEcho: nonMasseEchoGaucheConfig
        },
        handlers: {
            handleMasseEcho: handleMasseEchoGauche,
            handleNonMasseEcho: handleNonMasseEchoGauche
        }
    }

    // Ajout des écouteurs d'événements
    if (masseEchoGaucheConfig.masseEchoSelect) {
        masseEchoGaucheConfig.masseEchoSelect.addEventListener('change', handleMasseEchoGauche);
    }

    if (masseEchoGaucheConfig.addButton) {
        masseEchoGaucheConfig.addButton.addEventListener('click', ajouterMasseEchoGauche);
    }

    if (nonMasseEchoGaucheConfig.nonMasseEchoSelect) {
        nonMasseEchoGaucheConfig.nonMasseEchoSelect.addEventListener('change', handleNonMasseEchoGauche);
    }

    if (nonMasseEchoGaucheConfig.addButton) {
        nonMasseEchoGaucheConfig.addButton.addEventListener('click', ajouterNonMasseEchoGauche);
    }

   

    // Initialisation
    handleMasseEchoGauche();
    handleNonMasseEchoGauche();
});
