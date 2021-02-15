import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyAo7BWJIoUvNEPpUQCMiZ7Cqedc4osmBo0",
    authDomain: "and-iterate.firebaseapp.com",
    projectId: "and-iterate",
    storageBucket: "and-iterate.appspot.com",
    messagingSenderId: "531085014565",
    appId: "1:531085014565:web:940c4984373acd32dd31cc",
    measurementId: "G-FF3GSHGBDH"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
