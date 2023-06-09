let fileName = '     fabio-oyXis2kALVg-unsplash.jpg'
let upper = fileName.toUpperCase()

if (upper.trim() === fileName.toUpperCase().trim()){
    console.log(`${fileName}and${upper}`);
}

if(fileName.toUpperCase().trim() === 'FABIO-OYXIS2KALVG-UNSPLASH.JPG'){
    console.log(fileName.trim());
}

if(fileName.startsWith('')){
    console.log('Yes');
}

if(fileName.endsWith('jpg')){
    console.log('Yes');
}