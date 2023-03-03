// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  
  // Defining a function to validate form
  function validateForm() {
    // Retrieving the values of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var address=document.contactForm.address.value;
    // Defining error variables with a default value
    var emailErr = mobileErr=  true;
    if (name == "") {
      printError("nameErr", "Please enter your name");
    }

    // Validate email address
    if (email == "") {
      printError("emailErr", "Please enter your email address");
    } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
  
        printError("emailErr", "Please enter a valid email address");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }
  
    // Validate mobile number
    if (mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(mobile) === false) {
        printError("mobileErr", "Please enter a valid 10 digit mobile number");
      } else {
        printError("mobileErr", "");
        mobileErr = false;
      }
    }
    if (address == "") {
      printError("addErr", "Please enter your address");
    }
  
    // Prevent the form from being submitted if there are any errors
    if ((emailErr || mobileErr ) == true) {
      return false;
    }else{
     
       
    }
  };
 
  const getInfoPromise = async () => {
    const response = await fetch("./contact.json");
    const data = await response.json();
  
    return data;
  };
  getInfoPromise().then((data) => {
    var nme = document.querySelector("#formNme");
    var mail = document.querySelector("#formEmail");
    var mob = document.querySelector("#formMob");
    var add = document.querySelector("#formAdd");
    nme.innerHTML=`Welcome ${data.nme} you entered data as follows:`;
    mail.innerHTML=`Email : ${data.email}`;
    mob.innerHTML=`MobileNumber : ${data.mobile}`;
    add.innerHTML=`Address : ${data.address}`;
  });