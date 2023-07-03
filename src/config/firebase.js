import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth" ;
const firebaseConfig = {
  apiKey: "AIzaSyDHMleemkWA24ath31QY8eAlrQsWZRQ6Po",
  authDomain: "expense-tracker-75bff.firebaseapp.com",
  projectId: "expense-tracker-75bff",
  storageBucket: "expense-tracker-75bff.appspot.com",
  messagingSenderId: "622047333643",
  appId: "1:622047333643:web:6bafd2491827e95b2de60e",
  measurementId: "G-SLLPD51H42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =getAuth(app);

export{auth}