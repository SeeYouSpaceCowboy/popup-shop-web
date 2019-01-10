import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import Dashboard from './containers/Dashboard'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () => loggedIn() ? <Dashboard/> : <Redirect to="/login"/> }/>
      <Route path='/dashboard' component={ () => loggedIn() ? <Dashboard/> : <Redirect to="/login"/> }/>
      <Route path='/signup' render={ () => loggedIn() ? <Redirect to="/dashboard"/> : <Signup/> }/>
      <Route path='/login' render={ () => loggedIn() ? <Redirect to="/dashboard"/> : <Login/> }/>
      <Route path='/logout' component={ () => logout() }/>
      <Route path='/tests' component={ () => <div>Testing Path</div> }/>
    </Switch>
  </BrowserRouter>
)

const loggedIn = () => {
  // return !!sessionStorage['userId']
  return true
}

function logout() {
  if(sessionStorage['userId']) sessionStorage.removeItem('userId')

  return <Redirect to="/login"/>
}
