let ruuner = 'info'

let loglevel = ruuner === 'info' ? 'abc' : 'Error'

console.log(loglevel);

let loglevel2 = ruuner === 'info' ? 'cloud' : ruuner === 'chrome' ? 'mozila' : 'Error'

console.log(loglevel2);