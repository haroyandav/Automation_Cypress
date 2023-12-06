let myName

console.log(myName);

const post = 
{
    title: 'Davit',
    likeQtty: 285
}

const stringified = JSON.stringify(post)

console.log(stringified);

const parsed = JSON.parse(stringified)

console.log(`This is parsed ${JSON.parse(stringified)}`);

const a = 10

let b = a

a = 30 

console.log(a);
console.log(b);