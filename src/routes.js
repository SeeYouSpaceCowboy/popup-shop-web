import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

export default (
  <BrowserRouter>
    <Switch id='routes'>

    </Switch>
  </BrowserRouter>
)

const loggedIn = () => !!sessionStorage['userId']

function logout() {
  if(sessionStorage['userId']) sessionStorage.removeItem('userId')

  return <Redirect to="/login"/>
}

// <Route exact path='/' render={ () => loggedIn() ? <ChatContainer/> : <Redirect to="/login"/> }/>
// <Route path='/signup' render={ () => loggedIn() ? <Redirect to="/chats"/> : <Signup/> }/>
// <Route path='/login' render={ () => loggedIn() ? <Redirect to="/chats"/> : <Login/> }/>
// <Route path='/chats' component={ () => loggedIn() ? <ChatContainer/> : <Redirect to="/login"/> }/>
// <Route path='/logout' component={ () => logout() }/>
// <Route path='/tests' component={ () => <div>Testing Path</div> }/>
