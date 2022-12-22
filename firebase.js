// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDRV9o-qLtTJeiBFHA-InxoPSFqfpW-L6Q",
	authDomain: "todo-app-e46b3.firebaseapp.com",
	projectId: "todo-app-e46b3",
	storageBucket: "todo-app-e46b3.appspot.com",
	messagingSenderId: "996047616915",
	appId: "1:996047616915:web:16c5c2f74584deded14666",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
