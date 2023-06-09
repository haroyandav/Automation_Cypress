let dt = '1996-07-10'

let yymmdd = dt.slice(2,10)
console.log(`yymmdd >> ${yymmdd}`);

let year = dt.slice(0,4)
console.log(`Year of DT >> ${year}`);

let month = dt.slice(5,7)
console.log(`Month of DT >> ${month}`);

let day = dt.slice(8,10)
console.log(`Day of DT >> ${day}`);