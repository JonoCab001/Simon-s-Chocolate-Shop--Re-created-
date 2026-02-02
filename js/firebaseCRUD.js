// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getFirestore, addDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
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

  // Add data to the firestore database
  async function addData() {
    const name = document.querySelector('#name').value;

    try {
      const docRef = await addDoc(collection(db, "favourites"), {
        name : name
      })
      document.querySelector('name').value = "";
    }
    catch (error) {
      console.log(error);
    }
  }

  const addBtn = document.querySelector('#addButton');

  addBtn.addEventListener('click', addData);

  // Get Data from Firestore
  async function getData() {
    try {
      const getDataQuery = await getDocs(collection(db, "favourites"))

      let html = "";

      getDataQuery.forEach((doc) => {
        const data = doc.data()

        html += `
        <tr>
          <td>${data.name}</td>
        </tr>
        `
      })

      document.querySelector('favourites').innerHTML = html;
    }
    catch (error) {
      console.log(error);
    }
  }

  getData();