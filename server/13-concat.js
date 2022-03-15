//array básicos
const numbers = [1, 1, 2, 2];
const numbers2 = [3, 3, 4, 4];

//Variable constante con los elementos del array numbers
const newArray = [...numbers];
// //forma tradicional, ciclo for
// //metemos el array numbers2, porque ese es el array que vamos a empujar dentro de la nueva varibale. 
for (let index = 0; index < numbers2.length; index++) {
    const element = numbers2[index];
    newArray.push(element);
}

console.log(newArray);
//[1, 1, 2, 2, 3, 3, 4, 4]

//método concat
const contacMethod = numbers.concat(numbers2);

console.log(contacMethod);
//[1, 1, 2, 2, 3, 3, 4, 4]