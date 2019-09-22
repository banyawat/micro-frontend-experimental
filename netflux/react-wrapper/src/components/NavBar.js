import React from 'react'

class Navbar extends React.Component {
  state = {
    tokenDetail: ''
  }

  componentDidMount = () => {
    const tokenDetail = localStorage.getItem('tokenDetail')
    console.log(tokenDetail);
    this.setState({
      tokenDetail
    })
  }

  logout = () => {
    localStorage.removeItem('tokenDetail')
    this.setState({
      tokenDetail: ''
    })
  }

  render(){
    const {
      tokenDetail
    } = this.state

    return (
      <div className="navbar">
        <a href="/">NETFLUX</a>
        {
          (this.state.tokenDetail !== '') ? 
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
export default Navbar