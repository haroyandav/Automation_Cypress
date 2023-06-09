let str = 'App # {123456} submitted'

let start = str.indexOf('{')

let end = str.lastIndexOf('}')

let theEnd = str.slice(start + 1,end)

console.log(theEnd);