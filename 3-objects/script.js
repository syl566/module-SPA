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
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];

            if (typeof value === 'object' && value !== null) {
                // Si la valeur est un objet, on peut faire une récursion pour afficher ses propriétés
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
function afficherLesPerturbations(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];


            if (typeof value === 'object' && value !== null) {
                // Si la valeur est un objet, on peut faire une récursion pour afficher ses propriétés
                console.log(key + " :");
                afficherLesPerturbations(value);
            } else {
                // Sinon, on affiche la clé et la valeur    
                console.log(key + " : " + value);
            }
        }
    }
}

//appel la fonction
afficherLesPerturbations(data);
console.log(data);


