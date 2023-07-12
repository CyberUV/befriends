import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   
      apiKey: "AIzaSyAs6MmCEgZn-Y-NoS0MXM9yGgQjpGvCxlg",
      authDomain: "friends-c9539.firebaseapp.com",
      projectId: "friends-c9539",
      storageBucket: "friends-c9539.appspot.com",
      messagingSenderId: "547770982282",
      appId: "1:547770982282:web:a2f85542c60a295850f273",
      measurementId: "G-YRSGL0N6PN"
    });

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();


    export { db, auth, storage };