//Array sencillo 
const numbers = [1, 30, 49, 29, 10, 13];

//variable let
let rta = true;

//Forma tradicional con ciclo for
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    //condicional if 
    if (element >= 40) {
        rta = false
    }
    
}

console.log(rta);
//false

//método every
const everyMethod = numbers.every(item => item >= 40)

console.log(everyMethod);
//false

//Array objeto
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

//Método every
const underFiveteen = team.every(item => item.age < 15);

console.log(underFiveteen);