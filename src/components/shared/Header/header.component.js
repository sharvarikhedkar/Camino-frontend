import React from 'react';
import Logo from './Logo.jpeg';
import './header.css';

function Header(props){
    return (
        <div className = "header">
            <img className="logo" style ={{height: '50px', width: '150px', align:'left'}}src = {Logo} alt = 'logo'>
            </img>
               
        </div>
    )
}

export default Header;