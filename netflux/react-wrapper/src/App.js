import React from 'react';
import Navbar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contatiner">
        <thumbnail-el></thumbnail-el>
      </div>
    </div>
  );
}

export default App;
