import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/header/home.png";

import { auth } from "../../firebase";
function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) =>{
        e.preventDefault();//prevents the refresh
        //do login logic...
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in, redirect to home page...
            console.log('success login');
            navigate("/", { replace: true });
            
        })
        .catch( e => alert(e.message));
    }
    return(
    <div className="login">
        <div className="logoContainer">
          <img
          className="logoImg"
          src={Logo}
          alt=""
          />
          <h2 className="logoText">Estatery</h2>
        </div>
        <div className="loginContainer">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange = {(event)=>setPassword(event.target.value)} type="password"/>
                <button onClick={login} className="loginSigninButton" type="submit">Login</button>
            </form>
            <p>
                By signing in you agree to Estatery's <span>Terms and Conditions</span>
            </p>
            <p className="loginQn">{`Dont't have an aacount? `}  
            <Link to="/signup">
              <span className="loginQnlink">Sign up</span>
            </Link>
            </p>
        </div>
    </div>
    )
}
export default Login;