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

    // Configuration des masses échographiques pour le sein droit
    const masseEchoDroiteConfig = {
        masseEchoSelect: document.querySelector('#form_mamo_densite_droite_masse_echo_droite'),
        container: document.querySelector('#masseEchoDroiteContainer'),
        template: document.querySelector('#masseEchoTemplateDroite'),
        addButton: document.querySelector('#ajouterMasseEchoDroite'),
        counter: 0
    };

    // Configuration des non-masses échographiques pour le sein droit
    const nonMasseEchoDroiteConfig = {
        nonMasseEchoSelect: document.querySelector('#form_densite_droite_non_masse_echo_droite'),
        container: document.querySelector('#nonMasseEchoDroiteContainer'),
        template: document.querySelector('#nonMasseEchoTemplateDroite'),
        addButton: document.querySelector('#ajouterNonMasseEchoDroite'),
        counter: 0
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
        if (!nonMasseEchoDroiteConfig.nonMasseEchoSelect || !nonMasseEchoDroiteConfig.addButton) {
            console.log('Configuration non valide:', {
                select: nonMasseEchoDroiteConfig.nonMasseEchoSelect,
                addButton: nonMasseEchoDroiteConfig.addButton
            });
            return;
        }

        const value = nonMasseEchoDroiteConfig.nonMasseEchoSelect.value;
        console.log('Valeur sélectionnée:', value);
        
        // Réinitialiser le conteneur et le compteur
        const nonMasses = nonMasseEchoDroiteConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateDroite)');
        nonMasses.forEach(nonMasse => nonMasse.remove());
        nonMasseEchoDroiteConfig.counter = 0;

        // Afficher le bouton d'ajout uniquement pour les options qui nécessitent des détails
        const needsDetails = ['dilatation_avec_image', 'plage_hypoechogene', 'microcalcifications'].includes(value);
        console.log('Nécessite des détails:', needsDetails);
        
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

                // Fonction pour vérifier si tous les champs obligatoires sont vides
                const checkEmptyFields = () => {
                    const rayonEmpty = !rayonInput || !rayonInput.value.trim();
                    const distanceEmpty = !distanceInput || !distanceInput.value.trim();
                    const allTaillesEmpty = (!tailleXInput || !tailleXInput.value.trim()) && 
                                          (!tailleYInput || !tailleYInput.value.trim()) && 
                                          (!tailleZInput || !tailleZInput.value.trim());

                    if (rayonEmpty && distanceEmpty && allTaillesEmpty) {
                        newNonMasse.remove();
                        if (nonMasseEchoDroiteConfig.container.querySelectorAll('.non-masse-echo-item:not(#nonMasseEchoTemplateDroite)').length === 0) {
                            nonMasseEchoDroiteConfig.counter = 0;
                        }
                    }
                };

                // Ajouter les écouteurs pour la validation
                [rayonInput, distanceInput, tailleXInput, tailleYInput, tailleZInput].forEach(input => {
                    if (input) {
                        input.addEventListener('blur', checkEmptyFields);
                    }
                });
                break;

            case 'plage_hypoechogene':
                if (topographieContainer) topographieContainer.classList.remove('d-none');
                if (taillesContainer) taillesContainer.classList.remove('d-none');
                break;
            case 'microcalcifications':
                if (topographieContainer) topographieContainer.classList.remove('d-none');
                break;
        }

        // Gestion de la topographie si nécessaire
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

    // Initialisation de l'état
    handleAsymetrieDroite();
    handleMasseDroite();
    handleMicrocalcificationsDroite();
    handleTegumentsDroite();
    handleDistorsionDroite();
    handleCalcificationsNonSuspectesDroite();
    handleDesorganisationDroite();
    handleProlongementAxillaireDroite();
    handleMasseEchoDroite();
    handleNonMasseEchoDroite();

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
            masseEcho: masseEchoDroiteConfig,
            nonMasseEcho: nonMasseEchoDroiteConfig
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
            handleMasseEcho: handleMasseEchoDroite,
            handleNonMasseEcho: handleNonMasseEchoDroite
        }
    };
}); 