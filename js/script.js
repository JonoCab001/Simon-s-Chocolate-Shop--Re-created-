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

// Function for Password Strength
let registerPassword = document.getElementById('registerPassword');
let power = document.getElementById('power-point');

registerPassword.oninput = function() {
    let point = 0;
    let value = registerPassword.value;

    // Array for Password Meter percentage
    let widthPower = ['1%', '25%', '50%', '75%', '100%'];

    // Array for Password Meter colour
    let colorPower = ['#D73F40', '#DC6551', '#F2B84F', '#BDE952', '#3ba62f'];

    // Check for password characters
    if (value.length >= 6) {
        let arrayTest = [
            /[0-9]/, 
            /[a-z]/, 
            /[A-Z]/, 
            /[^0-9a-zA-Z]/
        ];

        arrayTest.forEach(item => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
}