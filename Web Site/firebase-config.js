// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase/database";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.0/firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAgsVfcrTChE7ZEW9IQWWsw5cgPnhzgKU8",
authDomain: "fire-detect-37214.firebaseapp.com",
databaseURL: "https://fire-detect-37214-default-rtdb.firebaseio.com",
projectId: "fire-detect-37214",
storageBucket: "fire-detect-37214.appspot.com",
messagingSenderId: "440410504810",
appId: "1:440410504810:web:b9969b29008bfacd035413",
measurementId: "G-9EQNNG7JV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
