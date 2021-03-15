// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBVYbk13_5rmbzKPMP8xzOruaUW5R17F3o",
	authDomain: "fir-b1d6e.firebaseapp.com",
	projectId: "fir-b1d6e",
	storageBucket: "fir-b1d6e.appspot.com",
	messagingSenderId: "783255992050",
	appId: "1:783255992050:web:2d3766840a7f1da0f8426b",
	measurementId: "G-MPVNSH0BT7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
