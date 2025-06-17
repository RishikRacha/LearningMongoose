import React, {useRef} from 'react'
import './Signup.css'
import { createUser } from '../../service/usersService';
import {useNavigate} from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    let usernameRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);
    let confirmPasswordRef = useRef(null);
    let ageRef = useRef(null);

    const getUserData = () => {
        console.log('The input boxes read: ',usernameRef.current.value, emailRef.current.value, passwordRef.current.value, confirmPasswordRef.current.value , ageRef.current.value);

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {alert('passwords dont match'); return;};

        var user = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            age: ageRef.current.value,
            isActive: true
        }
        
        createUser(user)
        .then((res)=>{
            if (res.data.ok) {
                alert(res.data.result);
                navigate('/login');
            } else {
                alert("User could not be created");
                throw new Error(res.data.error.errorResponse.errmsg);
            }
        })
        .catch((err) => {console.log(`Could not create user.\nError response: ` + err.message);})
    }


    return (
        <div className="signup-wrapper">
        <h1>Signup</h1>

        <label>Username</label>
        <input type="text" placeholder="Enter your username" ref={usernameRef}/>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" ref={emailRef}/>

        <label>Password</label>
        <input type="password" placeholder="Create a password" ref={passwordRef}/>

        <label>Confirm Password</label>
        <input type="password" placeholder="Re-enter your password" ref={confirmPasswordRef}/>

        <label>Age</label>
        <input type="number" min='0' placeholder="Enter Age" ref={ageRef}/>

        <button onClick={getUserData}>Sign Up</button>                         <br /><br />

        <div style={{display: 'flex' ,justifyContent: 'center'}}><button onClick={() => {navigate('/login')}} >Already a user?</button></div>
        </div>
    )
}

export default Signup
