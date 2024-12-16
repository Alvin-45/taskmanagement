import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        debugger;
        let x = document.getElementById('usernme').value;
        let p = document.getElementById('passwrd').value;

        if (x === "" && p === "") {
            alert('Enter Username/Password');
        } else if (x === "") {
            alert('Enter Username');
        } else if (p === "") {
            alert('Enter Password');
        } else {
            localStorage.setItem('username',x)
            localStorage.setItem('password',p)
            navigate('/dashboard');
        }
    };

    return (
        <>
        <div className="coverpage">
            <div className="form">
                <h4 style={{ color: 'darkblue', backgroundColor: 'white' }}>TASK MANAGEMENT TOOL</h4>
                <label>
                    Username: <br />
                    <input type="text" id="usernme" placeholder="Enter username" />
                </label>
                <label>
                    Password: <br />
                    <input type="password" id="passwrd" placeholder="Enter Password" />
                </label>
                <button onClick={handleSubmit}>LOGIN</button>
                <p style={{ color: 'black', backgroundColor: 'white' }}>
                    Don't have an account? <u style={{ color: 'black', backgroundColor: 'white' }}>Register</u>
                </p>
            </div>
        </div>
        </>
    );
}


export default Home