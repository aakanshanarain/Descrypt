import React from 'react';
import logo from './logo.png';

function Header() {
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
        </div>
    }

    export default Header;