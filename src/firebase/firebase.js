// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDgtSWFWhQx6jMdgRsZMEbxDZ_ay4Gid8k",
    authDomain: "news-app-react-65d06.firebaseapp.com",
    projectId: "news-app-react-65d06",
    storageBucket: "news-app-react-65d06.firebasestorage.app",
    messagingSenderId: "850024729490",
    appId: "1:850024729490:web:982107ac0846d8170ccf4b",
    measurementId: "G-4N7H2XD300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

