//Arrays dentro de un array 
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const newArray = [];

//Ciclo traducional for para recorrer el array 0 [1, 2, 3]
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    //for anidado para recorre el primer array [4, 5, 6]
    for (let j = 0; j < array.length; j++) {
        const element = matriz [i][j];
        newArray.push(element);
    }
}

console.log(newArray);
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Método flat: 
//Arrays dentro de otros arrays:
const matriz2 = [
    [1, 2, 3],
    [4, 5, 6, [1, 2], [3, 4, 5]],
    [7, 8, 9]
];

const flatMethod = matriz2.flat(3) //El tres significa los niveles de arrays que queremos que el método flat nos aplane. Nosotros le decimos cuantos queremos. 

console.log(flatMethod);
//[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 7, 8, 9 ]