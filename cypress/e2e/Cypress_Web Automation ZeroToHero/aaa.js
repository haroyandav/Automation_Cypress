// Logical "AND" all should be TRUE

console.log(false && true && true && true);

// Logical "OR" any value should be TRUE

console.log(true || false || false);

let ageIsMoreThanEighteen = true
let IsUsCitizens = true

let eligibilityForDriversLicense = ageIsMoreThanEighteen && IsUsCitizens

console.log(`This customer is eligible for DL: ${eligibilityForDriversLicense}`);

// Logical "NOT"

console.log(10 !== 11);