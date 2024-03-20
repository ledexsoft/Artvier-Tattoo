// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// Add Firebase products that you want to use

import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByVCifTuZ2-1_UiTUZgzZ3iX2FgKOf4as",
    authDomain: "artvier-tattoo-website.firebaseapp.com",
    projectId: "artvier-tattoo-website",
    storageBucket: "artvier-tattoo-website.appspot.com",
    messagingSenderId: "1085529257712",
    appId: "1:1085529257712:web:33df013eabb2c4974af435",
    measurementId: "G-CQC946FK4P"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = firebase.firestore();

const GuardarCita = (cita) => {
    db.collection("Citas_solicitadas").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
        .then((docRef) => {
            MSJOK();
        })
        .catch((error) => {
            MSJERROR();
        });
}

const MSJOK = () => {
    Swal.fire({
        title: "Solicitud enviada",
        text: "La solicitud de su cita ha sido enviada con éxito, pronto se le contactará para confirmar su turno",
        icon: "success"
    });
}
const MSJERROR = () => {
    Swal.fire({
        title: "Solicitud enviada",
        text: "La solicitud de su cita no ha sido enviada, revira sus datos correctamente",
        icon: "error"
    });
}

$("btn-save").on('click', () => {
    alert("Hola")
})

export class ManageAccount {
    register(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "login.html";
          // Mostrar alerta de registro exitoso
          alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        })
        .catch((error) => {
          console.error(error.message);
              // Mostrar alerta de error de registro
              alert("Error al registrar: " + error.message);
        });
    }
  
    authenticate(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "index.html";
          // Mostrar alerta de inicio de sesión exitoso
          alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        })
        .catch((error) => {
          console.error(error.message);
                  // Mostrar alerta de error de inicio de sesión
                  alert("Error al iniciar sesión: " + error.message);
        });
    }
  
    signOut() {
      signOut(auth)
        .then((_) => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
