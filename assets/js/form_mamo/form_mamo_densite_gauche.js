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

    // Configuration des masses échographiques pour le sein gauche
    const masseEchoGaucheConfig = {
        masseEchoSelect: document.querySelector('#form_mamo_densite_gauche_masse_echo_gauche'),
        container: document.querySelector('#masseEchoGaucheContainer'),
        template: document.querySelector('#masseEchoTemplateGauche'),
        addButton: document.querySelector('#ajouterMasseEchoGauche'),
        counter: 0
    };

    // Configuration des non-masses échographiques pour le sein gauche
    const nonMasseEchoGaucheConfig = {
        nonMasseEchoSelect: document.querySelector('#form_mamo_densite_gauche_non_masse_echo_gauche'),
        container: document.querySelector('#nonMasseEchoGaucheContainer'),
        template: document.querySelector('#nonMasseEchoTemplateGauche'),
        addButton: document.querySelector('#ajouterNonMasseEchoGauche'),
        counter: 0
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
        const needsDetails = ['dilatation_avec_image', 'plage_hypoechogene', 'visualisation_micros'].includes(value);
        
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
        const rayonDistance = newNonMasse.querySelector('.rayon-distance-container');
        const taillesContainer = newNonMasse.querySelector('.tailles-container');
        const formeContoursContainer = newNonMasse.querySelector('.forme-contours-container');
        const topographieContainer = newNonMasse.querySelector('.topographie-container');

        if (rayonDistance) rayonDistance.classList.add('d-none');
        if (taillesContainer) taillesContainer.classList.add('d-none');
        if (formeContoursContainer) formeContoursContainer.classList.add('d-none');
        if (topographieContainer) topographieContainer.classList.add('d-none');

        switch(value) {
            case 'dilatation_avec_image':
                if (rayonDistance) rayonDistance.classList.remove('d-none');
                if (taillesContainer) taillesContainer.classList.remove('d-none');
                if (formeContoursContainer) formeContoursContainer.classList.remove('d-none');

                // Ajouter les écouteurs d'événements pour la validation des champs
                const rayonInput = rayonDistance.querySelector('input[id*="rayon"]');
                const distanceInput = rayonDistance.querySelector('input[id*="distance_mammelon"]');
                const tailleXInput = taillesContainer.querySelector('input[id*="taille_x"]');
                const tailleYInput = taillesContainer.querySelector('input[id*="taille_y"]');
                const tailleZInput = taillesContainer.querySelector('input[id*="taille_z"]');
                const formeSelect = formeContoursContainer.querySelector('select[id*="forme"]');
                const contoursSelect = formeContoursContainer.querySelector('select[id*="contours"]');

                // On crée un conteneur pour tous les champs
                const allFields = [rayonInput, distanceInput, tailleXInput, tailleYInput, tailleZInput, formeSelect, contoursSelect];

                // Variable pour suivre si l'utilisateur a commencé à remplir le formulaire
                let hasStartedFilling = false;

                // Fonction pour vérifier si tous les champs sont vides
                const areAllFieldsEmpty = () => {
                    const inputsEmpty = [rayonInput, distanceInput, tailleXInput, tailleYInput, tailleZInput]
                        .every(input => !input || !input.value.trim());
                    const selectsEmpty = [formeSelect, contoursSelect]
                        .every(select => !select || !select.value);
                    return inputsEmpty && selectsEmpty;
                };

                // Ajouter les écouteurs pour le focus
                allFields.forEach(field => {
                    if (field) {
                        // Quand un champ reçoit le focus
                        field.addEventListener('focus', () => {
                            hasStartedFilling = true;
                        });

                        // Quand un champ est modifié
                        field.addEventListener('input', () => {
                            if (field.value.trim()) {
                                hasStartedFilling = true;
                            }
                        });

                        // Quand un champ change (pour les selects)
                        field.addEventListener('change', () => {
                            if (field.value) {
                                hasStartedFilling = true;
                            }
                        });
                    }
                });

                // Fonction pour gérer la perte de focus du formulaire entier
                const handleFormBlur = (event) => {
                    // On vérifie si le nouveau focus est en dehors de notre formulaire
                    const isClickOutside = !newNonMasse.contains(event.relatedTarget);
                    
                    if (isClickOutside && !hasStartedFilling && areAllFieldsEmpty()) {
                        newNonMasse.remove();
                        if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                            nonMasseEchoGaucheConfig.counter = 0;
                        }
                        // On retire l'écouteur car le formulaire n'existe plus
                        document.removeEventListener('focusout', handleFormBlur);
                    }
                };

                // On ajoute l'écouteur au niveau du document
                document.addEventListener('focusout', handleFormBlur);

                // Bouton de suppression
                const deleteButton = newNonMasse.querySelector('.delete-non-masse-echo');
                if (deleteButton) {
                    deleteButton.addEventListener('click', function() {
                        newNonMasse.remove();
                        if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                            nonMasseEchoGaucheConfig.counter = 0;
                        }
                        // On retire l'écouteur car le formulaire n'existe plus
                        document.removeEventListener('focusout', handleFormBlur);
                    });
                }
                break;

            case 'plage_hypoechogene':
                // Afficher d'abord la topographie
                if (topographieContainer) {
                    topographieContainer.classList.remove('d-none');
                    // Déplacer le conteneur de topographie en premier
                    const parent = topographieContainer.parentNode;
                    parent.insertBefore(topographieContainer, parent.firstChild);
                }

                // Puis les autres conteneurs
                if (rayonDistance) {
                    rayonDistance.classList.remove('d-none');
                    // Déplacer après la topographie
                    const parent = rayonDistance.parentNode;
                    parent.insertBefore(rayonDistance, topographieContainer.nextSibling);
                }
                if (taillesContainer) {
                    taillesContainer.classList.remove('d-none');
                    // Déplacer après le rayon/distance
                    const parent = taillesContainer.parentNode;
                    parent.insertBefore(taillesContainer, rayonDistance.nextSibling);
                }

                // Récupérer les champs
                const plageRayonInput = rayonDistance.querySelector('input[id*="rayon"]');
                const plageDistanceInput = rayonDistance.querySelector('input[id*="distance_mammelon"]');
                const plageTailleXInput = taillesContainer.querySelector('input[id*="taille_x"]');
                const plageTailleYInput = taillesContainer.querySelector('input[id*="taille_y"]');
                const plageTailleZInput = taillesContainer.querySelector('input[id*="taille_z"]');
                const plageTopographieSelect = topographieContainer.querySelector('select[id*="topographie"]');

                // On crée un conteneur pour tous les champs
                const plageTousChamps = [plageRayonInput, plageDistanceInput, plageTailleXInput, plageTailleYInput, plageTailleZInput, plageTopographieSelect];

                // Variable pour suivre si l'utilisateur a commencé à remplir le formulaire
                let plageHasStartedFilling = false;

                // Fonction pour vérifier si tous les champs sont vides
                const plageSontTousVides = () => {
                    const inputsEmpty = [plageRayonInput, plageDistanceInput, plageTailleXInput, plageTailleYInput, plageTailleZInput]
                        .every(input => !input || !input.value.trim());
                    const selectEmpty = !plageTopographieSelect || !plageTopographieSelect.value;
                    return inputsEmpty && selectEmpty;
                };

                // Ajouter les écouteurs pour le focus et les changements
                plageTousChamps.forEach(field => {
                    if (field) {
                        // Quand un champ reçoit le focus
                        field.addEventListener('focus', () => {
                            plageHasStartedFilling = true;
                        });

                        // Quand un champ est modifié
                        field.addEventListener('input', () => {
                            if (field.value.trim()) {
                                plageHasStartedFilling = true;
                            }
                        });

                        // Quand un champ change (pour les selects)
                        field.addEventListener('change', () => {
                            if (field.value) {
                                plageHasStartedFilling = true;
                            }
                        });
                    }
                });

                // Fonction pour gérer la perte de focus du formulaire entier
                const plageHandleFormBlur = (event) => {
                    // On vérifie si le nouveau focus est en dehors de notre formulaire
                    const isClickOutside = !newNonMasse.contains(event.relatedTarget);
                    
                    if (isClickOutside && !plageHasStartedFilling && plageSontTousVides()) {
                        newNonMasse.remove();
                        if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                            nonMasseEchoGaucheConfig.counter = 0;
                        }
                        // On retire l'écouteur car le formulaire n'existe plus
                        document.removeEventListener('focusout', plageHandleFormBlur);
                    }
                };

                // On ajoute l'écouteur au niveau du document
                document.addEventListener('focusout', plageHandleFormBlur);

                // Gestion spécifique de la topographie
                if (plageTopographieSelect) {
                    plageTopographieSelect.addEventListener('change', function() {
                        const quadrantDetails = newNonMasse.querySelector('.quadrant-non-masse-echo-details');
                        const unionDetails = newNonMasse.querySelector('.union-non-masse-echo-details');

                        // Masquer tous les détails
                        if (quadrantDetails) quadrantDetails.classList.add('d-none');
                        if (unionDetails) unionDetails.classList.add('d-none');

                        // Afficher les détails selon la sélection
                        switch(this.value) {
                            case 'quadrant':
                                if (quadrantDetails) quadrantDetails.classList.remove('d-none');
                                break;
                            case 'union':
                                if (unionDetails) unionDetails.classList.remove('d-none');
                                break;
                            case 'retro_areolaire':
                            case 'prolongement_axillaire':
                                // Pas de détails supplémentaires à afficher
                                break;
                        }
                    });
                }

                // Bouton de suppression
                const plageDeleteButton = newNonMasse.querySelector('.delete-non-masse-echo');
                if (plageDeleteButton) {
                    plageDeleteButton.addEventListener('click', function() {
                        newNonMasse.remove();
                        if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                            nonMasseEchoGaucheConfig.counter = 0;
                        }
                        // On retire l'écouteur car le formulaire n'existe plus
                        document.removeEventListener('focusout', plageHandleFormBlur);
                    });
                }
                break;

            case 'visualisation_micros':
                // Afficher d'abord la topographie
                if (topographieContainer) {
                    topographieContainer.classList.remove('d-none');
                    // Déplacer le conteneur de topographie en premier
                    const parent = topographieContainer.parentNode;
                    parent.insertBefore(topographieContainer, parent.firstChild);
                }

                // Puis le conteneur rayon/distance
                if (rayonDistance) {
                    rayonDistance.classList.remove('d-none');
                    // Déplacer après la topographie
                    const parent = rayonDistance.parentNode;
                    parent.insertBefore(rayonDistance, topographieContainer.nextSibling);
                }

                // Masquer le conteneur des tailles qui n'est pas utilisé ici
                if (taillesContainer) {
                    taillesContainer.classList.add('d-none');
                }

                // Récupérer les champs
                const microRayonInput = rayonDistance.querySelector('input[id*="rayon"]');
                const microDistanceInput = rayonDistance.querySelector('input[id*="distance_mammelon"]');
                const microTopographieSelect = topographieContainer.querySelector('select[id*="topographie"]');

                // On crée un conteneur pour tous les champs
                const microTousChamps = [microRayonInput, microDistanceInput, microTopographieSelect];

                // Variable pour suivre si l'utilisateur a commencé à remplir le formulaire
                let microHasStartedFilling = false;

                // Fonction pour vérifier si tous les champs sont vides
                const microSontTousVides = () => {
                    const inputsEmpty = [microRayonInput, microDistanceInput]
                        .every(input => !input || !input.value.trim());
                    const selectEmpty = !microTopographieSelect || !microTopographieSelect.value;
                    return inputsEmpty && selectEmpty;
                };

                // Ajouter les écouteurs pour le focus et les changements
                microTousChamps.forEach(field => {
                    if (field) {
                        // Quand un champ reçoit le focus
                        field.addEventListener('focus', () => {
                            microHasStartedFilling = true;
                        });

                        // Quand un champ est modifié
                        field.addEventListener('input', () => {
                            if (field.value.trim()) {
                                microHasStartedFilling = true;
                            }
                        });

                        // Quand un champ change (pour les selects)
                        field.addEventListener('change', () => {
                            if (field.value) {
                                microHasStartedFilling = true;
                            }
                        });
                    }
                });

                // Fonction pour gérer la perte de focus du formulaire entier
                const microHandleFormBlur = (event) => {
                    // On vérifie si le nouveau focus est en dehors de notre formulaire
                    const isClickOutside = !newNonMasse.contains(event.relatedTarget);
                    
                    if (isClickOutside && !microHasStartedFilling && microSontTousVides()) {
                        newNonMasse.remove();
                        if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                            nonMasseEchoGaucheConfig.counter = 0;
                        }
                        // On retire l'écouteur car le formulaire n'existe plus
                        document.removeEventListener('focusout', microHandleFormBlur);
                    }
                };

                // On ajoute l'écouteur au niveau du document
                document.addEventListener('focusout', microHandleFormBlur);

                // Gestion spécifique de la topographie
                if (microTopographieSelect) {
                    microTopographieSelect.addEventListener('change', function() {
                        const quadrantDetails = newNonMasse.querySelector('.quadrant-non-masse-echo-details');
                        const unionDetails = newNonMasse.querySelector('.union-non-masse-echo-details');

                        // Masquer tous les détails
                        if (quadrantDetails) quadrantDetails.classList.add('d-none');
                        if (unionDetails) unionDetails.classList.add('d-none');

                        // Afficher les détails selon la sélection
                        switch(this.value) {
                            case 'quadrant':
                                if (quadrantDetails) quadrantDetails.classList.remove('d-none');
                                break;
                            case 'union':
                                if (unionDetails) unionDetails.classList.remove('d-none');
                                break;
                            case 'retro_areolaire':
                            case 'prolongement_axillaire':
                                // Pas de détails supplémentaires à afficher
                                break;
                        }
                    });
                }

                // Bouton de suppression
                const microDeleteButton = newNonMasse.querySelector('.delete-non-masse-echo');
                if (microDeleteButton) {
                    microDeleteButton.addEventListener('click', function() {
                        newNonMasse.remove();
                        if (nonMasseEchoGaucheConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateGauche)').length === 0) {
                            nonMasseEchoGaucheConfig.counter = 0;
                        }
                        // On retire l'écouteur car le formulaire n'existe plus
                        document.removeEventListener('focusout', microHandleFormBlur);
                    });
                }
                break;
        }

        // Gestion de la topographie si nécessaire
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

    // Initialisation de l'état
    handleAsymetrieGauche();
    handleMasseGauche();
    handleMicrocalcificationsGauche();
    handleTegumentsGauche();
    handleDistorsionGauche();
    handleCalcificationsNonSuspectesGauche();
    handleDesorganisationGauche();
    handleProlongementAxillaireGauche();
    handleMasseEchoGauche();
    handleNonMasseEchoGauche();

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
            masseEcho: masseEchoGaucheConfig,
            nonMasseEcho: nonMasseEchoGaucheConfig
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
            handleMasseEcho: handleMasseEchoGauche,
            handleNonMasseEcho: handleNonMasseEchoGauche
        }
    };
}); 