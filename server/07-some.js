//Array básico
const numbers = [1, 2, 3, 4];

//Variable let
let rta = false

//forma tradicional, ciclo for
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    //Condicional
    if (element % 2 === 0) {
        rta = true;
    } else {
        rta = false; 
    }    
}

console.log(rta);

//método some
const someMethod = numbers.some(item => item % 2 === 0);

console.log(someMethod);

//Array de objetos
const orders = [
    {
        name: 'Cristian',
        price: 234,     
        delivered: true,
    },
    {
        name: 'Antonieta',
        price: 948,
        delivered: true,
    },
    {
        name: 'Bambino',
        price: 434,
        delivered: false,
    },
    {
        name: 'Wolf',
        price: 133,
        delivered: false,
    },
];

//
const deliveredSome = orders.some(item=> item.name === 'Cristian');

console.log(deliveredSome);