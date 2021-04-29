import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSAjHnCnwpwSAfELCWWnGBimNBUM5cTXg",
    authDomain: "foxcoverts-1.firebaseapp.com",
    databaseURL: "https://foxcoverts-1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "foxcoverts-1",
    storageBucket: "foxcoverts-1.appspot.com",
    messagingSenderId: "352003245711",
    appId: "1:352003245711:web:1e333a2861e8c4bad312fa",
    measurementId: "G-QYKCYBVTKF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
export default firebase;