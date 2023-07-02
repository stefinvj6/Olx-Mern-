import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../../axios';

export default function Signup() {
  const navigate = useNavigate();
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("/user",{username,email,password,number})
    .then((response) => {
      console.log(response.data)
      navigate('/login')
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            id="lname"
            name="number"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <Link to={'/login'}>
        <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
