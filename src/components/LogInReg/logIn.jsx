import {useState} from 'react'
import './logreg.css'
import { MdMail } from 'react-icons/Md'
import { FaLock } from 'react-icons/Fa'
import { auth } from '../../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

function logIn() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch =useDispatch();
    const loginToApp= async(e)=>{
        e.preventDefault();

        await signInWithEmailAndPassword(auth,email,password).then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
            alert('Login')
        }).catch((error)=>alert(error));
    };
    
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box login">
            <h2>Login</h2>
            <div>
                <div className="input-box">
                    <span className="icon"><MdMail /></span>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} id='em' required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FaLock /></span>
                    <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} id='pw' required/>
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label for=""><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="btn" onClick={loginToApp}>Login</button>
                <div className="login-register">
                    <p>Don't have an account?<a href="./Register" class="register-link">Register</a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default logIn