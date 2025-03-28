document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la section Technique
    const techniqueBtn = document.getElementById('techniqueBtn');
    const techniqueOptions = document.getElementById('techniqueOptions');
    const optionBtns = document.querySelectorAll('.option-btn');
    const resetBtn = document.getElementById('resetBtn');

    // Gestion du bouton Technique
    if (techniqueBtn && techniqueOptions) {
        techniqueBtn.addEventListener('click', function() {
            techniqueOptions.classList.toggle('d-none');
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

    // Gestion des champs de dose
    const doseFields = [
        'dose_sein_droit',
        'dose_sein_gauche'
    ];

    doseFields.forEach(field => {
        const input = document.querySelector(`#form_mamo_${field}`);
        if (input) {
            input.addEventListener('input', function() {
                // Limiter à deux décimales
                this.value = parseFloat(this.value).toFixed(2);
            });
        }
    });

    // Gestion des champs de qualité
    const qualiteFields = [
        'qualite_positionnement',
        'qualite_compression',
        'qualite_exposition',
        'qualite_bruit',
        'qualite_contraste',
        'qualite_mouvement'
    ];

    qualiteFields.forEach(field => {
        const select = document.querySelector(`#form_mamo_${field}`);
        if (select) {
            select.addEventListener('change', function() {
                // Mettre à jour la classe CSS en fonction de la valeur
                this.className = 'form-select';
                switch(this.value) {
                    case 'parfait':
                        this.classList.add('bg-success', 'text-white');
                        break;
                    case 'acceptable':
                        this.classList.add('bg-warning');
                        break;
                    case 'inacceptable':
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
