import firebase from "firebase/app";



// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyBdzxezFeOhG3ogsGhb_KN-9hlfHG8VuSU",
    authDomain: "smack-chat-e8ad7.firebaseapp.com",
    projectId: "smack-chat-e8ad7",
    storageBucket: "smack-chat-e8ad7.appspot.com",
    messagingSenderId: "619086547181",
    appId: "1:619086547181:web:3218c2116fb52b6c57e4e4"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }