function validateHTMLForm() {
    const form = document.StudenSignupForm;
  
    const requiredFields = [
      { field: form.textnames, message: "Enter your first name!" },
      { field: form.lastnames, message: "Enter your last name!" },
      { field: form.fathername, message: "Enter your father's name!" },
      { field: form.personaladdress, message: "Enter your address!" },
      { field: form.emailid, message: "Enter your email!" },
      { field: form.dob, message: "Enter your date of birth!" },
      { field: form.mobileno, message: "Enter your mobile number!" }
    ];
  
    for (const { field, message } of requiredFields) {
      if (field.value.trim() === "") {
        alert(message);
        field.focus();
        return false;
      }
    }
  
    if (!form.sex[0].checked && !form.sex[1].checked) {
      alert("Choose your gender.");
      return false;
    }
  
    if (form.City.value === "-1") {
      alert("Select your city.");
      form.City.focus();
      return false;
    }
  
    if (form.Course.value === "-1") {
      alert("Select your course.");
      form.Course.focus();
      return false;
    }
  
    if (form.State.value === "-1") {
      alert("Select your state.");
      form.State.focus();
      return false;
    }
  
    if (form.District.value === "-1") {
      alert("Select your district.");
      form.District.focus();
      return false;
    }
  
    const pin = form.pincode.value;
    if (pin === "" || isNaN(pin) || pin.length !== 6) {
      alert("Enter a valid 6-digit pincode.");
      form.pincode.focus();
      return false;
    }
  
    const email = form.emailid.value;
    const at = email.indexOf("@");
    const dot = email.lastIndexOf(".");
    if (at < 1 || dot - at < 2) {
      alert("Enter a valid email address.");
      form.emailid.focus();
      return false;
    }
  
    const mobile = form.mobileno.value;
    if (isNaN(mobile) || mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number.");
      form.mobileno.focus();
      return false;
    }
  
    return true;
  }
  