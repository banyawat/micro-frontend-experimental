import React from 'react'
import { withRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.microRef = React.createRef();
  }

  componentDidMount() {
    this.microRef.current.addEventListener('onLogin', this.onLogin);
  }
  
  componentWillUnmount() {
    this.microRef.current.removeEventListener('onLogin', this.onLogin);
  }

  onLogin = (event) => {
    console.log('Have recieved event:',event)
    localStorage.setItem('tokenDetail', event.detail.token)
    if(event.detail.token!==undefined) {
        this.props.history.push('/')
    }
  }

  render(){
    return (
      <div className="login">
        <MainLayout>
            <micro-login ref={this.microRef}/>
        </MainLayout>
      </div>
    )
  }
}

export default withRouter(Login)