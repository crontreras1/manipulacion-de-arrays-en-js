//Array de strings sencillo
const words = ['spray', 'limit', 'elite', 'exuberant'];

//Nuevo array vacío
const newArray = [];

//técnica del for
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    //añadimos condicional (if)
    if (item.length >= 6) {
        newArray.push(item);
    };
};

console.log(words)
console.log(newArray)

//Con el método filter
const filterMetod = words.filter(item => item.length >= 6)

console.log(words)
console.log(filterMetod)

//Nuevo array de objetos
const orders = [
    {
        name: 'Cristian',
        price: 234,
        delivered: true,
    },
    {
        name: 'Cristina',
        price: 545,
        delivered: false,
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

//método filter filtrando envios false y precio mayor de 300
const newFilter = orders.filter(item => !item.delivered && item.price > 300);

console.log(newFilter);

//Buscador de información dentro de un array 
const search = (query) => {
    return orders.filter(item => {
        return item.name.includes(query);
    });
};

console.log(search('Cris'));
console.log(search('a'));