import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhEh-mK-PIZX8HU7Hu0jXjecVXwatOg9I",
  authDomain: "bloggeekplatzi-54bdf.firebaseapp.com",
  projectId: "bloggeekplatzi-54bdf",
  storageBucket: "bloggeekplatzi-54bdf.appspot.com",
  messagingSenderId: "396935433266",
  appId: "1:396935433266:web:e8e88f2b81b9b735d7402b",
  measurementId: "G-4BTLQ7BYZ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);