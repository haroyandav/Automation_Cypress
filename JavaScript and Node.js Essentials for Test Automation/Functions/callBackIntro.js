function callback1(){
    

        console.log('>>>A<<<Timeout 3000');
    
}

function callback2(){
    setTimeout(() => {

        console.log('>>>B<<<CallBack TimeOut');
    },2000)
}

function callback3(){
    console.log('>>>C<<<Any');
} 

callback1()
callback2()
callback3()

