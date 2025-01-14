// Gérer la section Simplon
const simplon = document.getElementById('Simplon');
const arrowSimplon = document.getElementById('arrow2');
const hiddenSimplon = document.getElementById('hidden-simplon');

simplon.addEventListener('click', function () {
    arrowSimplon.classList.toggle('active');
    hiddenSimplon.classList.toggle('displayNone');
});

// Gérer la section Thèse
const these = document.getElementById('Thèse');
const arrowThese = document.getElementById('arrow3');
const hiddenThese = document.getElementById('hidden-these');

these.addEventListener('click', function () {
    arrowThese.classList.toggle('active');
    hiddenThese.classList.toggle('displayNone');
});