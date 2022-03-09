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

console.log(orders);

//Método map para filtrar información. En este caso sobre el precio de el array de objetos orders.
const rta = orders.map(item => item.price)

console.log(rta);

//Agregar nuevos valores al Array sin modificar el original
// const rta2 = orders.map(item => {
//     //.tax es un atribito (palabra clave) para agregar elementos al array. 
//     item.tax = .19;
//     return item;
// });

// console.log(rta2);
// //Scope!! haciendo el console.log del array original a estas instancias SE MODIFICA el array original (referencia en memoria), a persar que .map es inmutable :O 
// console.log(orders);

//Para que no se modifique el array: 
const rta3 = orders.map(item => {
    return {
        //... (Script orperation) para clonar o copiar los atribustos del objeto sin la referencia en memoria.
        ...item,
        tax: .19
    }
})


console.log(rta3);
console.log(orders);