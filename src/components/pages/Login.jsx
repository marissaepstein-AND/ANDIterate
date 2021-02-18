import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../services/AuthService'
import { Router } from 'react-router-dom';

const Login = ({ props, CheckUser }) => {
    
    const history = useHistory()

    async function handleClick() {
        Auth.loginFunction()
    }

    async function handleClick2() {
        Auth.calendarFunction();
    }

    // useEffect(() => {
    //     console.log(user);
    // }, [])

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