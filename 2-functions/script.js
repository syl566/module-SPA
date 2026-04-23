//2.1 Fonctions simples
//convertir les 3 fonctions en Arrow function//
const sayHello = () => console.log('Hello')

const sayMyName = (first, last) => console.log(first, last)

const sayMyAge = (age) => console.log('You are ' + age + ' years old')

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this
//convertir la fonction showThis en Arrow function//
const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,

    showThis: () => console.log(`${this.color} a ${this.shape}`)// La fonction showThis est définie en utilisant la syntaxe de méthode d'objet, ce qui signifie qu'elle a accès au contexte de l'objet 
    // et peut utiliser le mot-clé this pour accéder  à ses propriétés.
};


//----------------------//
//2.3 Application

const odile = {// La variable odile est un objet qui contient des propriétés et des méthodes. Les propriétés name et age stockent des informations sur Odile,
//  tandis que les méthodes sayHello, sayMyName et sayMyAge permettent d'afficher des messages dans la console.
    name: {// La propriété name est un objet qui contient les propriétés first et last, représentant respectivement le prénom et le nom de famille d'Odile.
        first: "Odile",
        last: "Crok"
    },
    age: 23,

    sayHello: () => console.log("Hello"),// La méthode sayHello est une fonction fléchée qui affiche "Hello" dans la console lorsqu'elle est appelée. Cependant, en utilisant une fonction fléchée, elle ne peut pas accéder au contexte de l'objet odile et 
    // ne peut pas utiliser le mot-clé this pour accéder à ses propriétés.

    sayMyName() {// La méthode sayMyName est une fonction régulière qui affiche le prénom et le nom de famille d'Odile dans la console lorsqu'elle est appelée. En utilisant une fonction régulière, 
    // elle peut accéder au contexte de l'objet odile et utiliser le mot-clé this pour accéder à ses propriétés.
        console.log(this.name.first, this.name.last);
    },

    sayMyAge() {
        console.log("You are " + this.age + " years old");
    }
};

odile.sayHello()// Lorsque la méthode sayHello est appelée, elle affiche "Hello" dans la console.
// Cependant, en utilisant une fonction fléchée, elle ne peut pas accéder au contexte de l'objet odile et ne peut pas utiliser le mot-clé this pour accéder à ses propriétés.
//  Par conséquent, elle n'affiche pas les informations sur Odile. 
odile.sayMyName()
odile.sayMyAge()
