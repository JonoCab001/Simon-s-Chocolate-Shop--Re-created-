/*const signUpButton = document.getElementById("signUpButton");
const signUpForm = document.getElementById('inputForms');*/


// This will toggle the nav menu in responsive view whenever the user taps on the icon

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}

// This is to ensure the sign up button works successfully
/* signUpButton.addEventListener("click", function() {
    signUpForm.style.display = "block";
}); */