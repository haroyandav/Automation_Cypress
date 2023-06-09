let tstamp = '1996-07-10T10:51:52.2072';
let string = 'Hello World';
let filename = 'invoice_123.pdf'

let DtArr = tstamp.split('T')
console.log(DtArr[0]);

let str = string.split(' ')
console.log(str[0,1]);

let filearr = filename.split('.')
console.log(filearr[0]);