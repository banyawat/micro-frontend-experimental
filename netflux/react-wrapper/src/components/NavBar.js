import React from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    tokenDetail: ''
  }

  componentDidMount () {
    this.checkSession()
    this.unlisten = this.props.history.listen(() => {
      this.checkSession()
    })
  }

  componentWillUnmount () {
    this.unlisten()
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
      if (this.props.match.path !== '/login') {
        this.props.history.replace('/login')
      }
    }
  }

  logout = async () => {
    localStorage.removeItem('tokenDetail')
    this.unlisten()
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
              className="ant-btn ant-btn-primary logout"
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