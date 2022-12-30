
//const validate_email = require('./helpers.js')
import { validateEmail } from "./helpers.js";


// validating list of emails

const validateUsers = (userParams) => {
    let valid = 0;
    let invalid = 0;

    for (const [key, value] of Object.entries(userParams)) {
        const result = validateEmail(value)
        result === true ? valid ++ : invalid++;

    }
    //Printing the count for valid users
    console.log("The number of vaild users: "+valid)
    //Printing the count for invalid users
    console.log("The number of invaild users: "+invalid)
   

}

// Exporting validateUsers function
export { validateUsers}