((sum1,sum2) => {
    
    let sum = sum1 + sum2
    console.log(sum);
    return sum
    
})(2,2)

let sum = (sum1,sum2) => {
    
    let sum = sum1 + sum2
    return sum
    
}
let val = sum(22,22)
console.log(val);

// No param.

let arrowFn = () => 10 > 5
let res = arrowFn()
console.log(res);

