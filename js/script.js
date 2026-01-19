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

// Dropdown menu function
/* When the user clicks on the button, this will toggle between hiding 
and showing dropdown content */
function dropdown() {
    document.getElementById("dropdownList").classList.toggle("show");
}

// This closes the dropdown menu when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Dropdown menu function (Edit Button)
/* When the user clicks on the button, this will toggle between hiding 
and showing dropdown content */
function dropdown2() {
    document.getElementById("dropdownList2").classList.toggle("show");
}

// This closes the dropdown menu when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (!event.target.matches('.editBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}