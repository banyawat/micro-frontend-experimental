import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.dropdownRef = React.createRef();
  }
  
  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>')
    console.log(this.dropdownRef)
    console.log(this.dropdownRef.current)
    this.dropdownRef.current.addEventListener('onLogin', (e) => {
      console.log('=============')
      console.log(e)
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <x-search ref={this.dropdownRef} name='fluk'/>
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
