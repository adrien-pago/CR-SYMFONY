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
    const toggleButtons = document.querySelectorAll('.toggle-visibility');

    // Initialiser toutes les cartes comme fermées par défaut, sauf la carte principale
    document.querySelectorAll('.card-body').forEach(content => {
        if (!content.closest('.main-card')) {
            content.style.display = 'none';
        }
    });

    // Gestion des boutons individuels
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCardVisibility(this);
        });
    });

    // Ajouter le clic sur l'en-tête de la carte
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', function(e) {
            // Ne pas déclencher si on clique sur le bouton de l'œil
            if (!e.target.closest('.toggle-visibility')) {
                const toggleButton = this.querySelector('.toggle-visibility');
                if (toggleButton) {
                    toggleCardVisibility(toggleButton);
                }
            }
        });
    });

    // Fonction pour basculer la visibilité d'une carte
    function toggleCardVisibility(toggleButton) {
        const card = toggleButton.closest('.card');
        const content = card.querySelector('.card-body');
        const isVisible = content.style.display !== 'none';
        
        // Toggle la visibilité
        content.style.display = isVisible ? 'none' : 'block';
        
        // Changer l'icône
        toggleButton.classList.toggle('bi-eye');
        toggleButton.classList.toggle('bi-eye-slash');
    }
});
