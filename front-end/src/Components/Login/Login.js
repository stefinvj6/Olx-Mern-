import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import axios from '../../axios';
import { Link } from 'react-router-dom';

function Login() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("user/login",{username,password})
    .then((response) => {
      console.log(response.data)
      let comparisionResult=response.data.comparisionResult
      const token =response.data.token
      document.cookie=`token=${token}`
      window.location.href = '/'
      
    }).catch((err) => {
      console.log(err)      
    });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'} >
        <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
