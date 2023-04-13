import React from 'react'
import './logreg.css'
import { MdMail } from 'react-icons/Md'
import { FaLock } from 'react-icons/Fa'

function logIn() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><MdMail /></span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FaLock /></span>
                    <input type="password" required/>
                    <label for="">Password</label>
                </div>
                <div className="remember-forgot">
                    <label for=""><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>Don't have an account?<a href="./register" class="register-link">Register</a></p>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default logIn