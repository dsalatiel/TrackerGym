// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIgirUt3paN1IyNSZo_fO2yuI-_zSA1zM",
  authDomain: "verdurastropicais.firebaseapp.com",
  projectId: "verdurastropicais",
  storageBucket: "verdurastropicais.firebasestorage.app",
  messagingSenderId: "71095879528",
  appId: "1:71095879528:web:7208e9296ba1ad4bbff8dd",
  measurementId: "G-JMNMD989YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const storage =getStorage(app);