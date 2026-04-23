export const hello = () => console.log('hello');
export const showError = message => console.error(message);



/// C'est celle là, la fonction anonyme ///
export default () => {
    let _nyan = 0; // 0 ou 1, pour choisir entre les deux tableaux de l'animation    
const  __nyan = [[
"+      o     +              o      ",
"    +             o     +       +  ",
"o          +                       ",
"    o  +           +        +      ",
"+        o     o       +        o  ",
"-_-_-_-_-_-_-_,------,      o      ",
"_-_-_-_-_-_-_-|   /\\_/\\            ",
"-_-_-_-_-_-_-~|__( ^ .^)  +     +  ",
"_-_-_-_-_-_-_-\"\"  \"\"               ",
"+      o         o   +       o     ",
"    +         +                    ",
"o        o         o      o     +  ",
"    o           +                  ",
"+      +     o        o      +     "],
[
"+      o     +              +      ",
"    o             o     o       +  ",
"o          +                       ",
"    +  o           +        o      ",
"o        o     o       +        o  ",
"_-_-_-_-_-_-_-,------,      +      ",
"-_-_-_-_-_-_-_|   /\\_/\\            ",
"_-_-_-_-_-_-_-|__( ^ .^)  o     +  ",
"-_-_-_-_-_-_-_ \"\"  \"\"              ",
"+      +         o   +       o     ",
"    o         +                    ",
"+        +         +      +     o  ",
"    +           o                  ",
"+      o     o        o      +     "
]];

function nyan(){//
    console.clear();
    console.log(__nyan[_nyan].join("\n"));// Affiche le tableau de l'animation correspondant à la valeur de _nyan
    if(_nyan === 0){ _nyan = 1; } else { _nyan = 0; }// Change la valeur de _nyan pour alterner entre les deux tableaux de l'animation
};

window.setInterval(nyan, 300);// Appelle la fonction nyan toutes les 300 millisecondes pour créer l'animation
}
