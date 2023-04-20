import '../LogInReg/logreg.css';
import { FaLock } from 'react-icons/Fa'
import { Navigate } from "react-router-dom";
import {useState} from 'react'


function admin() {

    const [aclicked,asetClicked] = useState(false);

    function auth(){
        var password = document.getElementById("password").value;
         if(password=="admin123"){
            asetClicked(true);
            alert("Welcome Manager");
        }
        else{
         alert("Incorrect Password");
         return;
        }
       }
  return (
    <div className="container">
         <div className="wrapper">
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <h1>Admin</h1>
                </div>
                <div className="input-box">
                    <span className="icon"><FaLock /></span>
                    <input type="password" id='password' required/>
                    <label for="">Password</label>
                </div>
                <div className="remember-forgot">
                    <label for=""><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="btn" onClick={() => auth()}>Login</button>
            </form>
        </div>
        {aclicked ? <Navigate to="/Dashboard" replace={true} />:'' }
    </div>
    </div>
  )
}

export default admin