import React from 'react';
import logo from './my-logo.svg';
import './App.css';
import Navigation from './Navigation.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Linneas Picture Gallery
        </p>
      </header>
      <div className="Main-container">
        <Navigation/>
      
      </div>
    </div>
  );
}



export default App;
