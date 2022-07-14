import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBxgHBqY1FROZcajPeJOXL_tqT1RNN8riM",
  authDomain: "ecommerce-project-43727.firebaseapp.com",
  projectId: "ecommerce-project-43727",
  storageBucket: "ecommerce-project-43727.appspot.com",
  messagingSenderId: "767837017649",
  appId: "1:767837017649:web:ab4e660fe05ec4ead8a710"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}