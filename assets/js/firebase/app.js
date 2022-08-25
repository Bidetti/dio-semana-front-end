// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtepnNDICWOQO45kqw4x819T6CxB47Zlc",
    authDomain: "mundo-invertido-dio.firebaseapp.com",
    projectId: "mundo-invertido-dio",
    storageBucket: "mundo-invertido-dio.appspot.com",
    messagingSenderId: "66381488690",
    appId: "1:66381488690:web:9c23069eaf253326d4922b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;