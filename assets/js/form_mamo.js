document.addEventListener('DOMContentLoaded', function() {
    // Gestion du bouton Bilan
    const bilanBtn = document.getElementById('bilanBtn');
    const bilanOptions = document.getElementById('bilanOptions');
    
    if (bilanBtn && bilanOptions) {
        bilanBtn.addEventListener('click', function() {
            bilanOptions.classList.toggle('d-none');
            this.classList.toggle('active');
        });
    }

    // Gestion des boutons d'options (douleur, masse, etc.)
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            optionButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
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
}); 