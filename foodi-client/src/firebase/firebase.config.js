// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-0FjAmR_Yp9u0LUXwewX4sm_y3Y2jM4",
  authDomain: "foodi-client-2c307.firebaseapp.com",
  projectId: "foodi-client-2c307",
  storageBucket: "foodi-client-2c307.appspot.com",
  messagingSenderId: "386600864634",
  appId: "1:386600864634:web:c4d49204c71e8e0e9024c3",
  measurementId: "G-ESJLW8C71V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;