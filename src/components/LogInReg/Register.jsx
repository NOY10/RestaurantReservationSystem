import React from 'react'
import './logreg.css'
import { MdMail } from 'react-icons/Md'
import { FaLock } from 'react-icons/Fa'
import { BsPersonFill } from 'react-icons/Bs'

function Register() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box login">
          <h2>Registration</h2>
          <form action="login.php" method="post">
              <div className="input-box">
                  <span className="icon"><BsPersonFill /></span>
                  <input type="text" name="user" id="user" required/>
                  <label>Username</label>
              </div>
              <div className="input-box">
                  <span className="icon"><MdMail/></span>
                  <input type="email" name="email" id="email" required/>
                  <label>Email</label>
              </div>
              <div className="input-box">
                  <span className="icon"><FaLock/></span>
                  <input type="password" name="pass" id="pass" required/>
                  <label for="">Password</label>
              </div>
              <div className="remember-forgot">
                  <label for=""><input type="checkbox"/>I agree to the terms & conditions</label>
              </div>
              <button type="submit" name="submit" className="btn">Register</button>
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