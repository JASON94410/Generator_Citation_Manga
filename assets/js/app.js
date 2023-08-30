// -----------------
// Mini projet 1 - Générateur de citations
// 
// -----------------

// Ce projet necéssite des connaissances sur : 
// querySelector()
// addEventListener
// L'objet Math
// innerText / textContent 

// /!\ PAS BESOIN DE BOUCLE /!\


// Fonctionnement : Quand j'appuie sur le bouton "Nouvelle citation", la citation change aléatoirement parmi une citation dans le tableau "citations"
// Le nom de l'auteur change mais doit correspondre à l'auteur de la citation et l'image de fond change également avec l'image de la citation associée.

// -----------------
// ################
// -----------------
const citation = document.querySelector(".citation");
const auteur = document.querySelector(".auteur");
const new_citation = document.querySelector("#new_citation");
const container = document.querySelector("body");

const citations = [
    {
        citation: `"Je ne reviens jamais sur ma parole, c'est ça pour moi, être un ninja !"`,
        auteur: `Naruto Uzumaki`,
        img: "./assets/img/Nindo-naruto.jpg"


    }, {
        citation: `"Pour vivre heureux, rien de mieux que de vivre cacher"`,
        auteur: `Jason Seban`,
        img: "./assets/img/macarons.JPG"


    }, {
        citation: `"Les fous ce sont ceux qui acceptent de vivre comme du bétail."`,
        auteur: `Eren Jäger`,
        img: "./assets/img/Eren_Jäger.webp"


    }, {
        citation: `"Le mensonge tue la confiance et surtout il te prive d'amis sur qui compter vraiment. Et pire que ça le mensonge t'empêche de te voir tel que tu es réellement."`,
        auteur: `Itachi Uchiha`,
        img: "./assets/img/Itachi_Uchiha.webp"


    }, {
        citation: `"La plus triste des choses, c'est quand la personne qui t'a donné les meilleurs souvenirs devient elle-même un souvenir."`,
        auteur: `Naruto Uzumaki`,
        img: "./assets/img/Jiraya_et_Naruto.webp"


    }, {
        citation: `"Ce ne sont pas les gens qui changent, ce sont juste les masques qui tombent."`,
        auteur: `Obito Uchiha`,
        img: "./assets/img/Obito_Uchiha.jpg"


    }, {
        citation: `"Si la violence ne résout rien c'est que tu ne frappes pas assez fort."`,
        auteur: `Natsu Dragneel `,
        img: "./assets/img/Natsu.png"


    }, {
        citation: `"Parler de la paix tout en répandant le sang, il est quelque chose que seuls les humains peuvent faire."`,
        auteur: `Madara Uchiha`,
        img: "./assets/img/Madara_Uchiha.png"

    }, {
        citation: `"Notre monde n'a pas de sens, pas plus que nous, qui y vivons. Quand nous, dont l'existence n'a aucun sens, imaginons ce monde, c'est là que le fait même de savoir qu'il n'a pas de sens n'a aucun sens non plus."`,
        auteur: `Ulquiorra Schiffer`,
        img: "./assets/img/Ulquiorra.jpeg"

    }, {
        citation: `"T'es con naturellement ou t'as pris des cours ?"`,
        auteur: `Eikichi Onizuka`,
        img: "./assets/img/Onizuka.jpeg"


    },
];

function afficherCitationAleatoire() {
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];

    citation.innerText = citationAleatoire.citation;
    auteur.innerText = citationAleatoire.auteur;
    container.style.backgroundImage = `url(${citationAleatoire.img})`;
}

new_citation.addEventListener("click", afficherCitationAleatoire);

afficherCitationAleatoire();