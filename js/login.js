// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDJ7D03Tdvirt8XE7t244MOV-swdJg7meQ",
    authDomain: "simons-chocolate-shop.firebaseapp.com",
    projectId: "simons-chocolate-shop",
    storageBucket: "simons-chocolate-shop.firebasestorage.app",
    messagingSenderId: "481372238801",
    appId: "1:481372238801:web:c6700486161321acdfe6f0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;

    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 5000);
}

  // Functionality for the login button
  const signIn = document.getElementById('submitSignIn');
  signIn.addEventListener('click', (event) => {
     event.preventDefault();
  
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const auth = getAuth();
  
     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      showMessage('You have logged in', 'signInMessage');
  
      const user = userCredential.user;
  
      localStorage.setItem('loggedInUserId', user.uid);
  
      window.location.href = 'index-loggedin.html';
     })
     .catch((error) => {
      const errorCode = error.code;
  
      if (errorCode === 'auth/invalid-credential') {
          showMessage("Invalid email or password", "signInMessage");
      }
      else {
          showMessage(`That account doesn't exist`, "signInMessage");
      }
     })
  });