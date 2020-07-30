import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/header.component';
import Register from './components/Register/register';
function App() {
  return (
    <div className="App">
      <Header /> 
      <Register /> 
    </div>
  );
}

export default App;
