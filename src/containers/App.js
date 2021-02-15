import logo from '../resources/logo.svg';
import '../styles/App.css';
import firebase from "firebase";

export default function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <code>
          <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
        </div>
        
      </header>
    </div>
  );
}
