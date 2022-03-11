//Array básico 
const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

//Array con objetos
const data = [
    {
        name: 'Cristian',
        level: 'low'
    },
    {
        name: 'Camilo',
        level: 'medium'
    },
    {
        name: 'Santiago',
        level: 'low'
    },
    {
        name: 'Zulma',
        level: 'hight'
    },
];

const mapReduceMethod = data
//Se tilizan los dos métodos para sacar diferente tipo de información .map filtra .reduce nos dice cuanto de cada uno hay
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(mapReduceMethod);
