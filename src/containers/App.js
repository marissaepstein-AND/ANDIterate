import React, { useState, useEffect, useMemo } from 'react'
// import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter } from 'react-router-dom'
// import axios from 'axios'
import '../styles/App.css';
import firebase from "firebase";
import theme from "../styles/theme"
import Home from '../components/pages/Home'
import ScrumInfo from '../components/pages/ScrumInfo'
import Menu from "../components/nav/Menu"
import { ThemeProvider } from 'styled-components';

const App = (props) => {

  const firebaseApp = firebase.apps[0];
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("Sign in succesful");
      console.log(token);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });






  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;