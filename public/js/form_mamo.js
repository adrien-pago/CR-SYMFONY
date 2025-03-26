document.addEventListener('DOMContentLoaded', function() {
    const bilanBtn = document.getElementById('bilanBtn');
    const bilanOptions = document.getElementById('bilanOptions');
    const bilanText = document.querySelector('.bilan-text');
    const optionBtns = document.querySelectorAll('.option-btn');
    const resetBtn = document.getElementById('resetBtn');

    // Gestion du bouton Bilan
    bilanBtn.addEventListener('click', function() {
        bilanOptions.classList.toggle('d-none');
        const isOpen = !bilanOptions.classList.contains('d-none');
        bilanText.textContent = isOpen ? ' Bilan' : ' Bilan';
        bilanBtn.querySelector('i').classList.toggle('bi-plus-circle');
        bilanBtn.querySelector('i').classList.toggle('bi-dash-circle');
    });

    // Gestion des boutons d'options
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            optionBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            // Masquer tous les conteneurs d'options
            document.querySelectorAll('.option-container').forEach(container => {
                container.classList.add('d-none');
            });

            // Afficher le conteneur d'options correspondant
            const targetId = this.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.remove('d-none');
            }
        });
    });

    // Gestion du bouton Reset
    resetBtn.addEventListener('click', function() {
        // Réinitialiser tous les champs de formulaire dans les conteneurs d'options
        document.querySelectorAll('.option-container select, .option-container textarea').forEach(field => {
            field.value = '';
        });

        // Retirer la classe active de tous les boutons d'options
        optionBtns.forEach(btn => btn.classList.remove('active'));

        // Masquer tous les conteneurs d'options
        document.querySelectorAll('.option-container').forEach(container => {
            container.classList.add('d-none');
        });
    });
}); 