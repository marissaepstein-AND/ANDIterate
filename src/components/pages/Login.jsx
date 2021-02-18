import React from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService'

const Login = ({ props, CheckUser }) => {

    const history = useHistory()

    async function handleClick() {
        var succesfulLogin = false;
        succesfulLogin = await Auth.loginFunction();
        if (succesfulLogin) {
            //history.push("/home")
        }

    }

    async function handleClick2() {
        let retrievedEvents = await Auth.calendarFunction().then(() => {console.log(retrievedEvents)})
    }

    const handleClick3 = () => {
        Auth.isLoggedInFunction();
    }

    const handleClick4 = () => {
        Auth.logoutFunction();
    }

    return (
        <div className="App" style={{ backgroundColour: "#FF323C" }}>
            <header className="App-header">
                <p>ANDIterate</p>
                <p style={{ fontSize: 18 }}>Please Login to Access your Dashboard</p>
                <button style={{ width: 100, height: 50 }} onClick={handleClick}>Login</button>
                <button style={{ width: 100, height: 50 }} onClick={handleClick2}>Call Calendar</button>
                <button style={{ width: 100, height: 50 }} onClick={handleClick3}>CChec Login</button>
                <button style={{ width: 100, height: 50 }} onClick={handleClick4}>Log Out</button>
            </header>
        </div>
    );
}

export default Login;