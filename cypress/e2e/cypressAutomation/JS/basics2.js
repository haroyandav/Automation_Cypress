/* const i = 10

if(i === 10) {

    console.log('Case 1');
} else if (i === 2) {

    console.log('Case2');
} else if (i < 11) {
    console.log('Case 3');
} else {

    console.log('Print hello');
}

for( let i = 0 ; i <= 10 ; i = i + 2 ) {
    
    console.log(i);
}
*/

let n = 0

for(let o = 0 ; o <= 100 ; o = o + 1) {


    if(o%2 === 0 && o%5 === 0) {

        console.log(o);
        n = n + 1

        if( n === 3)
        break;
    }
};