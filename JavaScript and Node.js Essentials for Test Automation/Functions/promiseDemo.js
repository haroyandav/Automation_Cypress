let prom1 = new Promise ((resolve, reject) => {

    console.log('Executing the promise ...');

    if(1 < 2){

    setTimeout(() => {
        resolve('Promise is resolved and you got a API data.. !!!')
    },5000)
    } else {
        setTimeout(() =>{
            reject('Error occured in promise')
        },2000)
    }
})

prom1.then((resp) => {
    console.log(resp);
}).catch((err) => {
    console.log(err);
})


