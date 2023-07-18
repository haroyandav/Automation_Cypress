
// Loop

for (let i = 1; i <= 5; i++){
    console.log('Hello World');
}

let cars = ['Volvo' , 'Audi' , 'Lexus' , 'BMW' , 'Benz']

for (let car of cars) {
    console.log(car);
    if (car === 'BMW') {
        break
    }
}

// ES6 syntax 

cars.forEach((car) => {
    console.log(car)
})

for(let i = 1; i <= 10; i++){
    console.log(i)
}