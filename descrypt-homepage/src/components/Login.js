import React from 'react';
import './main-page/App.css';
import logo from './logo.png';

const Login = (props) => {
    const {email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin,
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
     } = props;
    return (
        <div> 
          <ul>
        <li><a class="active" href="#home">Descrypt.</a></li>
        <li style={{float: 'right'}}><a href="#about">Sign up</a></li>
        <li style={{float: 'right'}}><a href="#contact">Login</a></li>
        <li style={{float: 'right'}}><a href="#news">About</a></li>
      </ul>
      <img src={logo} alt="Logo" />
      <h1 align="center" style={{fontSize:68}}>Descrypt.</h1>
                <br></br>
            <h2 align="center">A comprehensive cheatsheet development interface</h2>
        
      
        <section className="login">
            <div className="loginContainer">
                <input 
                type='text' 
                placeholder="Enter your email..."
                autoFocus 
                required value={email} 
                onChange={e => setEmail(e.target.value)}
                ></input>
                <p className="errorMsg">{emailError}</p>
                <input 
                type="password" 
                placeholder="Enter your password..."
                required 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p style={{fontWeight:"bold"}}>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p style={{fontWeight:"bold"}}>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login



