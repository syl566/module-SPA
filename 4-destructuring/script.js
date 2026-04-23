//4.1 Découverte

const [a, b] = [1, 2, 3, 4];// La syntaxe de déstructuration permet d'extraire des valeurs d'un tableau ou d'un objet et de les assigner à des variables de manière plus concise. 
// Ici, on utilise la déstructuration pour extraire les deux premiers éléments du tableau [1, 2, 3, 4] et les assigner aux variables a et b respectivement.
//  Les éléments restants du tableau sont ignorés.
console.log(a);
console.log(b);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};// De même, on utilise la déstructuration pour extraire les propriétés first, last et age de l'objet {first: 'Paul', last: 'Henta', age: 35} 
//  les assigner aux variables first, last et age respectivement.    
console.log(first);
console.log(last);
console.log(age);    


//4.2 Application

function afficherPerturbation({  // Ici, on utilise la déstructuration pour extraire les propriétés de l'objet passé en argument à la fonction afficherPerturbation.
    texte,
    line,
    type = "restriction_ltc",
    heureDebut = "5:30",
    heureFin = "23:59"
}) {

    const perturbation = { // Ensuite, on crée un nouvel objet perturbation en utilisant les variables extraites et les valeurs par défaut, et on l'affiche dans la console.
        texte,
        line,
        type,
        heureDebut,
        heureFin
    };

console.log(perturbation);

}// La fonction afficherPerturbation prend un objet en argument et utilise la déstructuration pour extraire les propriétés texte, line, type, heureDebut et heureFin.
//  Les propriétés type, heureDebut et heureFin ont des valeurs par défaut qui seront utilisées si elles ne sont pas fournies dans l'objet passé en argument.
//  Ensuite, la fonction crée un nouvel objet perturbation en utilisant les variables extraites et les valeurs par défaut, et l'affiche dans la console.
// La fonction est ensuite appelée avec deux objets différents pour afficher les perturbations correspondantes. Enfin, on vérifie que les données d'origine n'ont pas été modifiées en affichant l'objet data dans la console.


// appel de la fonction
afficherPerturbation({
    texte: "Travaux centre-ville C1",
    line: "C1"
});

afficherPerturbation({
    texte: "Travaux centre-ville C3",
    line: "C3"
});

// vérification
console.log(data);

// Fonction avec opérateur rest (...)
function afficherParametres(...parametres) {//
    console.log(parametres);//
}

// appels
afficherParametres("bus", "tram", "velo");

afficherParametres(1, 2, 3, 4, 5);

afficherParametres("Grenoble", true, 42);

