//3.1 Object.keys

const bus = {
    vehicule: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};
function afficherClesValeurs(obj) {
    for (let key in obj) { // La boucle for...in permet de parcourir les propriétés d’un objet. Elle itère sur les clés de l’objet.
        if (obj.hasOwnProperty(key)) { //
            let value = obj[key]; // On récupère la valeur associée à la clé courante

            if (typeof value === 'object' && value !== null) {  // Si la valeur est un objet, on peut faire une récursion pour afficher ses propriétés
                console.log(key + " :");
                afficherClesValeurs(value);
            } else {
                // Sinon, on affiche la clé et la valeur    
                console.log(key + " : " + value);
            }
        }
    }
}

//appel la fonction
afficherClesValeurs(bus);


//3.2 Object.values

function afficherLesPerturbations(data) {
    Object.values(data).forEach(texte => { //Object.values() récupère uniquement les valeurs de l’objet.
        if (typeof texte === "object" && texte !== null) { // Si la valeur est un objet, on peut faire une récursion pour afficher ses propriétés
            afficherLesPerturbations(texte);
        } else if (typeof texte === "string") { // Sinon, on affiche la valeur si c'est une chaîne de caractères    
            console.log(texte);
        }
    });
}

//appel la fonction
afficherLesPerturbations(data);
console.log(data);


