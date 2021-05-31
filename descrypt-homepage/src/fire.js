import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyALnkrAwuu8YZry7vAIY4fn91SPAOQ8QxQ",
    authDomain: "login-114d3.firebaseapp.com",
    projectId: "login-114d3",
    storageBucket: "login-114d3.appspot.com",
    messagingSenderId: "804158862388",
    appId: "1:804158862388:web:b91b43ce17c2ddddeb8661"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;