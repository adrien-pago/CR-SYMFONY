// Gestion de la distorsion architecturale
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour gérer la distorsion architecturale
    function handleDistorsionArchitecturale(selectId, intramammaireDetailsId, bordsDetailsId) {
        const select = document.getElementById(selectId);
        const intramammaireDetails = document.getElementById(intramammaireDetailsId);
        const bordsDetails = document.getElementById(bordsDetailsId);

        if (select) {
            select.addEventListener('change', function() {
                if (intramammaireDetails) intramammaireDetails.classList.add('d-none');
                if (bordsDetails) bordsDetails.classList.add('d-none');

                if (this.value === 'Intramammaire' && intramammaireDetails) {
                    intramammaireDetails.classList.remove('d-none');
                } else if (this.value === 'Des bords mammaires' && bordsDetails) {
                    bordsDetails.classList.remove('d-none');
                }
            });
        }
    }

    // Fonction pour gérer les options de topographie intramammaire
    function handleTopographieIntramammaire(selectId, quadrantDetailsId, unionDetailsId, projectionDetailsId) {
        const select = document.getElementById(selectId);
        const quadrantDetails = document.getElementById(quadrantDetailsId);
        const unionDetails = document.getElementById(unionDetailsId);
        const projectionDetails = document.getElementById(projectionDetailsId);

        if (select) {
            select.addEventListener('change', function() {
                if (quadrantDetails) quadrantDetails.classList.add('d-none');
                if (unionDetails) unionDetails.classList.add('d-none');
                if (projectionDetails) projectionDetails.classList.add('d-none');

                if (this.value === 'Quadrant' && quadrantDetails) {
                    quadrantDetails.classList.remove('d-none');
                } else if (this.value === 'Union' && unionDetails) {
                    unionDetails.classList.remove('d-none');
                } else if (this.value === 'Projection' && projectionDetails) {
                    projectionDetails.classList.remove('d-none');
                }
            });
        }
    }

    // Fonction pour gérer les options de topographie des bords
    function handleTopographieBords(selectId, quadrantDetailsId, unionDetailsId, projectionDetailsId) {
        const select = document.getElementById(selectId);
        const quadrantDetails = document.getElementById(quadrantDetailsId);
        const unionDetails = document.getElementById(unionDetailsId);
        const projectionDetails = document.getElementById(projectionDetailsId);

        if (select) {
            select.addEventListener('change', function() {
                if (quadrantDetails) quadrantDetails.classList.add('d-none');
                if (unionDetails) unionDetails.classList.add('d-none');
                if (projectionDetails) projectionDetails.classList.add('d-none');

                if (this.value === 'Quadrant' && quadrantDetails) {
                    quadrantDetails.classList.remove('d-none');
                } else if (this.value === 'Union' && unionDetails) {
                    unionDetails.classList.remove('d-none');
                } else if (this.value === 'Projection' && projectionDetails) {
                    projectionDetails.classList.remove('d-none');
                }
            });
        }
    }

    // Initialisation pour le sein gauche
    handleDistorsionArchitecturale(
        'form_distorsion_architecturale_gauche',
        'distorsionIntramammaireGaucheDetails',
        'distorsionBordsGaucheDetails'
    );

    handleTopographieIntramammaire(
        'form_distorsion_intramammaire_topographie_gauche',
        'distorsionIntramammaireQuadrantGaucheDetails',
        'distorsionIntramammaireUnionGaucheDetails',
        'distorsionIntramammaireProjectionGaucheDetails'
    );

    handleTopographieBords(
        'form_distorsion_bords_topographie_gauche',
        'distorsionBordsQuadrantGaucheDetails',
        'distorsionBordsUnionGaucheDetails',
        'distorsionBordsProjectionGaucheDetails'
    );

    // Initialisation pour le sein droit
    handleDistorsionArchitecturale(
        'form_distorsion_architecturale_droite',
        'distorsionIntramammaireDroiteDetails',
        'distorsionBordsDroiteDetails'
    );

    handleTopographieIntramammaire(
        'form_distorsion_intramammaire_topographie_droite',
        'distorsionIntramammaireQuadrantDroiteDetails',
        'distorsionIntramammaireUnionDroiteDetails',
        'distorsionIntramammaireProjectionDroiteDetails'
    );

    handleTopographieBords(
        'form_distorsion_bords_topographie_droite',
        'distorsionBordsQuadrantDroiteDetails',
        'distorsionBordsUnionDroiteDetails',
        'distorsionBordsProjectionDroiteDetails'
    );
}); 