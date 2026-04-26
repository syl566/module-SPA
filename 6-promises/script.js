// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
    return sleep(300).then(() => { console.log('message 1'); });
}

function second() {
    return sleep(100).then(() => { console.log('message 2'); });
}

function third() {
    return sleep(200).then(() => { console.log('message 3'); });
}

function secondWithError() {
    return sleep(100).then(() => { throw new Error("catch me if you can"); })
}

first();   // Affiche "message 1" après 300ms  
second(); // Affiche "message 2" après 100ms
third(); // Affiche "message 3" après 200ms

// Affiche "message 2", "message 3" et "message 1" dans cet ordre, après respectivement 100ms, 200ms et 300ms
second().then(() => third()).then(() => first());

// Affiche "message 2", puis une erreur après 100ms
secondWithError().catch(error => console.error(error.message));


// Fonction qui récupère les humains (id 1)

function getSpecies() {
    return fetch('https://swapi.info/api/species/1/')
        .then(response => response.json())
        .then(species => {
            console.log('Espèce :', species.name);
            return species;
        });
}

function getFirstPerson() {
    return getSpecies()
        .then(species => {
            const firstPersonUrl = species.people[2];
            console.log('URL du personnage :', firstPersonUrl);
            return fetch(firstPersonUrl);
        })
        .then(response => response.json())
        .then(person => {
            console.log('Personnage :', person.name);
            return person;
        });
}


getFirstPerson();


// Récupère TOUS les personnages en parallèle
function getAllPeople() {
    return getSpecies()
        .then(species => {
            const requests = species.people.map(url => fetch(url));
            return Promise.all(requests);
        })
        .then(responses => Promise.all(responses.map(r => r.json())))

        // transforme chaque personne en fiche lisible
        .then(people => people.map(person => ({
            nom: person.name,
            taille: `${person.height} cm`,
            poids: `${person.mass} kg`,
            yeux: person.eye_color
        })))

        // On affiche les fiches
        .then(fiches => {
            fiches.forEach(fiche => {
                console.log(`
                    Nom    : ${fiche.nom}
                    Taille : ${fiche.taille}
                    Poids  : ${fiche.poids}
                    Yeux   : ${fiche.yeux}
                `);
            });
            return fiches;
        });
}

getAllPeople();

//RÉCUPÈRE LES BOUTONS
const btnOk     = document.getElementById('btnOk');
const btnCancel = document.getElementById('btnCancel');

//FONCTION QUI RETOURNE UNE PROMISE QUI SE RÉSOLVRA QUAND L'UN DES BOUTONS SERA CLIQUÉ
function waitForClick() {
  return new Promise((resolve, reject) => {
    btnOk.addEventListener('click',     () => resolve('Ok clicked'),     { once: true });
    btnCancel.addEventListener('click', () => reject('Cancel clicked'),  { once: true });
  });
}

//UTILISE LA PROMISE POUR AFFICHER UN MESSAGE QUAND L'UN DES BOUTONS EST CLIQUÉ
waitForClick()
  .then(msg  => console.log(msg))
  .catch(msg => console.log(msg));