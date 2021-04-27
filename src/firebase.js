import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6AbQtp590DesVXsW0N2XkuRmGOsVPcEk",
    authDomain: "challenge-9a753.firebaseapp.com",
    projectId: "challenge-9a753",
    storageBucket: "challenge-9a753.appspot.com",
    messagingSenderId: "842984261664",
    appId: "1:842984261664:web:6b24d6e94ab30a5aee1445",
    measurementId: "G-S4TMZC1X1V"
  };

  //intialize the app and pass the config to it..
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //intialize the database
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export{db,auth}; //helps us to use db and auth outside of the firestor
  






  