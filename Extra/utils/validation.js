//Creating object

const validate_email = require('/home/saitejkonduti/node_workspace/express-server/Extra/utils/helpers.js')



// function for validatin egmail


// validating list of emails

let validateUsers = (userParams) => {
    let valid = 0;
    let invalid = 0;

    for (const [key, value] of Object.entries(userParams)) {
        const result = validate_email.validateEmail(value)
        result === true ? valid ++ : invalid++;

    }
    //Printing the count for valid users
    console.log("The number of vaild users: "+valid)
    //Printing the count for invalid users
    console.log("The number of invaild users: "+invalid)
   

}

// calling the function and passing list of Emails

module.exports = { validateUsers}