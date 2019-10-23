// Mes boutons
const ba = document.querySelector('#generer');
let citation = document.querySelector('.objectif');




// Ensemble de phrase animaux vs hommes
const sujet = ["l'innovation", "un dispositif blended learning", "les cultures numériques en formation", "de nouvelles pratiques pédagogiques", "sa propre posture de formateur", "les plus-values et les limites de la ré-ingénierie d'une pédagogie digitale", "différentes pratiques pédagogiques", ""];
const verbe = ["Identifier", "Concevoir", "Réaliser", "Produire", "Analyser", "Expérimenter"];
const comp = ["et y faire face", "en management distruptif", "dans une démarche créativité", "en intégrant le numérique", "dans un environnement numérique","en vue d'une évaluation","en fonction du contexte de la formation", "en analysant la pertinence pédagogique"];

// Fonction pour choisir un leement d'un tableau de facon aleatoire
function aleatoire(arr) {
    return arr[Math.floor(Math.random() * arr.length )];
}

// Actions des boutons
ba.addEventListener('click', () => {
// Action du bouton effacer
citation.innerHTML = aleatoire(verbe)+ " " + aleatoire(sujet)+ " "+ aleatoire(comp)+ ".";
});
