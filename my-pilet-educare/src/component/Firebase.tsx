import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyDyVPYionDlZQEC09sTS2J8I0yPMlSygpM",
    authDomain: "auth-2bb9f.firebaseapp.com",
    projectId: "auth-2bb9f",
    storageBucket: "auth-2bb9f.appspot.com",
    messagingSenderId: "623416903605",
    appId: "1:623416903605:web:4f84d16e56445372e03bfc"
  };
const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);