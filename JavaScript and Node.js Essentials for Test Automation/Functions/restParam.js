function addTwoNum(sum1,sum2, ...sumN){

    /*let sum = sum1 + sum2
     return sum*/
    console.log(arguments.length);

    let total = 0
    for (let i = 0; i < arguments.length; i++){

        total = total + arguments[i]
    }
    return total
}
let val = addTwoNum (2,2,23,4,5,6,7,8,9,10,22) 
console.log(val);