import React from 'react';
import './App.css';
import Header from './components/shared/Header/header.component';
import Register from './components/Register/register';
import Help_header from './components/Help_header/help_header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Help_header/>
      <Register /> 
      
    </div>
  );
}

export default App;
