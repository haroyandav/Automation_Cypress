let fetchUrl = require('fetch').fetchUrl;

fetchUrl('https://api.github.com/users/github' , (err , meta , body) => {
    console.log(body.toString());
})