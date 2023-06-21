/*
    [Form Validation] L144
*/


document.getElementById("register").onsubmit = function() {
    let phoneInput = document.getElementById("phone").value;
    let re = /\(\d{4}\)\s\d{3}-\d{4}/; //(1234) 456-8910
    let ValidationResult = re.test(phoneInput);

    let mailInput = document.getElementById("email").value;
    let mre = /^\w{5}@\w{5}\.(com|net)$/; // eslam@gmail.com
    let validateEmail = mre.test(mailInput);

    if (ValidationResult === false || validateEmail === false) {
        console.log(false);
        return false;
    }else if (ValidationResult === "" || validateEmail === ""){
        return false;
    }else {
        return true;
    }
}
