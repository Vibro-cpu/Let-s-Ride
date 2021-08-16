import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = { 
    apiKey: "AIzaSyBQvL5GBuhRvFoMBQzIM4E6dACuWDBczBE",
    authDomain: "project-73-945a3.firebaseapp.com",
    projectId: "project-73-945a3",
    storageBucket: "project-73-945a3.appspot.com",
    messagingSenderId: "88873014115",
    appId: "1:88873014115:web:7824746b1cfe9d8cf67956"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

