document.addEventListener('DOMContentLoaded', function() {
    // Configuration des asymétries pour le sein droit
    const asymetrieDroiteConfig = {
        asymetrieSelect: document.querySelector('#form_mamo_densite_droite_asymetrie_densite_droite'),
        typeSelect: document.querySelector('#form_mamo_densite_droite_asymetrie_densite_type_droite'),
        detailsContainer: document.getElementById('asymetrieDensiteDroiteDetails'),
        focaleContainer: document.getElementById('asymetrieFocaleDroiteDetails'),
        globaleContainer: document.getElementById('asymetrieGlobaleDroiteDetails'),
        simpleContainer: document.getElementById('asymetrieSimpleDroiteDetails'),
        simpleValeurSelect: document.querySelector('#form_mamo_densite_droite_asymetrie_simple_valeur_droite'),
        simpleValeurAutreContainer: document.getElementById('asymetrieSimpleValeurAutreDroite')
    };

    // Configuration des masses pour le sein droit
    const masseDroiteConfig = {
        masseSelect: document.querySelector('#form_mamo_densite_droite_masse_droite'),
        container: document.querySelector('#massesDroiteContainer'),
        template: document.querySelector('#masseTemplateDroite'),
        addButton: document.querySelector('#ajouterMasseDroite'),
        counter: 0
    };

    // Configuration des microcalcifications pour le sein droit
    const microcalcificationsDroiteConfig = {
        microcalcificationsSelect: document.querySelector('#form_mamo_densite_droite_microcalcifications_suspectes_droite'),
        container: document.querySelector('#microcalcificationsDroiteContainer'),
        template: document.querySelector('#microcalcificationsTemplateDroite'),
        addButton: document.querySelector('#ajouterMicrocalcificationsDroite'),
        counter: 0
    };

    // Configuration des téguments cutanés pour le sein droit
    const tegumentsDroiteConfig = {
        tegumentsSelect: document.querySelector('#form_mamo_densite_droite_teguments_cutanes_droite'),
        epaissiTypeContainer: document.getElementById('tegumentsEpaissiTypeDroite'),
        epaissiTypeSelect: document.querySelector('#form_mamo_densite_droite_teguments_epaissi_type_droite'),
        epaissiRTContainer: document.getElementById('tegumentsEpaissiRTDroite'),
        epaissiRTSelect: document.querySelector('#form_mamo_densite_droite_teguments_epaissi_rt_droite'),
        epaissiTopoContainer: document.getElementById('tegumentsEpaissiTopoDroite'),
        epaissiTopoSelect: document.querySelector('#form_mamo_densite_droite_teguments_epaissi_topographie_droite'),
        commentaireContainer: document.getElementById('tegumentsCommentaireDroite')
    };

    // Configuration de la distorsion architecturale pour le sein droit
    const distorsionDroiteConfig = {
        distorsionSelect: document.querySelector('#form_mamo_densite_droite_distorsion_architecturale_droite'),
        intramammaireDetails: document.querySelector('#distorsionIntramammaireDroiteDetails'),
        bordsDetails: document.querySelector('#distorsionBordsDroiteDetails'),
        topographieSelect: document.querySelector('#form_mamo_densite_droite_distorsion_intramammaire_topographie_droite'),
        quadrantDetails: document.querySelector('#distorsionIntramammaireQuadrantDroiteDetails'),
        unionDetails: document.querySelector('#distorsionIntraUnionDroiteDetails')
    };

    // Configuration des calcifications non suspectes pour le sein droit
    const calcificationsNonSuspectesDroiteConfig = {
        calcificationsSelect: document.querySelector('#form_densite_droite_calcifications_non_suspectes_droite'),
        optionsContainer: document.querySelector('#calcificationsNonSuspectesOptionsDroite'),
        typeSelect: document.querySelector('#form_densite_droite_calcifications_type_droite')
    };

    // Configuration de la désorganisation architecturale pour le sein droit
    const desorganisationDroiteConfig = {
        desorganisationSelect: document.querySelector('#form_densite_droite_desorganisation_architecturale_droite'),
        optionsContainer: document.querySelector('#desorganisationOptionsDroite'),
        topographieSelect: document.querySelector('#form_densite_droite_desorganisation_topographie_droite'),
        quadrantDetails: document.querySelector('#desorganisationQuadrantDroiteDetails'),
        unionDetails: document.querySelector('#desorganisationUnionDroiteDetails')
    };

    // Configuration du prolongement axillaire pour le sein droit
    const prolongementAxillaireDroiteConfig = {
        prolongementSelect: document.querySelector('#form_mamo_densite_droite_prolongement_axillaire_droite'),
        typeContainer: document.getElementById('prolongementAxillaireTypeDroite'),
        typeSelect: document.querySelector('#form_mamo_densite_droite_prolongement_axillaire_type_droite')
    };

        // Configuration du creux axillaire pour le sein droite
    const creuxAxillaireDroiteConfig = {
        creuxAxillaireSelect: document.querySelector('#form_mamo_densite_droite_creux_axillaire_droite'),
        detailsContainer: document.querySelector('#creuxAxillaireDetailsDroite'),
        admSimpleDetails: document.querySelector('#admSimpleDetailsDroite'),
        admTypeSelect: document.querySelector('#form_mamo_densite_droite_creux_axillaire_adm_type_droite'),
        cortexDetails: document.querySelector('#cortexEpaissiDetailsDroite'),
        petitAxeDetails: document.querySelector('#petitAxeDetailsDroite'),
        admsDetails: document.querySelector('#admsDetailsDroite')
    };

    // Fonctions pour le sein droit
    function handleAsymetrieDroite() {
        if (!asymetrieDroiteConfig.asymetrieSelect || !asymetrieDroiteConfig.detailsContainer) return;

        if (asymetrieDroiteConfig.asymetrieSelect.value === 'oui') {
            asymetrieDroiteConfig.detailsContainer.classList.remove('d-none');
            handleTypeAsymetrieDroite();
        } else {
            asymetrieDroiteConfig.detailsContainer.classList.add('d-none');
            if (asymetrieDroiteConfig.focaleContainer) asymetrieDroiteConfig.focaleContainer.classList.add('d-none');
            if (asymetrieDroiteConfig.globaleContainer) asymetrieDroiteConfig.globaleContainer.classList.add('d-none');
            if (asymetrieDroiteConfig.simpleContainer) asymetrieDroiteConfig.simpleContainer.classList.add('d-none');
            if (asymetrieDroiteConfig.simpleValeurAutreContainer) asymetrieDroiteConfig.simpleValeurAutreContainer.classList.add('d-none');
        }
    }

    function handleTypeAsymetrieDroite() {
        if (!asymetrieDroiteConfig.typeSelect) return;

        if (asymetrieDroiteConfig.focaleContainer) asymetrieDroiteConfig.focaleContainer.classList.add('d-none');
        if (asymetrieDroiteConfig.globaleContainer) asymetrieDroiteConfig.globaleContainer.classList.add('d-none');
        if (asymetrieDroiteConfig.simpleContainer) asymetrieDroiteConfig.simpleContainer.classList.add('d-none');
        if (asymetrieDroiteConfig.simpleValeurAutreContainer) asymetrieDroiteConfig.simpleValeurAutreContainer.classList.add('d-none');

        switch(asymetrieDroiteConfig.typeSelect.value) {
            case 'focale':
                if (asymetrieDroiteConfig.focaleContainer) asymetrieDroiteConfig.focaleContainer.classList.remove('d-none');
                break;
            case 'globale':
                if (asymetrieDroiteConfig.globaleContainer) asymetrieDroiteConfig.globaleContainer.classList.remove('d-none');
                break;
            case 'simple':
                if (asymetrieDroiteConfig.simpleContainer) asymetrieDroiteConfig.simpleContainer.classList.remove('d-none');
                handleSimpleValeurDroite();
                break;
        }
    }

    function handleSimpleValeurDroite() {
        if (!asymetrieDroiteConfig.simpleValeurSelect || !asymetrieDroiteConfig.simpleValeurAutreContainer) return;

        if (asymetrieDroiteConfig.simpleValeurSelect.value === 'autre') {
            asymetrieDroiteConfig.simpleValeurAutreContainer.classList.remove('d-none');
        } else {
            asymetrieDroiteConfig.simpleValeurAutreContainer.classList.add('d-none');
        }
    }

    // Gestion des masses
    function handleMasseDroite() {
        if (!masseDroiteConfig.masseSelect || !masseDroiteConfig.addButton) return;

        if (masseDroiteConfig.masseSelect.value === 'oui') {
            masseDroiteConfig.addButton.classList.remove('d-none');
            if (masseDroiteConfig.counter === 0) {
                ajouterMasseDroite();
            }
        } else {
            masseDroiteConfig.addButton.classList.add('d-none');
            const masses = masseDroiteConfig.container.querySelectorAll('.masse-item:not(#masseTemplateDroite)');
            masses.forEach(masse => masse.remove());
            masseDroiteConfig.counter = 0;
        }
    }

    function ajouterMasseDroite() {
        if (!masseDroiteConfig.template || !masseDroiteConfig.container) return;

        masseDroiteConfig.counter++;
        const newMasse = masseDroiteConfig.template.cloneNode(true);
        const masseId = `masse-droite-${masseDroiteConfig.counter}`;
        
        newMasse.id = masseId;
        newMasse.classList.remove('d-none');
        
        const numeroMasse = newMasse.querySelector('.numero-masse');
        if (numeroMasse) {
            numeroMasse.textContent = `Masse ${masseDroiteConfig.counter}`;
        }

        // Mise à jour des IDs et noms
        newMasse.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${masseDroiteConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${masseDroiteConfig.counter}`;
            }
        });

        // Gestion de la topographie
        const topographieSelect = newMasse.querySelector('.masse-topographie');
        if (topographieSelect) {
            topographieSelect.addEventListener('change', function() {
                handleMasseTopographieDroite(newMasse, this.value);
            });
        }

        // Gestion de la densité
        const densiteSelect = newMasse.querySelector('.masse-densite');
        if (densiteSelect) {
            densiteSelect.addEventListener('change', function() {
                handleMasseDensiteDroite(this);
            });
        }

        // Bouton de suppression
        const deleteButton = newMasse.querySelector('.delete-masse');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMasse.remove();
                updateMasseNumbersDroite();
            });
        }

        masseDroiteConfig.container.appendChild(newMasse);
    }

    function handleMasseTopographieDroite(masseElement, value) {
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

    function handleMasseDensiteDroite(select) {
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

    function updateMasseNumbersDroite() {
        const masses = masseDroiteConfig.container.querySelectorAll('.masse-item:not(#masseTemplateDroite)');
        let counter = 1;
        masses.forEach(masse => {
            const numeroMasse = masse.querySelector('.numero-masse');
            if (numeroMasse) {
                numeroMasse.textContent = `Masse ${counter}`;
            }
            counter++;
        });
        masseDroiteConfig.counter = counter - 1;
    }

    // Gestion des microcalcifications
    function handleMicrocalcificationsDroite() {
        if (!microcalcificationsDroiteConfig.microcalcificationsSelect || !microcalcificationsDroiteConfig.addButton) return;

        if (microcalcificationsDroiteConfig.microcalcificationsSelect.value === 'oui') {
            microcalcificationsDroiteConfig.addButton.classList.remove('d-none');
            if (microcalcificationsDroiteConfig.counter === 0) {
                ajouterMicrocalcificationsDroite();
            }
        } else {
            microcalcificationsDroiteConfig.addButton.classList.add('d-none');
            const microcalcifications = microcalcificationsDroiteConfig.container.querySelectorAll('.microcalcifications-item:not(#microcalcificationsTemplateDroite)');
            microcalcifications.forEach(micro => micro.remove());
            microcalcificationsDroiteConfig.counter = 0;
        }
    }

    function ajouterMicrocalcificationsDroite() {
        if (!microcalcificationsDroiteConfig.template || !microcalcificationsDroiteConfig.container) return;

        microcalcificationsDroiteConfig.counter++;
        const newMicro = microcalcificationsDroiteConfig.template.cloneNode(true);
        const microId = `microcalcifications-droite-${microcalcificationsDroiteConfig.counter}`;
        
        newMicro.id = microId;
        newMicro.classList.remove('d-none');
        
        const numeroMicro = newMicro.querySelector('.numero-microcalcifications');
        if (numeroMicro) {
            numeroMicro.textContent = `Microcalcifications ${microcalcificationsDroiteConfig.counter}`;
        }

        newMicro.querySelectorAll('select, input').forEach(field => {
            if (field.id) {
                field.id = `${field.id}-${microcalcificationsDroiteConfig.counter}`;
            }
            if (field.name) {
                field.name = `${field.name}-${microcalcificationsDroiteConfig.counter}`;
            }
        });

        const deleteButton = newMicro.querySelector('.delete-microcalcifications');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                newMicro.remove();
                updateMicrocalcificationsNumbersDroite();
            });
        }

        microcalcificationsDroiteConfig.container.appendChild(newMicro);
    }

    function updateMicrocalcificationsNumbersDroite() {
        const microcalcifications = microcalcificationsDroiteConfig.container.querySelectorAll('.microcalcifications-item:not(#microcalcificationsTemplateDroite)');
        let counter = 1;
        microcalcifications.forEach(micro => {
            const numeroMicro = micro.querySelector('.numero-microcalcifications');
            if (numeroMicro) {
                numeroMicro.textContent = `Microcalcifications ${counter}`;
            }
            counter++;
        });
        microcalcificationsDroiteConfig.counter = counter - 1;
    }

    // Gestion des téguments cutanés
    function handleTegumentsDroite() {
        if (!tegumentsDroiteConfig.tegumentsSelect) return;

        // Masquer tous les conteneurs par défaut
        if (tegumentsDroiteConfig.epaissiTypeContainer) tegumentsDroiteConfig.epaissiTypeContainer.classList.add('d-none');
        if (tegumentsDroiteConfig.epaissiRTContainer) tegumentsDroiteConfig.epaissiRTContainer.classList.add('d-none');
        if (tegumentsDroiteConfig.epaissiTopoContainer) tegumentsDroiteConfig.epaissiTopoContainer.classList.add('d-none');
        if (tegumentsDroiteConfig.commentaireContainer) tegumentsDroiteConfig.commentaireContainer.classList.add('d-none');

        switch(tegumentsDroiteConfig.tegumentsSelect.value) {
            case 'epaissi':
                if (tegumentsDroiteConfig.epaissiTypeContainer) {
                    tegumentsDroiteConfig.epaissiTypeContainer.classList.remove('d-none');
                    handleTegumentsEpaissiTypeDroite();
                }
                if (tegumentsDroiteConfig.commentaireContainer) tegumentsDroiteConfig.commentaireContainer.classList.remove('d-none');
                break;
            case 'retraction':
            case 'cutane':
                if (tegumentsDroiteConfig.commentaireContainer) tegumentsDroiteConfig.commentaireContainer.classList.remove('d-none');
                break;
        }
    }

    function handleTegumentsEpaissiTypeDroite() {
        if (!tegumentsDroiteConfig.epaissiTypeSelect) return;

        if (tegumentsDroiteConfig.epaissiRTContainer) tegumentsDroiteConfig.epaissiRTContainer.classList.add('d-none');
        if (tegumentsDroiteConfig.epaissiTopoContainer) tegumentsDroiteConfig.epaissiTopoContainer.classList.add('d-none');

        switch(tegumentsDroiteConfig.epaissiTypeSelect.value) {
            case 'diffus':
                if (tegumentsDroiteConfig.epaissiRTContainer) tegumentsDroiteConfig.epaissiRTContainer.classList.remove('d-none');
                break;
            case 'focal':
                if (tegumentsDroiteConfig.epaissiTopoContainer) tegumentsDroiteConfig.epaissiTopoContainer.classList.remove('d-none');
                break;
        }
    }

    // Gestion de la distorsion architecturale
    function handleDistorsionDroite() {
        if (!distorsionDroiteConfig.distorsionSelect) return;

        // Masquer tous les conteneurs
        if (distorsionDroiteConfig.intramammaireDetails) distorsionDroiteConfig.intramammaireDetails.classList.add('d-none');
        if (distorsionDroiteConfig.bordsDetails) distorsionDroiteConfig.bordsDetails.classList.add('d-none');

        switch(distorsionDroiteConfig.distorsionSelect.value) {
            case 'intramammaire':
                if (distorsionDroiteConfig.intramammaireDetails) {
                    distorsionDroiteConfig.intramammaireDetails.classList.remove('d-none');
                    handleDistorsionTopographieDroite();
                }
                break;
            case 'bords_mammaires':
                if (distorsionDroiteConfig.bordsDetails) distorsionDroiteConfig.bordsDetails.classList.remove('d-none');
                break;
        }
    }

    function handleDistorsionTopographieDroite() {
        if (!distorsionDroiteConfig.topographieSelect) return;

        if (distorsionDroiteConfig.quadrantDetails) distorsionDroiteConfig.quadrantDetails.classList.add('d-none');
        if (distorsionDroiteConfig.unionDetails) distorsionDroiteConfig.unionDetails.classList.add('d-none');

        switch(distorsionDroiteConfig.topographieSelect.value) {
            case 'quadrant':
                if (distorsionDroiteConfig.quadrantDetails) distorsionDroiteConfig.quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
            case 'projection':
                if (distorsionDroiteConfig.unionDetails) distorsionDroiteConfig.unionDetails.classList.remove('d-none');
                break;
        }
    }

    // Gestion des calcifications non suspectes
    function handleCalcificationsNonSuspectesDroite() {
        if (!calcificationsNonSuspectesDroiteConfig.calcificationsSelect || !calcificationsNonSuspectesDroiteConfig.optionsContainer) return;

        if (calcificationsNonSuspectesDroiteConfig.calcificationsSelect.value === 'oui') {
            calcificationsNonSuspectesDroiteConfig.optionsContainer.classList.remove('d-none');
            // Réinitialiser la sélection du type de calcification
            if (calcificationsNonSuspectesDroiteConfig.typeSelect) {
                calcificationsNonSuspectesDroiteConfig.typeSelect.value = '';
            }
        } else {
            calcificationsNonSuspectesDroiteConfig.optionsContainer.classList.add('d-none');
        }
    }

    // Gestion de la désorganisation architecturale
    function handleDesorganisationDroite() {
        if (!desorganisationDroiteConfig.desorganisationSelect || !desorganisationDroiteConfig.optionsContainer) return;

        if (desorganisationDroiteConfig.desorganisationSelect.value === 'chirurgie') {
            desorganisationDroiteConfig.optionsContainer.classList.remove('d-none');
            handleDesorganisationTopographieDroite();
        } else {
            desorganisationDroiteConfig.optionsContainer.classList.add('d-none');
            if (desorganisationDroiteConfig.quadrantDetails) desorganisationDroiteConfig.quadrantDetails.classList.add('d-none');
            if (desorganisationDroiteConfig.unionDetails) desorganisationDroiteConfig.unionDetails.classList.add('d-none');
        }
    }

    function handleDesorganisationTopographieDroite() {
        if (!desorganisationDroiteConfig.topographieSelect) return;

        if (desorganisationDroiteConfig.quadrantDetails) desorganisationDroiteConfig.quadrantDetails.classList.add('d-none');
        if (desorganisationDroiteConfig.unionDetails) desorganisationDroiteConfig.unionDetails.classList.add('d-none');

        switch(desorganisationDroiteConfig.topographieSelect.value) {
            case 'quadrant':
                if (desorganisationDroiteConfig.quadrantDetails) desorganisationDroiteConfig.quadrantDetails.classList.remove('d-none');
                break;
            case 'union':
            case 'projection':
                if (desorganisationDroiteConfig.unionDetails) desorganisationDroiteConfig.unionDetails.classList.remove('d-none');
                break;
        }
    }

    // Gestion du prolongement axillaire
    function handleProlongementAxillaireDroite() {
        if (!prolongementAxillaireDroiteConfig.prolongementSelect || !prolongementAxillaireDroiteConfig.typeContainer) return;

        if (prolongementAxillaireDroiteConfig.prolongementSelect.value === 'oui') {
            prolongementAxillaireDroiteConfig.typeContainer.classList.remove('d-none');
        } else {
            prolongementAxillaireDroiteConfig.typeContainer.classList.add('d-none');
            if (prolongementAxillaireDroiteConfig.typeSelect) {
                prolongementAxillaireDroiteConfig.typeSelect.value = '';
            }
        }
    }

    // Gestion du creux axillaire
    function handleCreuxAxillaireDroite() {
        if (!creuxAxillaireDroiteConfig.creuxAxillaireSelect || !creuxAxillaireDroiteConfig.detailsContainer) return;

        if (creuxAxillaireDroiteConfig.creuxAxillaireSelect.value === 'oui') {
            creuxAxillaireDroiteConfig.detailsContainer.classList.remove('d-none');
            handleCreuxAxillaireTypeDroite();
        } else {
            creuxAxillaireDroiteConfig.detailsContainer.classList.add('d-none');
            resetCreuxAxillaireFields();
        }
    }

    function resetCreuxAxillaireFields() {
        if (creuxAxillaireDroiteConfig.admSimpleDetails) {
            creuxAxillaireDroiteConfig.admSimpleDetails.classList.add('d-none');
        }
        if (creuxAxillaireDroiteConfig.cortexDetails) {
            creuxAxillaireDroiteConfig.cortexDetails.classList.add('d-none');
        }
        if (creuxAxillaireDroiteConfig.petitAxeDetails) {
            creuxAxillaireDroiteConfig.petitAxeDetails.classList.add('d-none');
        }
        if (creuxAxillaireDroiteConfig.admsDetails) {
            creuxAxillaireDroiteConfig.admsDetails.classList.add('d-none');
        }
    }

    function handleCreuxAxillaireTypeDroite() {
        if (!creuxAxillaireDroiteConfig.admTypeSelect) return;

        const value = creuxAxillaireDroiteConfig.admTypeSelect.value;
        
        // Masquer tous les conteneurs de détails spécifiques
        creuxAxillaireDroiteConfig.cortexDetails.classList.add('d-none');
        creuxAxillaireDroiteConfig.petitAxeDetails.classList.add('d-none');

        // Afficher les détails appropriés selon le type
        switch(value) {
            case 'cortex_epaissi':
                creuxAxillaireDroiteConfig.cortexDetails.classList.remove('d-none');
                break;
            case 'petit_axe':
            case 'petit_axe_perte_hile':
                creuxAxillaireDroiteConfig.petitAxeDetails.classList.remove('d-none');
                break;
        }
    }

    // Initialisation des écouteurs d'événements
    if (asymetrieDroiteConfig.asymetrieSelect) {
        asymetrieDroiteConfig.asymetrieSelect.addEventListener('change', handleAsymetrieDroite);
    }

    if (asymetrieDroiteConfig.typeSelect) {
        asymetrieDroiteConfig.typeSelect.addEventListener('change', handleTypeAsymetrieDroite);
    }

    if (asymetrieDroiteConfig.simpleValeurSelect) {
        asymetrieDroiteConfig.simpleValeurSelect.addEventListener('change', handleSimpleValeurDroite);
    }

    if (masseDroiteConfig.masseSelect) {
        masseDroiteConfig.masseSelect.addEventListener('change', handleMasseDroite);
    }

    if (masseDroiteConfig.addButton) {
        masseDroiteConfig.addButton.addEventListener('click', ajouterMasseDroite);
    }

    if (microcalcificationsDroiteConfig.microcalcificationsSelect) {
        microcalcificationsDroiteConfig.microcalcificationsSelect.addEventListener('change', handleMicrocalcificationsDroite);
    }

    if (microcalcificationsDroiteConfig.addButton) {
        microcalcificationsDroiteConfig.addButton.addEventListener('click', ajouterMicrocalcificationsDroite);
    }

    if (tegumentsDroiteConfig.tegumentsSelect) {
        tegumentsDroiteConfig.tegumentsSelect.addEventListener('change', handleTegumentsDroite);
    }

    if (tegumentsDroiteConfig.epaissiTypeSelect) {
        tegumentsDroiteConfig.epaissiTypeSelect.addEventListener('change', handleTegumentsEpaissiTypeDroite);
    }

    if (distorsionDroiteConfig.distorsionSelect) {
        distorsionDroiteConfig.distorsionSelect.addEventListener('change', handleDistorsionDroite);
    }

    if (distorsionDroiteConfig.topographieSelect) {
        distorsionDroiteConfig.topographieSelect.addEventListener('change', handleDistorsionTopographieDroite);
    }

    if (calcificationsNonSuspectesDroiteConfig.calcificationsSelect) {
        calcificationsNonSuspectesDroiteConfig.calcificationsSelect.addEventListener('change', handleCalcificationsNonSuspectesDroite);
    }

    if (desorganisationDroiteConfig.desorganisationSelect) {
        desorganisationDroiteConfig.desorganisationSelect.addEventListener('change', handleDesorganisationDroite);
    }

    if (desorganisationDroiteConfig.topographieSelect) {
        desorganisationDroiteConfig.topographieSelect.addEventListener('change', handleDesorganisationTopographieDroite);
    }

    if (prolongementAxillaireDroiteConfig.prolongementSelect) {
        prolongementAxillaireDroiteConfig.prolongementSelect.addEventListener('change', handleProlongementAxillaireDroite);
    }

    if (creuxAxillaireDroiteConfig.creuxAxillaireSelect) {
        creuxAxillaireDroiteConfig.creuxAxillaireSelect.addEventListener('change', handleCreuxAxillaireDroite);
    }

    if (creuxAxillaireDroiteConfig.admTypeSelect) {
        creuxAxillaireDroiteConfig.admTypeSelect.addEventListener('change', handleCreuxAxillaireTypeDroite);
    }

    // Initialisation de l'état
    handleAsymetrieDroite();
    handleMasseDroite();
    handleMicrocalcificationsDroite();
    handleTegumentsDroite();
    handleDistorsionDroite();
    handleCalcificationsNonSuspectesDroite();
    handleDesorganisationDroite();
    handleProlongementAxillaireDroite();
    handleCreuxAxillaireDroite();

    // Export des configurations et fonctions
    window.densiteDroite = {
        config: {
            asymetrie: asymetrieDroiteConfig,
            masse: masseDroiteConfig,
            microcalcifications: microcalcificationsDroiteConfig,
            teguments: tegumentsDroiteConfig,
            distorsion: distorsionDroiteConfig,
            calcificationsNonSuspectes: calcificationsNonSuspectesDroiteConfig,
            desorganisation: desorganisationDroiteConfig,
            prolongementAxillaire: prolongementAxillaireDroiteConfig,
            creuxAxillaire: creuxAxillaireDroiteConfig
        },
        handlers: {
            handleAsymetrie: handleAsymetrieDroite,
            handleTypeAsymetrie: handleTypeAsymetrieDroite,
            handleSimpleValeur: handleSimpleValeurDroite,
            handleMasse: handleMasseDroite,
            handleMicrocalcifications: handleMicrocalcificationsDroite,
            handleTeguments: handleTegumentsDroite,
            handleDistorsion: handleDistorsionDroite,
            handleCalcificationsNonSuspectes: handleCalcificationsNonSuspectesDroite,
            handleDesorganisation: handleDesorganisationDroite,
            handleProlongementAxillaire: handleProlongementAxillaireDroite,
            handleCreuxAxillaire: handleCreuxAxillaireDroite
        }
    };
}); 