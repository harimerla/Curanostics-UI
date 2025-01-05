// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCul9XDMXRZT32nW-G5wUvo4FUjTvRf_o4",
  authDomain: "curanostics-3fbe4.firebaseapp.com",
  projectId: "curanostics-3fbe4",
  storageBucket: "curanostics-3fbe4.firebasestorage.app",
  messagingSenderId: "346689984573",
  appId: "1:346689984573:web:93216eebe5c86b2e1f7254",
  measurementId: "G-2KHXGRK7CY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
