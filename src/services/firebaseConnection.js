import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAekM0lbX4ZfJnZNcOVPow4KOa5SNeydpg",
    authDomain: "devlink-fe5d0.firebaseapp.com",
    projectId: "devlink-fe5d0",
    storageBucket: "devlink-fe5d0.appspot.com",
    messagingSenderId: "931643116693",
    appId: "1:931643116693:web:09201980d0f4a975951f9c"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };