import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import ErrorBoundary from "./ErrorBoundary";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "./configFirebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAr_Guzli3Utpf_ibSVX5MukAIpOXTDl20",
//   authDomain: "cart-fbd85.firebaseapp.com",
//   projectId: "cart-fbd85",
//   storageBucket: "cart-fbd85.appspot.com",
//   messagingSenderId: "1096600491064",
//   appId: "1:1096600491064:web:317e06fc8b3346ba7c82cd",
// };
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// import reportWebVitals from './reportWebVitals';

// import { initializeApp } from "firebase/app";

// import firebaseConfig from "./firebase";
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <ErrorBoundary fallback={<p>Something went wrong</p>}>
  <App />
  // </ErrorBoundary>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
