import React from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    tokenDetail: ''
  }

  componentDidMount () {
    this.props.history.listen(() => {
      this.checkSession()
    })
  }

  checkSession = () => {
    const tokenDetail = localStorage.getItem('tokenDetail')
    if(tokenDetail && tokenDetail !== '') {
      this.setState({
        tokenDetail
      })
    } else {
      this.setState({
        tokenDetail: ''
      })
    }
  }

  logout = async () => {
    localStorage.removeItem('tokenDetail')
    this.props.history.replace('/login')
  }

  render(){
    const {
      tokenDetail
    } = this.state

    return (
      <div className="navbar">
        <a href="/">NETFLUX</a>
        {
          (tokenDetail !== '') ? 
          <div>
            Banyawat
            <button
              style={{
                color: 'black'
              }}
              onClick={this.logout}
            >
              Logout
            </button>
          </div>
        : ''}
      </div>
    )
  }
}
export default withRouter(Navbar)