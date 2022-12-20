import firebase from 'firebase';
import React from 'react';
var firebaseConfig = {

  apiKey: "AIzaSyBwX-moGz0l3Z5hsm3hYFRP6W5hKGtcXTc",

  authDomain: "ecommerce-d7518.firebaseapp.com",

  projectId: "ecommerce-d7518",

  storageBucket: "ecommerce-d7518.appspot.com",

  messagingSenderId: "985847150026",

  appId: "1:985847150026:web:545384b53ea07501b04b33",

  measurementId: "G-GLKME8512E"

};




  
   const fire = 
   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() 
  





 export default fire ;
  
  