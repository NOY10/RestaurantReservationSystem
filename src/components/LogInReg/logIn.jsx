import {useState} from 'react'
import './logreg.css'
import { MdMail } from 'react-icons/Md'
import { FaLock } from 'react-icons/Fa'
import { Navigate } from "react-router-dom";

function logIn() {

    const [clicked,setClicked] = useState(false);

    function user(){
        
        if(document.getElementById("em").value=="test@gmail.com" && document.getElementById("pw").value=="pw"){
            alert("Login Successful")
            setClicked(true);
        }
        else{
            alert("Incorrect username or password");
        }
    }
    
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><MdMail /></span>
                    <input type="email" id='em' required/>
                    <label for="">Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FaLock /></span>
                    <input type="password" id='pw' required/>
                    <label for="">Password</label>
                </div>
                <div className="remember-forgot">
                    <label for=""><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="btn" onClick={() => user()}>Login</button>
                <div className="login-register">
                    <p>Don't have an account?<a href="./register" class="register-link">Register</a></p>
                    <p><a href="./admin" class="register-link">Login as admin</a></p>
                </div>
            </form>
        </div>
        {clicked ? <Navigate to="./Homepage" replace={true} />:'' }
    </div>
    </div>
  )
}

export default logIn