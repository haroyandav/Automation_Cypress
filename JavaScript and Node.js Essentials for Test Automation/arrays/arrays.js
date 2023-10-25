let array = [
    {
        name: 'Davit' ,
        age: '27'
    },
    {
        name: 'Lida',
        age: '23'
    }
]
console.log(array);

let book = [
    {

    name: 'asdsad',
    category: 'dswewe',
    price: 100
},
    {

    name: 'asdsad',
    category: 'dswewe',
    price: 200
},
    {

    name: 'asdsad',
    category: 'dswewe',
    price: 300
}
]

let pricesArr = []

for(let i = 0; i < book.length; i = i + 1 ){

    let price = book[i].price

    pricesArr.push(price)
}
console.log(pricesArr);

let arr1 = ['apple' , 'banana' , 'orange']
let arr2 = ['borsh' , 'xash' , 'harisa']

let arr = [...arr2, ...arr1]

console.log(arr);

let arrray = ['123' , '456' , '789' , '101112']

let maped = arrray.map(ele => parseFloat(ele))
console.log(maped);