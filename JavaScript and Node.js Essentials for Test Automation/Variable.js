// My first program 
console.log('Hello world')

let greeting = 'Hello world by using variable' , greeting1 = 'Bye bye'
// console.log(greeting);
// console.log(greeting1);
console.log(greeting + ',' ,greeting1); 


let count = 0 
if(true) {

    let count = 10
    console.log("The value of count inside block ", count);
}
console.log("The value of count outside block ",count);


var count2 = 0 
if(true) {

    var count2 = 10

    console.log("The value of count inside block 2 ", count2);
}
console.log("The value of count outside block 2 ",count2);

const count3 = 0 
if(true) {

    const count3 = 10

    console.log("The value of count inside block 3 ", count3);
}
console.log("The value of count outside block 3 ",count3);