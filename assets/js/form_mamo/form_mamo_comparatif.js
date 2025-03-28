document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de Flatpickr pour les champs de date
    const dateFields = document.querySelectorAll('.flatpickr');
    
    dateFields.forEach(field => {
        if (field.id === 'comparatif_ancien_date') {
            flatpickr(field, {
                dateFormat: "m/Y",
                locale: "fr",
                allowInput: true
            });
        } else {
            flatpickr(field, {
                dateFormat: "d/m/Y",
                locale: "fr",
                allowInput: true
            });
        }
    });

    // Gestion du bouton d'ajout de bilan plus ancien
    const ajouterComparatifAncienBtn = document.getElementById('ajouterComparatifAncienBtn');
    const comparatifAncienContainer = document.getElementById('comparatifAncienContainer');

    if (ajouterComparatifAncienBtn && comparatifAncienContainer) {
        ajouterComparatifAncienBtn.addEventListener('click', function() {
            comparatifAncienContainer.classList.remove('d-none');
            // Réinitialiser le champ de date
            const dateField = comparatifAncienContainer.querySelector('.flatpickr');
            if (dateField) {
                dateField.value = '';
            }
        });
    }

    // Gestion de la section Comparatif
    const comparatifBtn = document.getElementById('comparatifBtn');
    const comparatifOptions = document.getElementById('comparatifOptions');
    const optionBtns = document.querySelectorAll('.option-btn');
    const resetBtn = document.getElementById('resetBtn');

    // Gestion du bouton Comparatif
    if (comparatifBtn && comparatifOptions) {
        comparatifBtn.addEventListener('click', function() {
            comparatifOptions.classList.toggle('d-none');
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

    // Gestion des champs de stabilité
    const stabiliteFields = [
        'stabilite_precedente',
        'stabilite_anterieure'
    ];

    stabiliteFields.forEach(field => {
        const select = document.querySelector(`#form_mamo_${field}`);
        if (select) {
            select.addEventListener('change', function() {
                // Mettre à jour la classe CSS en fonction de la valeur
                this.className = 'form-select';
                switch(this.value) {
                    case 'stable':
                        this.classList.add('bg-success', 'text-white');
                        break;
                    case 'evolution_favorable':
                        this.classList.add('bg-info', 'text-white');
                        break;
                    case 'evolution_defavorable':
                        this.classList.add('bg-danger', 'text-white');
                        break;
                    default:
                        // Pas de classe supplémentaire pour la valeur par défaut
                        break;
                }
            });
        }
    });
});
