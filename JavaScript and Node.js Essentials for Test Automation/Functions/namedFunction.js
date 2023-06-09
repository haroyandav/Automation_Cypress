// 1. Function that returns the value. 

function addTwoNum(sum1,sum2){

    let sum = sum1 + sum2
     return sum
}

// 2. Function that does not action. 

function click(ele) {

    console.log(`Clicking on the given element ${ele}`);
}

// 3. Calling function. 

let EndTotal = addTwoNum(10,10)
console.log(EndTotal);

click('loginbtn')