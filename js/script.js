// This Script is still W.I.P
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