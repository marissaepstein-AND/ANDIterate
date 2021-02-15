import React, { useState, useEffect, useMemo } from 'react'
// import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter } from 'react-router-dom'
// import axios from 'axios'
import '../styles/App.css';
import firebase from "firebase";
import Home from '../components/pages/Home'

const App = (props) =>{

  const firebaseApp = firebase.apps[0];

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
