import React from 'react'
import { withRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import MicroWarper from '../components/MicroWarper'

class Login extends React.Component {
  state = {
  }

  constructor(props) {
    super(props)
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
          <MicroWarper test1='test1' test2={2} test3={true} onLogin={this.onLogin}>
            <micro-login/>
          </MicroWarper>
        </MainLayout>
      </div>
    )
  }
}

export default withRouter(Login)