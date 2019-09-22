import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.login = React.createRef();
  }
  componentDidMount() {
    this.login.current.addEventListener("onLogin", this.onLogin);
  }

  componentWillUnmount() {
    this.login.current.removeEventListener("onLogin", this.onLogin);
  }

  onLogin = (event) => {
    console.log("onLogin Enter:", event);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <micro-login ref={this.login} name='fluk'/>
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
