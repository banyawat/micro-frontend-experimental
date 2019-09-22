import React from 'react'

class Navbar extends React.Component {
  state = {}

  componentDidMount = () => {
    const tokenDetail = localStorage.getItem('tokenDetail')
    this.setState({
      tokenDetail
    })
  }

  render(){
    const {
      tokenDetail
    } = this.state

    const isLogin = tokenDetail!==undefined && tokenDetail.token!==undefined
    return (
      <div className={isLogin?"navbar":""}>
        {isLogin && <a href="/">NETFLUX</a>}
      </div>
    )
  }
}
export default Navbar