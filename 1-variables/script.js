//1.1 Types simples

let name = 'Jacques';// La variable name est déclarée avec let, ce qui signifie qu'elle peut être réassignée à une nouvelle valeur. Cependant, elle est initialisée avec la valeur 'Jacques', qui est une chaîne de caractères (string) et ne peut pas être modifiée directement.
let age = 80;// La variable age est également déclarée avec let, ce qui signifie qu'elle peut être réassignée à une nouvelle valeur. Elle est initialisée avec la valeur 80, qui est un nombre (number) et peut être modifié directement.
let useless = 'something';// La variable useless est déclarée avec let, ce qui signifie qu'elle peut être réassignée à une nouvelle valeur. Elle est initialisée avec la valeur 'something', qui est une chaîne de caractères (string) et ne peut pas être modifiée directement.

console.log(name, age, useless);// Cette ligne affiche les valeurs actuelles des variables name, age et useless dans la console. À ce stade, elle affichera "Jacques 80 something".

name = 'Jean';// La variable name est réassignée à la nouvelle valeur 'Jean'. Cependant, cela ne modifie pas la chaîne de caractères d'origine 'Jacques', car les chaînes de caractères sont immuables en JavaScript. La variable name pointe maintenant vers une nouvelle chaîne de caractères 'Jean'.

age += 1;
useless = 14;

console.log(name, age, useless);// Cette ligne affiche les nouvelles valeurs des variables name, age et useless dans la console. Elle affichera "Jean 81 14". La variable name a été réassignée à 'Jean', la variable age a été incrémentée de 1 pour devenir 81, et la variable useless a été réassignée à la valeur numérique 14.

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry'];// La variable fruits est déclarée avec const, ce qui signifie qu'elle ne peut pas être réassignée à une nouvelle valeur. Cependant, elle est initialisée avec un tableau contenant les éléments 'apple', 'pear' et 'cherry'. Le contenu du tableau peut être modifié (par exemple, en ajoutant ou en supprimant des éléments), mais la variable fruits elle-même ne peut pas être réassignée à un nouveau tableau.
const vegetables = ['potato', 'curlyflower', 'tomato'];// La variable vegetables est également déclarée avec const, ce qui signifie qu'elle ne peut pas être réassignée à une nouvelle valeur. Elle est initialisée avec un tableau contenant les éléments 'potato', 'curlyflower' et 'tomato'. Le contenu du tableau peut être modifié, mais la variable vegetables elle-même ne peut pas être réassignée à un nouveau tableau.

//En remplaçant let par const sur le tableau fruits et vegetables une erreur apparait "erreur de type non interceptée: affectation à une variable constante"//
// pour résoudre cette problèmatique le console m'indique de supprimer la ligne saveGame = {};//
console.log(fruits, vegetables);

fruits.push('banana');// La méthode push() ajoute un nouvel élément à la fin du tableau fruits. Dans ce cas, elle ajoute 'banana' au tableau fruits, qui devient ['apple', 'pear', 'cherry', 'banana'].
vegetables.pop();// La méthode pop() supprime le dernier élément du tableau vegetables. Dans ce cas, elle supprime 'tomato' du tableau vegetables, qui devient ['potato', 'curlyflower'].

console.log(fruits, vegetables);

//----------------------//
//1.3 Objets

const settings = {// La variable settings est déclarée avec const, ce qui signifie qu'elle ne peut pas être réassignée à une nouvelle valeur. Cependant, elle est initialisée avec un objet contenant les propriétés sound, music, graphics et resolution. Le contenu de l'objet peut être modifié (par exemple, en changeant les valeurs des propriétés), mais la variable settings elle-même ne peut pas être réassignée à un nouvel objet.
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};

const savedGame = {// La variable savedGame est déclarée avec const, ce qui signifie qu'elle ne peut pas être réassignée à une nouvelle valeur. Elle est initialisée avec un objet contenant les propriétés time, score et opponent. Le contenu de l'objet peut être modifié, mais la variable savedGame elle-même ne peut pas être réassignée à un nouvel objet.
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

console.log(settings, savedGame);// Cette ligne affiche les valeurs actuelles des variables settings et savedGame dans la console. Elle affichera l'objet settings avec ses propriétés et l'objet savedGame avec ses propriétés.

settings.sound = false;// La propriété sound de l'objet settings est modifiée pour avoir la valeur false. Cela change la valeur de la propriété sound dans l'objet settings, mais ne réassigne pas la variable settings elle-même.
savedGame.score += 10;// La propriété score de l'objet savedGame est incrémentée de 10. Cela change la valeur de la propriété score dans l'objet savedGame, mais ne réassigne pas la variable savedGame elle-même.

console.log(settings, savedGame);// Cette ligne affiche les nouvelles valeurs des variables settings et savedGame dans la console. Elle affichera l'objet settings avec la propriété sound modifiée à false, et l'objet savedGame avec la propriété score modifiée à 57.

/*savedGame = {};*/// 
settings.music = true;
settings.resolution = [3840, 2160];

console.log(settings, savedGame);
