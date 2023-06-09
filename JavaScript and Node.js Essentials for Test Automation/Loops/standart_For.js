for (let i = 1; i <= 1; i++) {
    console.log(i);
}

// Advanced use case with an Array.

let arr = ['Apples' , 10 , 'Orange' , 20 , 'Fruit' , 30]

let sum = 0
for(let i = 0; i < arr.length; i++){

    // console.log(arr[i]);

    if(typeof arr[i] === 'number') {

        sum = sum + arr[i]

    }
}
console.log(sum);