import React from 'react';
import Navbar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
        <script src="http://localhost:5002/main.js"></script>
      </header>
      <Navbar />
      <div className="contatiner">
        test
      </div>
    </div>
  );
}

export default App;
