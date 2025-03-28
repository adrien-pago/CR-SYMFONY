// Import des fichiers JavaScript séparés
import './form_mamo_titre.js';
import './form_mamo_indication.js';
import './form_mamo_technique.js';
import './form_mamo_comparatif.js';
import './form_mamo_examen_clinique.js';
import './form_mamo_densite.js';

document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la navigation entre les sections
    const sections = [
        'titre',
        'indication',
        'technique',
        'comparatif',
        'examen_clinique',
        'densite'
    ];

    sections.forEach(section => {
        const btn = document.getElementById(`${section}Btn`);
        const content = document.getElementById(`${section}Content`);
        
        if (btn && content) {
            btn.addEventListener('click', function() {
                // Masquer toutes les sections
                sections.forEach(s => {
                    const sectionContent = document.getElementById(`${s}Content`);
                    if (sectionContent) {
                        sectionContent.classList.add('d-none');
                    }
                });
                
                // Afficher la section cliquée
                content.classList.remove('d-none');
                
                // Mettre à jour l'état actif des boutons
                sections.forEach(s => {
                    const sectionBtn = document.getElementById(`${s}Btn`);
                    if (sectionBtn) {
                        sectionBtn.classList.remove('active');
                    }
                });
                btn.classList.add('active');
            });
        }
    });

    // Gestion de la soumission du formulaire
    const form = document.getElementById('form_mamo');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Vérifier si tous les champs requis sont remplis
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Soumettre le formulaire
                form.submit();
            } else {
                // Afficher un message d'erreur
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }

    // Gestion de la visibilité des sections (pliage/dépliage des cartes)
    const toggleButtons = document.querySelectorAll('.form-mamo .toggle-visibility');

    // Initialiser les cartes de contenu comme fermées
    document.querySelectorAll('.form-mamo .card-body').forEach(content => {
        // Ne masquer que les cartes de contenu (celles qui ont un parent avec la classe 'card')
        if (content.closest('.card') && !content.closest('.card').classList.contains('main-card')) {
            content.classList.add('d-none');
        }
    });

    // Mettre à jour les icônes pour refléter l'état fermé
    document.querySelectorAll('.form-mamo .toggle-visibility').forEach(icon => {
        const card = icon.closest('.card');
        if (card && !card.classList.contains('main-card')) {
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    });

    // Gestion des boutons individuels
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.card');
            const content = card.querySelector('.card-body');
            const icon = this;
            
            if (content && !card.classList.contains('main-card')) {
                if (content.classList.contains('d-none')) {
                    // Ouvrir la carte
                    content.classList.remove('d-none');
                    icon.classList.remove('bi-eye');
                    icon.classList.add('bi-eye-slash');
                } else {
                    // Fermer la carte
                    content.classList.add('d-none');
                    icon.classList.remove('bi-eye-slash');
                    icon.classList.add('bi-eye');
                }
            }
        });
    });

    // Ajouter le clic sur l'en-tête de la carte
    document.querySelectorAll('.form-mamo .card-header').forEach(header => {
        header.addEventListener('click', function(e) {
            // Ne pas déclencher si on clique sur le bouton de l'œil
            if (!e.target.closest('.toggle-visibility')) {
                const card = this.closest('.card');
                if (card && !card.classList.contains('main-card')) {
                    const toggleButton = this.querySelector('.toggle-visibility');
                    if (toggleButton) {
                        toggleButton.click();
                    }
                }
            }
        });
    });
});
