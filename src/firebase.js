import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyAgXYqy87eroUWRpKdn1sH_gVWwbY_uwyo",
    authDomain: "estatery-67c53.firebaseapp.com",
    projectId: "estatery-67c53",
    storageBucket: "estatery-67c53.appspot.com",
    messagingSenderId: "1089223906137",
    appId: "1:1089223906137:web:b7e21b9b95dc493fb3b248",
});

const auth = firebaseApp.auth();

export { auth };