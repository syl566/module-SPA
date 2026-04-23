//5-1 Import
    
import nyan from './functions.js';      
import { showError } from './functions.js';     
/*nyan();*/// Appelle la fonction nyan importée depuis le fichier functions.js pour démarrer l'animation du chat Nyan
showError('Oups, une erreur est survenue !'); // Appelle la fonction showError importée depuis le fichier functions.js pour afficher un message d'erreur dans la console

// 5-2 Export
const [a, b] = [7, 9];// Déclaration de deux constantes a et b avec les valeurs 7 et 9 respectivement

import { sum, sub, multiply, divide, pow } from './math.js';// Importation de plusieurs fonctions mathématiques depuis le fichier math.js
console.log(sum(a, b)); // Affiche la somme de a et b
console.log(sub(a, b)); // Affiche la différence entre a et b
console.log(multiply(a, b)); // Affiche le produit de a et b
console.log(divide(a, b)); // Affiche le quotient de a et b
console.log(pow(a, b)); // Affiche a élevé à la puissance de b

