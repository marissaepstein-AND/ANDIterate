import React, { useState, useEffect, useMemo } from 'react';
// import ReactDOM from 'react-dom;'
import { Switch, Route, HashRouter } from 'react-router-dom';
// import axios from 'axios;'
import '../styles/App.css';
import firebase from "firebase";
import theme from "../styles/theme";
import Home from '../components/pages/Home';
import ScrumInfo from '../components/pages/ScrumInfo';
import Menu from "../components/nav/Menu";
import { ThemeProvider } from 'styled-components';

const App = (props) =>{

  const firebaseApp = firebase.apps[0];

  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} exact />
        <Route exact path="/scrum-info" component={ScrumInfo} />
      </Switch>
    </HashRouter>
</ThemeProvider>
  );
}

export default App;
