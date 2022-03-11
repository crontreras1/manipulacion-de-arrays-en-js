//Array básico
const totals = [1, 2, 3, 4];

// Variable let
let sum = 0;
//Ciclo for 
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
};

console.log(sum);
//10 (suma todos los numero del array)

//con el método reduce
const reduceMethod = totals.reduce((sum, element) => sum + element, 0);

console.log(reduceMethod);
//10 (suma todos los numero del array)