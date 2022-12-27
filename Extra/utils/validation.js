//Creating object
const users = {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    outsideremail: 'saitejkonduti@gmail.com'
}

// function for validatin egmail
const validateEmail = (emailParams) => {   
      
    let pattern = /^\w+([\.-]?\w+)*@+([successive]+)?(\.[tech]{4})+$/
    
    return emailParams.match(pattern) != null ? true : false
         
  }

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

// calling the function and passing list of Emails
validateUsers(users)
