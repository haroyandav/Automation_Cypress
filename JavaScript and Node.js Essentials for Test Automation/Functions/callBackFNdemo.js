function printMsg(msg) {

    console.log('Calling the callback function...');

    console.log(msg);

}

function greet(name , greeter) {
    console.log('Calling the main function...');
    let greetMsg = `Hello , ${name}... `
    greeter(greetMsg)
}

// calling 

// Option 1  
//greet('Davit' , printMsg);

// Option 2
//greet('Davit' , function (val) {
//    console.log(`The received value from the main function : ${val}`);
//})

// Option 3 
greet('Davit' , (res) => {
    console.log(`The received value from the main function: ${res}`)
})