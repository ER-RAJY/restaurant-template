// Import the functions you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDFoz3jGBLG6qUIet7QRzXq9c4UV_OU2A",
  authDomain: "resteau-host.firebaseapp.com",
  databaseURL: "https://resteau-host-default-rtdb.firebaseio.com",
  projectId: "resteau-host",
  storageBucket: "resteau-host.firebasestorage.app",
  messagingSenderId: "1007226758906",
  appId: "1:1007226758906:web:bc2ba1fcd999b318060b43",
  measurementId: "G-F7FSW28PPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Save message function
function saveMessage(name, email, message) {
  const messageRef = ref(database, 'messages/' + Date.now());
  set(messageRef, {
    name: name,
    email: email,
    message: message,
  })
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error saving message:", error);
      alert("An error occurred. Please try again.");
    });
}

// Listen for form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  saveMessage(name, email, message);
  form.reset();
});
