document.addEventListener('DOMContentLoaded', function() {
    // Configuration des asymétries pour le sein gauche
    const asymetrieGaucheConfig = {
        asymetrieSelect: document.querySelector('#form_mamo_densite_gauche_asymetrie_densite_gauche'),
        typeSelect: document.querySelector('#form_mamo_densite_gauche_asymetrie_densite_type_gauche'),
        detailsContainer: document.getElementById('asymetrieDensiteGaucheDetails'),
        focaleContainer: document.getElementById('asymetrieFocaleGaucheDetails'),
        globaleContainer: document.getElementById('asymetrieGlobaleGaucheDetails'),
        simpleContainer: document.getElementById('asymetrieSimpleGaucheDetails'),
        simpleValeurSelect: document.querySelector('#form_mamo_densite_gauche_asymetrie_simple_valeur_gauche'),
        simpleValeurAutreContainer: document.getElementById('asymetrieSimpleValeurAutreGauche')
    };

    // Configuration des masses pour le sein gauche
    const masseGaucheConfig = {
        masseSelect: document.querySelector('#form_mamo_densite_gauche_masse_gauche'),
        container: document.querySelector('#massesGaucheContainer'),
        template: document.querySelector('#masseTemplateGauche'),
        addButton: document.querySelector('#ajouterMasseGauche'),
        counter: 0
    };

    // Configuration des microcalcifications pour le sein gauche
    const microcalcificationsGaucheConfig = {
        microcalcificationsSelect: document.querySelector('#form_mamo_densite_gauche_microcalcifications_suspectes_gauche'),
        container: document.querySelector('#microcalcificationsGaucheContainer'),
        template: document.querySelector('#microcalcificationsTemplateGauche'),
        addButton: document.querySelector('#ajouterMicrocalcificationsGauche'),
        counter: 0
    };

    // Configuration des téguments cutanés pour le sein gauche
    const tegumentsGaucheConfig = {
        tegumentsSelect: document.querySelector('#form_mamo_densite_gauche_teguments_cutanes_gauche'),
        epaissiTypeContainer: document.getElementById('tegumentsEpaissiTypeGauche'),
        epaissiTypeSelect: document.querySelector('#form_mamo_densite_gauche_teguments_epaissi_type_gauche'),
        epaissiRTContainer: document.getElementById('tegumentsEpaissiRTGauche'),
        epaissiRTSelect: document.querySelector('#form_mamo_densite_gauche_teguments_epaissi_rt_gauche'),
        epaissiTopoContainer: document.getElementById('tegumentsEpaissiTopoGauche'),
        epaissiTopoSelect: document.querySelector('#form_mamo_densite_gauche_teguments_epaissi_topographie_gauche'),
        commentaireContainer: document.getElementById('tegumentsCommentaireGauche')
    };

    // Configuration de la distorsion architecturale pour le sein gauche
    const distorsionGaucheConfig = {
        distorsionSelect: document.querySelector('#form_mamo_densite_gauche_distorsion_architecturale_gauche'),
        intramammaireDetails: document.querySelector('#distorsionIntramammaireGaucheDetails'),
        bordsDetails: document.querySelector('#distorsionBordsGaucheDetails'),
        topographieSelect: document.querySelector('#form_mamo_densite_gauche_distorsion_intramammaire_topographie_gauche'),
        quadrantDetails: document.querySelector('#distorsionIntramammaireQuadrantGaucheDetails'),
        unionDetails: document.querySelector('#distorsionIntraUnionGaucheDetails')
    };

    // Configuration des calcifications non suspectes pour le sein gauche
    const calcificationsNonSuspectesGaucheConfig = {
        calcificationsSelect: document.querySelector('#form_densite_gauche_calcifications_non_suspectes_gauche'),
        optionsContainer: document.querySelector('#calcificationsNonSuspectesOptionsGauche'),
        typeSelect: document.querySelector('#form_densite_gauche_calcifications_type_gauche')
    };

    // Configuration de la désorganisation architecturale pour le sein gauche
    const desorganisationGaucheConfig = {
        desorganisationSelect: document.querySelector('#form_densite_gauche_desorganisation_architecturale_gauche'),
        optionsContainer: document.querySelector('#desorganisationOptionsGauche'),
        topographieSelect: document.querySelector('#form_densite_gauche_desorganisation_topographie_gauche'),
        quadrantDetails: document.querySelector('#desorganisationQuadrantGaucheDetails'),
        unionDetails: document.querySelector('#desorganisationUnionGaucheDetails')
    };

    // Configuration du prolongement axillaire pour le sein gauche
    const prolongementAxillaireGaucheConfig = {
        prolongementSelect: document.querySelector('#form_mamo_densite_gauche_prolongement_axillaire_gauche'),
        typeContainer: document.getElementById('prolongementAxillaireTypeGauche'),
        typeSelect: document.querySelector('#form_mamo_densite_gauche_prolongement_axillaire_type_gauche')
    };

    // Configuration du creux axillaire pour le sein gauche
    const creuxAxillaireGaucheConfig = {
        creuxAxillaireSelect: document.querySelector('#form_mamo_densite_gauche_creux_axillaire_gauche'),
        detailsContainer: document.querySelector('#creuxAxillaireDetailsGauche'),
        admSimpleDetails: document.querySelector('#admSimpleDetailsGauche'),
        admTypeSelect: document.querySelector('#form_mamo_densite_gauche_creux_axillaire_adm_type_gauche'),
        cortexDetails: document.querySelector('#cortexEpaissiDetailsGauche'),
        petitAxeDetails: document.querySelector('#petitAxeDetailsGauche'),
        admsDetails: document.querySelector('#admsDetailsGauche')
    };

    // Fonctions pour le sein gauche
    function handleAsymetrieGauche() {
        if (!asymetrieGaucheConfig.asymetrieSelect || !asymetrieGaucheConfig.detailsContainer) return;

        if (asymetrieGaucheConfig.asymetrieSelect.value === 'oui') {
            asymetrieGaucheConfig.detailsContainer.classList.remove('d-none');
            handleTypeAsymetrieGauche();
        } else {
            asymetrieGaucheConfig.detailsContainer.classList.add('d-none');
            if (asymetrieGaucheConfig.focaleContainer) asymetrieGaucheConfig.focaleContainer.classList.add('d-none');
            if (asymetrieGaucheConfig.globaleContainer) asymetrieGaucheConfig.globaleContainer.classList.add('d-none');
            if (asymetrieGaucheConfig.simpleContainer) asymetrieGaucheConfig.simpleContainer.classList.add('d-none');
            if (asymetrieGaucheConfig.simpleValeurAutreContainer) asymetrieGaucheConfig.simpleValeurAutreContainer.classList.add('d-none');
        }
    }

    function handleTypeAsymetrieGauche() {
        if (!asymetrieGaucheConfig.typeSelect) return;

        if (asymetrieGaucheConfig.focaleContainer) asymetrieGaucheConfig.focaleContainer.classList.add('d-none');
        if (asymetrieGaucheConfig.globaleContainer) asymetrieGaucheConfig.globaleContainer.classList.add('d-none');
        if (asymetrieGaucheConfig.simpleContainer) asymetrieGaucheConfig.simpleContainer.classList.add('d-none');
        if (asymetrieGaucheConfig.simpleValeurAutreContainer) asymetrieGaucheConfig.simpleValeurAutreContainer.classList.add('d-none');

        switch(asymetrieGaucheConfig.typeSelect.value) {
            case 'focale':
                if (asymetrieGaucheConfig.focaleContainer) asymetrieGaucheConfig.focaleContainer.classList.remove('d-none');
                break;
            case 'globale':
                if (asymetrieGaucheConfig.globaleContainer) asymetrieGaucheConfig.globaleContainer.classList.remove('d-none');
                break;
            case 'simple':
                if (asymetrieGaucheConfig.simpleContainer) asymetrieGaucheConfig.simpleContainer.classList.remove('d-none');
                handleSimpleValeurGauche();
                break;
        }
    }

    function handleSimpleValeurGauche() {
        if (!asymetrieGaucheConfig.simpleValeurSelect || !asymetrieGaucheConfig.simpleValeurAutreContainer) return;

        if (asymetrieGaucheConfig.simpleValeurSelect.value === 'autre') {
            asymetrieGaucheConfig.simpleValeurAutreContainer.classList.remove('d-none');
        } else {
            asymetrieGaucheConfig.simpleValeurAutreContainer.classList.add('d-none');
        }
    }

    // Gestion des masses
    function handleMasseGauche() {
        if (!masseGaucheConfig.masseSelect || !masseGaucheConfig.addButton) return;

        if (masseGaucheConfig.masseSelect.value === 'oui') {
            masseGaucheConfig.addButton.classList.remove('d-none');
            if (masseGaucheConfig.counter === 0) {
                ajouterMasseGauche();
            }
        } else {
            masseGaucheConfig.addButton.classList.add('d-none');
            const masses = masseGaucheConfig.container.querySelectorAll('.masse-item:not(#masseTemplateGauche)');
            masses.forEach(masse => masse.remove());
            masseGaucheConfig.counter = 0;
        }
    }

    function ajouterMasseGauche() {
        if (!masseGaucheConfig.template || !masseGaucheConfig.container) return;

        masseGaucheConfig.counter++;
        const newMasse = masseGaucheConfig.template.cloneNode(true);
        const masseId = `masse-gauche-${masseGaucheConfig.counter}`;
        
        newMasse.id = masseId;
        newMasse.classList.remove('d-none');
        
        const numeroMasse = newMasse.querySelector('.numero-masse');
        if (numeroMasse) {
            numeroMasse.textContent = `Masse ${masseGaucheConfig.counter}`;
        }

        // Mise à jour des IDs et noms
        newMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${masseGaucheConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${masseGaucheConfig.counter}`;
            }
        });

        // Gestion de la topographie
        const topographieSelect = newMasse.querySelector('.masse-topographie');
        if (topographieSelect) {
            topographieSelect.addEventListener('change', function() {
                handleMasseTopographieGauche(newMasse, this.value);
            });
        }

        // Gestion de la densité
        const densiteSelect = newMasse.querySelector('.masse-densite');
        if (densiteSelect) {
            densiteSelect.addEventListener('change', function() {
                handleMasseDensiteGauche(this);
            });
        }

        // Bouton de suppression
        const deleteButton = newMasse.querySelector('.delete-masse');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMasse.remove();
                updateMasseNumbersGauche();
            });
        }

        masseGaucheConfig.container.appendChild(newMasse);
    }

    function handleMasseTopographieGauche(masseElement, value) {
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

    function handleMasseDensiteGauche(select) {
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

    function updateMasseNumbersGauche() {
        const masses = masseGaucheConfig.container.querySelectorAll('.masse-item:not(#masseTemplateGauche)');
        let counter = 1;
        masses.forEach(masse => {
            const numeroMasse = masse.querySelector('.numero-masse');
            if (numeroMasse) {
                numeroMasse.textContent = `Masse ${counter}`;
            }
            counter++;
        });
        masseGaucheConfig.counter = counter - 1;
    }

    // Gestion des microcalcifications
    function handleMicrocalcificationsGauche() {
        if (!microcalcificationsGaucheConfig.microcalcificationsSelect || !microcalcificationsGaucheConfig.addButton) return;

        if (microcalcificationsGaucheConfig.microcalcificationsSelect.value === 'oui') {
            microcalcificationsGaucheConfig.addButton.classList.remove('d-none');
            if (microcalcificationsGaucheConfig.counter === 0) {
                ajouterMicrocalcificationsGauche();
            }
        } else {
            microcalcificationsGaucheConfig.addButton.classList.add('d-none');
            const microcalcifications = microcalcificationsGaucheConfig.container.querySelectorAll('.microcalcifications-item:not(#microcalcificationsTemplateGauche)');
            microcalcifications.forEach(micro => micro.remove());
            microcalcificationsGaucheConfig.counter = 0;
        }
    }

    function ajouterMicrocalcificationsGauche() {
        if (!microcalcificationsGaucheConfig.template || !microcalcificationsGaucheConfig.container) return;

        microcalcificationsGaucheConfig.counter++;
        const newMicro = microcalcificationsGaucheConfig.template.cloneNode(true);
        const microId = `microcalcifications-gauche-${microcalcificationsGaucheConfig.counter}`;
        
        newMicro.id = microId;
        newMicro.classList.remove('d-none');
        
        const numeroMicro = newMicro.querySelector('.numero-microcalcifications');
        if (numeroMicro) {
            numeroMicro.textContent = `Microcalcifications ${microcalcificationsGaucheConfig.counter}`;
        }

        newMicro.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${microcalcificationsGaucheConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${microcalcificationsGaucheConfig.counter}`;
            }
        });

        const deleteButton = newMicro.querySelector('.delete-microcalcifications');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMicro.remove();
                updateMicrocalcificationsNumbersGauche();
            });
        }

        microcalcificationsGaucheConfig.container.appendChild(newMicro);
    }

    function updateMicrocalcificationsNumbersGauche() {
        const microcalcifications = microcalcificationsGaucheConfig.container.querySelectorAll('.microcalcifications-item:not(#microcalcificationsTemplateGauche)');
        let counter = 1;
        microcalcifications.forEach(micro => {
            const numeroMicro = micro.querySelector('.numero-microcalcifications');
            if (numeroMicro) {
                numeroMicro.textContent = `Microcalcifications ${counter}`;
            }
            counter++;
        });
        microcalcificationsGaucheConfig.counter = counter - 1;
    }

    // Gestion des téguments cutanés
    function handleTegumentsGauche() {
        if (!tegumentsGaucheConfig.tegumentsSelect) return;

        // Masquer tous les conteneurs par défaut
        if (tegumentsGaucheConfig.epaissiTypeContainer) tegumentsGaucheConfig.epaissiTypeContainer.classList.add('d-none');
        if (tegumentsGaucheConfig.epaissiRTContainer) tegumentsGaucheConfig.epaissiRTContainer.classList.add('d-none');
        if (tegumentsGaucheConfig.epaissiTopoContainer) tegumentsGaucheConfig.epaissiTopoContainer.classList.add('d-none');
        if (tegumentsGaucheConfig.commentaireContainer) tegumentsGaucheConfig.commentaireContainer.classList.add('d-none');

        switch(tegumentsGaucheConfig.tegumentsSelect.value) {
            case 'epaissi':
                if (tegumentsGaucheConfig.epaissiTypeContainer) {
                    tegumentsGaucheConfig.epaissiTypeContainer.classList.remove('d-none');
                    handleTegumentsEpaissiTypeGauche();
                }
                if (tegumentsGaucheConfig.commentaireContainer) tegumentsGaucheConfig.commentaireContainer.classList.remove('d-none');
                break;
            case 'retraction':
            case 'cutane':
                if (tegumentsGaucheConfig.commentaireContainer) tegumentsGaucheConfig.commentaireContainer.classList.remove('d-none');
                break;
        }
    }

    function handleTegumentsEpaissiTypeGauche() {
        if (!tegumentsGaucheConfig.epaissiTypeSelect) return;

        if (tegumentsGaucheConfig.epaissiRTContainer) tegumentsGaucheConfig.epaissiRTContainer.classList.add('d-none');
        if (tegumentsGaucheConfig.epaissiTopoContainer) tegumentsGaucheConfig.epaissiTopoContainer.classList.add('d-none');

        switch(tegumentsGaucheConfig.epaissiTypeSelect.value) {
            case 'diffus':
                if (tegumentsGaucheConfig.epaissiRTContainer) tegumentsGaucheConfig.epaissiRTContainer.classList.remove('d-none');
                break;
            case 'focal':
                if (tegumentsGaucheConfig.epaissiTopoContainer) tegumentsGaucheConfig.epaissiTopoContainer.classList.remove('d-none');
                break;
        }
    }

    // Gestion de la distorsion architecturale
    function handleDistorsionGauche() {
        if (!distorsionGaucheConfig.distorsionSelect) return;

        // Masquer tous les conteneurs
        if (distorsionGaucheConfig.intramammaireDetails) distorsionGaucheConfig.intramammaireDetails.classList.add('d-none');
        if (distorsionGaucheConfig.bordsDetails) distorsionGaucheConfig.bordsDetails.classList.add('d-none');

        switch(distorsionGaucheConfig.distorsionSelect.value) {
            case 'intramammaire':
                if (distorsionGaucheConfig.intramammaireDetails) {
                    distorsionGaucheConfig.intramammaireDetails.classList.remove('d-none');
                    handleDistorsionTopographieGauche();
                }
                break;
            case 'bords_mammaires':
                if (distorsionGaucheConfig.bordsDetails) distorsionGaucheConfig.bordsDetails.classList.remove('d-none');
                break;
        }
    }

    function handleDistorsionTopographieGauche() {
        if (!distorsionGaucheConfig.topographieSelect) return;

        if (distorsionGaucheConfig.quadrantDetails) distorsionGaucheConfig.quadrantDetails.classList.add('d-none');
        if (distorsionGaucheConfig.unionDetails) distorsionGaucheConfig.unionDetails.classList.add('d-none');

        switch(distorsionGaucheConfig.topographieSelect.value) {
            case 'quadrant':
                if (distorsionGaucheConfig.quadrantDetails) distorsionGaucheConfig.quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
            case 'projection':
                if (distorsionGaucheConfig.unionDetails) distorsionGaucheConfig.unionDetails.classList.remove('d-none');
                break;
        }
    }

    // Gestion des calcifications non suspectes
    function handleCalcificationsNonSuspectesGauche() {
        if (!calcificationsNonSuspectesGaucheConfig.calcificationsSelect || !calcificationsNonSuspectesGaucheConfig.optionsContainer) return;

        if (calcificationsNonSuspectesGaucheConfig.calcificationsSelect.value === 'oui') {
            calcificationsNonSuspectesGaucheConfig.optionsContainer.classList.remove('d-none');
            // Réinitialiser la sélection du type de calcification
            if (calcificationsNonSuspectesGaucheConfig.typeSelect) {
                calcificationsNonSuspectesGaucheConfig.typeSelect.value = '';
            }
        } else {
            calcificationsNonSuspectesGaucheConfig.optionsContainer.classList.add('d-none');
        }
    }

    // Gestion de la désorganisation architecturale
    function handleDesorganisationGauche() {
        if (!desorganisationGaucheConfig.desorganisationSelect || !desorganisationGaucheConfig.optionsContainer) return;

        if (desorganisationGaucheConfig.desorganisationSelect.value === 'chirurgie') {
            desorganisationGaucheConfig.optionsContainer.classList.remove('d-none');
            handleDesorganisationTopographieGauche();
        } else {
            desorganisationGaucheConfig.optionsContainer.classList.add('d-none');
            if (desorganisationGaucheConfig.quadrantDetails) desorganisationGaucheConfig.quadrantDetails.classList.add('d-none');
            if (desorganisationGaucheConfig.unionDetails) desorganisationGaucheConfig.unionDetails.classList.add('d-none');
        }
    }

    function handleDesorganisationTopographieGauche() {
        if (!desorganisationGaucheConfig.topographieSelect) return;

        if (desorganisationGaucheConfig.quadrantDetails) desorganisationGaucheConfig.quadrantDetails.classList.add('d-none');
        if (desorganisationGaucheConfig.unionDetails) desorganisationGaucheConfig.unionDetails.classList.add('d-none');

        switch(desorganisationGaucheConfig.topographieSelect.value) {
            case 'quadrant':
                if (desorganisationGaucheConfig.quadrantDetails) desorganisationGaucheConfig.quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
            case 'projection':
                if (desorganisationGaucheConfig.unionDetails) desorganisationGaucheConfig.unionDetails.classList.remove('d-none');
                break;
        }
    }

    // Gestion du prolongement axillaire
    function handleProlongementAxillaireGauche() {
        if (!prolongementAxillaireGaucheConfig.prolongementSelect || !prolongementAxillaireGaucheConfig.typeContainer) return;

        if (prolongementAxillaireGaucheConfig.prolongementSelect.value === 'oui') {
            prolongementAxillaireGaucheConfig.typeContainer.classList.remove('d-none');
        } else {
            prolongementAxillaireGaucheConfig.typeContainer.classList.add('d-none');
            if (prolongementAxillaireGaucheConfig.typeSelect) {
                prolongementAxillaireGaucheConfig.typeSelect.value = '';
            }
        }
    }

    // Gestion du creux axillaire
    function handleCreuxAxillaireGauche() {
        if (!creuxAxillaireGaucheConfig.creuxAxillaireSelect || !creuxAxillaireGaucheConfig.detailsContainer) return;

        const value = creuxAxillaireGaucheConfig.creuxAxillaireSelect.value;
        
        // Masquer tous les conteneurs par défaut
        creuxAxillaireGaucheConfig.detailsContainer.classList.add('d-none');
        creuxAxillaireGaucheConfig.admSimpleDetails.classList.add('d-none');
        creuxAxillaireGaucheConfig.admsDetails.classList.add('d-none');
        creuxAxillaireGaucheConfig.cortexDetails.classList.add('d-none');
        creuxAxillaireGaucheConfig.petitAxeDetails.classList.add('d-none');

        // Réinitialiser les champs si nécessaire
        if (value !== 'adm' && value !== 'adms') {
            resetCreuxAxillaireFields();
        }

        if (value === 'adm') {
            // Afficher les détails pour une ADM simple
            creuxAxillaireGaucheConfig.detailsContainer.classList.remove('d-none');
            creuxAxillaireGaucheConfig.admSimpleDetails.classList.remove('d-none');
            handleCreuxAxillaireTypeGauche();
        } else if (value === 'adms') {
            // Afficher les détails pour ADMs multiples
            creuxAxillaireGaucheConfig.detailsContainer.classList.remove('d-none');
            creuxAxillaireGaucheConfig.admsDetails.classList.remove('d-none');
        }
    }

    function handleCreuxAxillaireTypeGauche() {
        if (!creuxAxillaireGaucheConfig.admTypeSelect) return;

        const value = creuxAxillaireGaucheConfig.admTypeSelect.value;
        
        // Masquer tous les conteneurs de détails spécifiques
        creuxAxillaireGaucheConfig.cortexDetails.classList.add('d-none');
        creuxAxillaireGaucheConfig.petitAxeDetails.classList.add('d-none');

        // Afficher les détails appropriés selon le type
        switch(value) {
            case 'cortex_epaissi':
                creuxAxillaireGaucheConfig.cortexDetails.classList.remove('d-none');
                break;
            case 'petit_axe':
            case 'petit_axe_perte_hile':
                creuxAxillaireGaucheConfig.petitAxeDetails.classList.remove('d-none');
                break;
        }
    }

    // Fonction pour réinitialiser les champs
    function resetCreuxAxillaireFields() {
        const inputs = creuxAxillaireGaucheConfig.detailsContainer.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.value = '';
        });
    }

    // Initialisation des écouteurs d'événements
    if (asymetrieGaucheConfig.asymetrieSelect) {
        asymetrieGaucheConfig.asymetrieSelect.addEventListener('change', handleAsymetrieGauche);
    }

    if (asymetrieGaucheConfig.typeSelect) {
        asymetrieGaucheConfig.typeSelect.addEventListener('change', handleTypeAsymetrieGauche);
    }

    if (asymetrieGaucheConfig.simpleValeurSelect) {
        asymetrieGaucheConfig.simpleValeurSelect.addEventListener('change', handleSimpleValeurGauche);
    }

    if (masseGaucheConfig.masseSelect) {
        masseGaucheConfig.masseSelect.addEventListener('change', handleMasseGauche);
    }

    if (masseGaucheConfig.addButton) {
        masseGaucheConfig.addButton.addEventListener('click', ajouterMasseGauche);
    }

    if (microcalcificationsGaucheConfig.microcalcificationsSelect) {
        microcalcificationsGaucheConfig.microcalcificationsSelect.addEventListener('change', handleMicrocalcificationsGauche);
    }

    if (microcalcificationsGaucheConfig.addButton) {
        microcalcificationsGaucheConfig.addButton.addEventListener('click', ajouterMicrocalcificationsGauche);
    }

    if (tegumentsGaucheConfig.tegumentsSelect) {
        tegumentsGaucheConfig.tegumentsSelect.addEventListener('change', handleTegumentsGauche);
    }

    if (tegumentsGaucheConfig.epaissiTypeSelect) {
        tegumentsGaucheConfig.epaissiTypeSelect.addEventListener('change', handleTegumentsEpaissiTypeGauche);
    }

    if (distorsionGaucheConfig.distorsionSelect) {
        distorsionGaucheConfig.distorsionSelect.addEventListener('change', handleDistorsionGauche);
    }

    if (distorsionGaucheConfig.topographieSelect) {
        distorsionGaucheConfig.topographieSelect.addEventListener('change', handleDistorsionTopographieGauche);
    }

    if (calcificationsNonSuspectesGaucheConfig.calcificationsSelect) {
        calcificationsNonSuspectesGaucheConfig.calcificationsSelect.addEventListener('change', handleCalcificationsNonSuspectesGauche);
    }

    if (desorganisationGaucheConfig.desorganisationSelect) {
        desorganisationGaucheConfig.desorganisationSelect.addEventListener('change', handleDesorganisationGauche);
    }

    if (desorganisationGaucheConfig.topographieSelect) {
        desorganisationGaucheConfig.topographieSelect.addEventListener('change', handleDesorganisationTopographieGauche);
    }

    if (prolongementAxillaireGaucheConfig.prolongementSelect) {
        prolongementAxillaireGaucheConfig.prolongementSelect.addEventListener('change', handleProlongementAxillaireGauche);
    }

    if (creuxAxillaireGaucheConfig.creuxAxillaireSelect) {
        creuxAxillaireGaucheConfig.creuxAxillaireSelect.addEventListener('change', handleCreuxAxillaireGauche);
    }

    if (creuxAxillaireGaucheConfig.admTypeSelect) {
        creuxAxillaireGaucheConfig.admTypeSelect.addEventListener('change', handleCreuxAxillaireTypeGauche);
    }

    // Initialisation de l'état
    handleAsymetrieGauche();
    handleMasseGauche();
    handleMicrocalcificationsGauche();
    handleTegumentsGauche();
    handleDistorsionGauche();
    handleCalcificationsNonSuspectesGauche();
    handleDesorganisationGauche();
    handleProlongementAxillaireGauche();
    handleCreuxAxillaireGauche();

    // Export des configurations et fonctions
    window.densiteGauche = {
        config: {
            asymetrie: asymetrieGaucheConfig,
            masse: masseGaucheConfig,
            microcalcifications: microcalcificationsGaucheConfig,
            teguments: tegumentsGaucheConfig,
            distorsion: distorsionGaucheConfig,
            calcificationsNonSuspectes: calcificationsNonSuspectesGaucheConfig,
            desorganisation: desorganisationGaucheConfig,
            prolongementAxillaire: prolongementAxillaireGaucheConfig,
            creuxAxillaire: creuxAxillaireGaucheConfig
        },
        handlers: {
            handleAsymetrie: handleAsymetrieGauche,
            handleTypeAsymetrie: handleTypeAsymetrieGauche,
            handleSimpleValeur: handleSimpleValeurGauche,
            handleMasse: handleMasseGauche,
            handleMicrocalcifications: handleMicrocalcificationsGauche,
            handleTeguments: handleTegumentsGauche,
            handleDistorsion: handleDistorsionGauche,
            handleCalcificationsNonSuspectes: handleCalcificationsNonSuspectesGauche,
            handleDesorganisation: handleDesorganisationGauche,
            handleProlongementAxillaire: handleProlongementAxillaireGauche,
            handleCreuxAxillaire: handleCreuxAxillaireGauche
        }
    };
}); 