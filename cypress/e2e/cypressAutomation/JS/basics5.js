let day = "Sunday "

console.log(day.length);

let subday = day.slice(3,6)
console.log(subday);

let subday2 = day.split(' ')
console.log(subday2[0]);

let subday3 = day.trim()
console.log(subday3.length);

let number1 = '100'
let number2 = '50'

let diff = parseFloat(number1) - parseFloat(number2)
console.log(diff);
let difftoString = diff.toString()
console.log(difftoString);
console.log(typeof(difftoString));