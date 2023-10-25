// ********
let array = [10,20,30,40,50,60,70,80,90,100]

let sum = 0
for (let i = 0 ; i < array.length ; i = i + 1) {

    sum = sum + array[i]
    
}
console.log(sum);
// ********
let reduced = array.reduce((sum , indexes) => sum + indexes,0)

console.log(reduced);
// ********

let array2 = [11,12,13,14,15,16]
let evenarrays = []

for (let i = 0 ; i < array2.length ; i = i + 1) {

    if ( array2[i] % 2 === 0) {

        evenarrays.push(array2[i])
    }
}
console.log(evenarrays);
// ********
let evenarray2 = array2.filter(number => number % 2 === 0)
console.log(evenarray2);
// ********

let array3 = [1,2,3,4,5,6,7,8,9,10]

let o = array3.map(number1 => number1*3)
console.log(o);
// ********
let total = array2.filter(number => number % 2 === 0).map(number1 => number1*3).reduce((sum , indexes) => sum + indexes,0)

console.log(total);