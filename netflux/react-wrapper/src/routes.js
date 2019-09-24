import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Main from './screens/Main'
import Login from './screens/Login'
import Theater from './screens/Theater'

const Routes = () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/theater/:id" component={Theater} />
    {/* <Route path="/some/otherpage" component={SomeOtherPage} /> */}
  </Router>
)

export default Routes