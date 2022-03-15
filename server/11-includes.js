//Array bpasico
const pets = ['cat', 'dog', 'snake'];

//variable let
let rta = false;
// forma tradicional, ciclo for 
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    //condicional if
    if (element === 'dog') {
        rta = true;
        break;
    };
};

console.log(rta);
//true

//Método includes
const includesMethod = pets.includes('dog');

console.log(includesMethod);
//true