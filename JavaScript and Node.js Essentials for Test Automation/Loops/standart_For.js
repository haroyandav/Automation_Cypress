for (let i = 1; i <= 1; i++) {
    console.log(i);
}

// Advanced use case with an Array.

let arr = ['Apples' , 10 , 'Orange' , 20 , 'Fruit' , 30]
// console.log(arr.length);

let sum = 0
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let arrEle = arr[i]
    if(typeof arrEle === 'number') {
 
        sum = sum + arrEle
        console.log(sum);
    }
    
    
}
