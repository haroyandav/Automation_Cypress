// 1. Function without name , its is assigneed to variable

let totalSum = function (sum1,sum2){

    let sum = sum1 + sum2
     return sum
}
console.log(typeof(totalSum));

// 2. Function with name and assigneed to variable. 

let sumfn = function addTwoNum(sum1,sum2){

    let sum = sum1 + sum2
     return sum
}
let val = sumfn(2,2)
console.log(val);