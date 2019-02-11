import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

/**
 * - TODO -
 * - RENDER A HOME PAGE WITH WOW, DIABLO, AND STARTCRAFT ICON CARDS
 * - DISABLE THE DIABLO AND STARTCRAFT ONES FOR NOW
 * - SETUP THE WOW LANDING PAGE
 * - PULL IN SOME DATA FROM THE BACKEND API 
 * - INSTALL SASS TO THE PROJECT - COMPLETED
 * - ^ ALL OF THE ABOVE AND WE SHOULD HAVE A LITTLE MORE FILE STRUCTURE
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
