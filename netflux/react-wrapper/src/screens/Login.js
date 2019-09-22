import React from 'react'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  state = {
  }

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
    console.log('Have recieved event:',event)
    localStorage.setItem('tokenDetail', event.detail.token)
    if(event.detail.token!==undefined) {
        this.props.history.push('/')
    }
    this.setState({
      tokenDetail:event.detail
    })
  }

  render(){
    return (
      <div className="login">
        <micro-login ref={this.login}/>
      </div>
    )
  }
}
export default withRouter(Login)