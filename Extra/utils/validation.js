//Creating object
const users = {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    outsideremail: 'saitejkonduti@gmail.com'
}

// function for validatin egmail
function validateEmail(emailParams){   
      
    let pattern = /^\w+([\.-]?\w+)*@+([successive]+)?(\.[tech]{4})+$/
    
    // check if email is matcing the pattern
          if (emailParams.match(pattern) != null){

            return true;
                     
           }
                else if (emailParams.match(pattern) == null){
                  return false;
                   
                }
  }

// validating list of emails

function validateUsers(userParams){
    let valid = 0;
    let invalid = 0;
    for (let i =0;i<Object.values(userParams).length; i++){
        let result = validateEmail(Object.values(userParams)[i])
        // check if email is valid
        if (result== true){
            // incrementing the count for valid users.
            valid++;
        }
        else if (result== false){
            // incrementing the count for invalid users.
            invalid++;
        }
    
    }
    //Printing the count for valid users
    console.log("The number of vaild users: "+valid)
    //Printing the count for invalid users
    console.log("The number of invaild users: "+invalid)
   
}

// calling the function and passing list of Emails
validateUsers(users)
