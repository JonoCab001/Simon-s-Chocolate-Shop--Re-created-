 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getFirestore, addDoc, getDocs, collection, doc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
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

  // Initialize Database
  const db = getFirestore(app);
 
 // Get Data from Firestore
  async function getData() {
    try {
      const getDataQuery = await getDocs(collection(db, "favourites"))

      let html = "";

      getDataQuery.forEach((doc) => {
        const data = doc.data()

        html += `
        <div class="cards">
                <div class="card">
                    <div class="container">
                        <h3>${doc.name}</h3>
                    </div>
                    <img src="images/MulledWineChoc.png" alt="Mulled Wine Chocolate">
                    <button class="fav-button" id="addButton">Add to Favourites</button>
                </div>
            </div>
        `
      })

      document.querySelector('card').innerHTML = html;
    }
    catch (error) {
      console.log(error);
    }
  }

  getData();