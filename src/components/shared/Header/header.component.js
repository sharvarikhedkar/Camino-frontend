import React from 'react';
import Logo from './Logo.jpeg';
import './header.css';

function Header(props){
    return (
        <div style={{width:'100%'}} className = "header">
            <div  style={{width:'95%', float:'left'}}> 
                <img className="logo" style ={{height: '50px', width: '150px', float:'left'}}src = {Logo} alt = 'logo'>
                </img>
            </div>

            <div>
                <button className="language" style={{float:'right'}}>ESPAÑOL</button>
            </div>  
        </div>
    )
}

export default Header;