  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
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

// Functionality for the sign-up button
const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
    event.preventDefault();
    
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        showMessage("Account created successfully", "registerMessage");

        const userRef = doc(db, "users", user.uid);
        
        setDoc(userRef, userData).then(() => {
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
    .catch((error) => { 
        const errorCode = error.code;

        if (errorCode === 'auth/email-already-in-use') {
            showMessage("Email already in use! Please try another email.", "registerMessage");
        }
        else {
            showMessage(`Error creating account: ${error.message}`, "registerMessage");
        }
    })
});