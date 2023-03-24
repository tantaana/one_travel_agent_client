// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzHSX_-yC39qAr3MfGLu_Nl-7_YfXR2Rw",
    authDomain: "one-travel-agent.firebaseapp.com",
    projectId: "one-travel-agent",
    storageBucket: "one-travel-agent.appspot.com",
    messagingSenderId: "860365819230",
    appId: "1:860365819230:web:13c9ca333b594657b693cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;