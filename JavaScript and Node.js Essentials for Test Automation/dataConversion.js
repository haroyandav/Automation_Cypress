let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1} `);
console.log(`The type of val1: ${typeof val2} `);

/*let numVal1 = parseInt(val1)
  let numVal2 = parseFloat(val2)*/

let numVal1 = +val1
let numVal2 = +val2

console.log(`The type of numVal1: ${typeof numVal1}, and the value is: ${numVal1} `);
console.log(`The type of numVal2: ${typeof numVal2}, and the value is: ${numVal2} `);

let strVal1 = numVal1.toString()
let strVal2 = numVal2.toString()

console.log(`${typeof strVal1}`);
console.log(`${typeof strVal2}`);