import firebase from "firebase/app"; //this means I'm using free version of fb
import "firebase/firestore"; // this is the DB
import "firebase/auth"; // this will be for authentication w/ firebase

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAqFejlN_BL4J5pYDkUlX-BnLiT-9Shr-0",
  authDomain: "runners-inertia.firebaseapp.com",
  projectId: "runners-inertia",
  storageBucket: "runners-inertia.appspot.com",
  messagingSenderId: "826608306255",
  appId: "1:826608306255:web:d6f7ed26637c9809f3023a",
  measurementId: "G-K494T52ZTW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//this initializes and sets up timeStampsInSnapshots for my data
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;
