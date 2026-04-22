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

    showThis: function () {
        setTimeout(() => {
            console.log(`${this.color} a ${this.shape}`);
        }, false);
    }
};

object.showThis();

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    //sayHello: ...
    //sayMyName:...
    //sayMyAge:...
};

//odile.sayHello()
//odile.sayMyName()
//odile.sayMyAge()
