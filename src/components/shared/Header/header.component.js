import React from 'react';
import Logo from './Logo.jpeg';
import './header.css';

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            language:'en'
        }
    }

    click = () =>{
        const lang = this.state.language;
        const lang2 = "en";
        var n = lang.localeCompare(lang2)

        if(n === 0){
            this.setState({language:'es'})
            this.props.onLanguageChange(this.state.language);
        }else{
            this.setState({language:'en'})
            this.props.onLanguageChange(this.state.language);
        }
    }

    render(){
        return (
            <div style={{width:'100%'}} className = "header">
                <div  style={{width:'95%', float:'left'}}> 
                    <img className="logo" style ={{height: '50px', width: '150px', float:'left'}}src = {Logo} alt = 'logo'>
                    </img>
                </div>

                <div>
                    {
                    this.state.language === 'en' 
                    ?<button className="language" style={{float:'right'}} onClick={this.click}>ESPANOL</button>
                    :<button className="language" style={{float:'right'}} onClick={this.click}>ENGLISH</button>
                    }                
                </div> 
            </div>
        )
    }
}

export default Header;