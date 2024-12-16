import React, { useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router'
import { FloatingLabel, Form } from 'react-bootstrap';
function Home() {

const [userInput, setUserinput]= useState({
    username: "", password: ""
  })
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
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
             sessionStorage.setItem("firstName",JSON.stringify(result.data.existingUser.firstName))
             sessionStorage.setItem("email",JSON.stringify(result.data.existingUser.email))
             sessionStorage.setItem("username",JSON.stringify(result.data.existingUser.username))
             console.log(result.data.token);
             sessionStorage.setItem("token",result.data.token)
            localStorage.setItem('username',x)
            navigate('/dashboard');
        }
    };

    return (
        <>
        <div className="coverpage">
            <div className="form">
                <h4 style={{ color: 'darkblue', backgroundColor: 'white' }}>TASK MANAGEMENT TOOL</h4>
                <FloatingLabel controlId="floatingUsername" label="Username" className=' inp'>
            <Form.Control type="email" placeholder="Username" onChange={e=>setUserinput({...userInput,username:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className='mb-2 inp'>
            <Form.Control type="password" placeholder="Password" onChange={e=>setUserinput({...userInput,password:e.target.value})}   style={{backgroundColor:'white',borderTop:'0px',borderBottom:'2px solid white',borderLeft:'0px',borderRight:'0px',textAlign:'center',borderRadius:'0px',color:'black'}}/>
          </FloatingLabel>
                
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