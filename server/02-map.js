//Array básico 
const letters = ["a", "b", "c"];

//Nuevo array que vamos a transformar
const newArray = [];

// Forma tradicional con for 
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    //push para empujar un nuevo elemeto al array
    newArray.push(element + " nuevo elemento")
}

console.log(letters);
console.log(newArray);

//método map
const newArray2 = letters.map(item => item + " segundo nuevo item");

console.log(newArray2);
