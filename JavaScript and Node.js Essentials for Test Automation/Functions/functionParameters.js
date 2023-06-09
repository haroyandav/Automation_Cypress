//////
function greet (name , greeting = 'Hello'){

    console.log(`${greeting} ${name}!!`);
}

greet('Rob' , 'Hi')

//////
function fullName(fname,mname,lname) {

    if(mname === true) {
        console.log(`Full name >> ${fname} ${mname} ${lname}`);
    } else {
        console.log(`'Full name >> ${fname} ${lname}`);
    }

}
fullName ('Davit' , undefined , 'Haroyan')

// Passing primitives ,object types as arg

function fullName2 (personObj){
    
    console.log(`${personObj.firstname} ${personObj.lastname}`);
}

fullName2(
    {
    firstname: 'Davit',
    lastname: 'Haroyan'
    }
);