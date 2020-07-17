import React from 'react';
import Heading from './Heading';
import StateHandler from './StateHandler';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
        <StateHandler />
    </div>
  );
}

export default App;