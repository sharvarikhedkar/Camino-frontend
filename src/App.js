import React from 'react';
import './App.css';
import Header from './components/shared/Header/header.component';
import Register from './components/Register/register';
import RegisterEspanol from './components/Register/registerEspanol';
import Help_header from './components/Help_header/helpHeader';
import Step from './components/step/step';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currLang: 'es'
    }
  }

  onLanguageChange = (language) =>{
    this.setState( { currLang: language } )
}

  render(){
  return (
    <div className="App">

      <Header onLanguageChange = {this.onLanguageChange}/> 
      {this.state.currLang ==='en'
          ? <div>
              <Help_header />
              <Step />
              <RegisterEspanol />
            </div>
          : <div>
              <Help_header />
              <Step />
              <Register />
            </div>
        } 
      
    </div>
    );
  }
}

export default App;
