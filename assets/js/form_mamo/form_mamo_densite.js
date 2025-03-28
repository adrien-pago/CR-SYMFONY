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
});
