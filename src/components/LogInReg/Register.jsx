import React, { useState } from 'react';
import { auth } from '../../config/firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { login } from '../../features/userSlice';
import './logreg.css'
import { MdMail } from 'react-icons/Md'
import { FaLock } from 'react-icons/Fa'
import { BsPersonFill } from 'react-icons/Bs'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Register() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");

  const dispatch =useDispatch();

  const signIn = async() => {
    if(!name){
      return alert('Please enter a full name!');
    }

     await createUserWithEmailAndPassword(auth,email,password).then((userAuth)=>{
      updateProfile(userAuth.user,{
        displayName:name,
      })
      .then(()=>{
          dispatch(login({
              email:userAuth.user.email,
              uid: userAuth.user.uid,
              displayName:name,
          }));
        alert("registered!!");
        window.location.reload();
      });
    }).catch((error) => alert(error.message));

  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box login">
          <h2>Registration</h2>
          <div>
              <div className="input-box">
                  <span className="icon"><BsPersonFill /></span>
                  <input type="text" value={name} onChange={e=>setName(e.target.value)} id="user" required/>
                  <label>Username</label>
              </div>
              <div className="input-box">
                  <span className="icon"><MdMail/></span>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} id="email" required/>
                  <label>Email</label>
              </div>
              <div className="input-box">
                  <span className="icon"><FaLock/></span>
                  <input type="password" value={password} onChange={e=>setPassword(e.target.value)} id="pass" required/>
                  <label>Password</label>
              </div>
              <button onClick={signIn} className="btn">Register</button>
              <div className="login-register">
                  <p>Already have an account?<a href="/login" className="login-link">Login</a></p>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Register