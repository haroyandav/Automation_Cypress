let testRunner = 'local'
let machineID = ""
let envFile = 'test_config'

let reportData = {

    
    testID: 12345,
    status: 'PASS',
    "PASS/FAIL Flag": "PASS",
    totalTest: 100,
    totalPass: 80,
    isInScope: true,
    passrate: function () {
        return (this.totalTest / this.totalPass) * 100
    },
    runDt: new Date(),
    runner: testRunner,
    macID: machineID ? machineID : "Unknown",
    [envFile]: {
        env: 'test' , 
        url: 'https://www.test.com'
    },
    scope: ['smoke' , 'regr' , 'e2e'],
    previousRun: {
        status: 'FAIL',
        runID: 6789
    }
}

for(let key in reportData) {
    console.log(`The key: ${key} , and the value is : ${JSON.stringify(reportData[key])}`)
}