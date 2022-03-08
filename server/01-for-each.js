//Array de letras
const letters = ["a", "b", "c"];

//Ciclo for tradicional 
for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log("for " + element);
}

//Método de Array (forEach)
letters.forEach(item => console.log("forEach " + item));