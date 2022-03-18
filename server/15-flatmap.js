//Array con objetos y arrays dentro 
const users = [
    {
        userId: 1,
        username: 'Tom',
        attributes: ['Nice', 'Cute']
    },
    {
        userId: 2,
        username: 'Cris',
        attributes: ['Lovely']
    },
    {
        userId: 3,
        username: 'Dan',
        attributes: ['Nice', 'Cool']
    },
];

//Ejecución del método map y flat por separado.
const rta = users.map(user => user.attributes).flat();

console.log(rta);
//[ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

//Con método flatMap
const flatMapMethod = users.flatMap(item => item.attributes);

console.log(flatMapMethod);
//[ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

