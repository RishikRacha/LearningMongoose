import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { checkCredsDB } from '../../service/usersService';


function Login({ login }) {
  const [creds, setCreds] = useState(
    {
      username:'', 
      password:'',
    }
  );

  const checkCreds = () => {
    checkCredsDB(creds)
    .then( (res) => {
        if(res.data.ok) {
          console.log('Valid Credentials, logged in user');
          login();
        } 
        else {
          throw new Error(res.data.error)
        }
    })
    .catch(err => {
      console.log(err.message);
      alert('Invalid Login Credentials');
    })
  }

  function handleStateUser(event) {
    setCreds({...creds, username: event.target.value})
    console.log(creds);
  }
  function handleStatePass(event) {
    setCreds({...creds, password: event.target.value})
    console.log(creds);
  }


  let navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <h1 className='kkk'>LOGIN PAGE</h1>

      <h2>Username</h2>
      <input type="text" placeholder='Enter email / username' className='loginInput' onChange={handleStateUser}/>
      <h2>Password</h2>
      <input type="password" className='loginInput' placeholder='Enter Password' onChange={handleStatePass}/>
      <br />
      <button className='loginBtn'  onClick={checkCreds} >Login</ button >

      <br /><button onClick={() => {navigate('/signup')}}> New User? </button>
    </div>
  )
}

export default Login
