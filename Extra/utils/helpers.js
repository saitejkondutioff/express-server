let validateEmail = (emailParams) => {   
      
    let pattern = /^\w+([\.-]?\w+)*@+([successive]+)?(\.[tech]{4})+$/
    
    return emailParams.match(pattern) != null ? true : false
         
  }

  module.exports = {
    validateEmail
  }