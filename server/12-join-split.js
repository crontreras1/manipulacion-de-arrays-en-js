//Array básico
const elements = ['fire', 'water', 'air'];

//variable let cons tring vacio.
let rta = '';
//variable constante con separador
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta = rta + element + separator
}

console.log(rta);
//fire--water--air--

//método join
const joinMethod = elements.join('--');
console.log(joinMethod);