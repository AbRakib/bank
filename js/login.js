// step-1: add click event handler with the submit button
document.getElementById("button-submit").addEventListener('click', function () { 
    // step-2: get the email address in html form use id
    // always remember to use .value for get data from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // check user email and password for login website
    if (email === 'admin@gmail.com' && password === '123') {
        window.location.href = "bank.html";
    } else {
        alert("invalid Users");
    }
 })