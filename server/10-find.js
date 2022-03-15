//Array sencillo 
const numbers = [ 1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    //consicional
    if (element <= 30) {
        rta = element;
        break;
    }
}

console.log('for', rta);
//for 1

//Método find
const findMethod = numbers.find(item => item === 30);
const findIndexMethod = numbers.findIndex(item => item === 30);

console.log(findMethod);
//30
console.log(findIndexMethod);
//1