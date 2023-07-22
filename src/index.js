import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2UwhaW-qjtoCewPmfMo6BcfBxCENscXA",
  authDomain: "react-chat-app-6c12b.firebaseapp.com",
  databaseURL: "https://react-chat-app-6c12b-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-6c12b",
  storageBucket: "react-chat-app-6c12b.appspot.com",
  messagingSenderId: "316463229625",
  appId: "1:316463229625:web:f23e4c321cd57b364f0968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
