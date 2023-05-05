import React, { useState } from 'react';
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import './logreg.css'
import { MdMail } from 'react-icons/Md'
import { FaLock } from 'react-icons/Fa'
import { BsPersonFill } from 'react-icons/Bs'

function Register() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");

  const signIn = () => {
    if(!name){
      return alert('Please enter a full name!');
    }

    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
          displayName:name,
          photoURL:profilePic,
      })
      .then(()=>{
        dispatch(login({
            email:userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:name,
            photoURL:profilePic

        }));

      });
    }).catch((error) => alert(error.message));
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box login">
          <h2>Registration</h2>
          <form action="login.php" method="post">
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
                  <label for="">Password</label>
              </div>
              <div className="remember-forgot">
                  <label for=""><input type="checkbox"/>I agree to the terms & conditions</label>
              </div>
              <button onClick={signIn} className="btn">Register</button>
              <div className="login-register">
                  <p>Already have an account?<a href="/login" className="login-link">Login</a></p>
              </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Register