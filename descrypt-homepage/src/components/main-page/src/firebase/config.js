import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDa2QkA7JI_6q_jsbvFGzssORc8LCUjTuE",
    authDomain: "descrypt-main-page-cd475.firebaseapp.com",
    projectId: "descrypt-main-page-cd475",
    storageBucket: "descrypt-main-page-cd475.appspot.com",
    messagingSenderId: "1060172340006",
    appId: "1:1060172340006:web:1f87aa0a2873b8cf49ffe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage(); 
  const projectFirestore = firebase.firestore(); 

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export { projectStorage, projectFirestore, timestamp };
