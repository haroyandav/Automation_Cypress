// return as a object

function addTwoNum1 (sum3,sum4){
    let sum1 = sum3 * sum4
    return {total: sum1}
}
let total = addTwoNum1(5,5)
console.log(total);

// 

function addTwoNum (sum1,sum2){
    return function(){
        return function(){
            return sum1 + sum2
        }
    }
}
let total1 = addTwoNum(10,10)
console.log(total1()());

