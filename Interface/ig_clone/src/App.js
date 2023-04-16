import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Signup from './components/signup';
import Login from './components/Login';
import Homepage from './components/homepage';
import './App.css'

class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
        <Route exact path='/accounts/signup' component={Signup} />
          <Route path='/accounts/login' component={Login} />
          <Route path='/homepage' component={Homepage} />
          <Redirect to='/accounts/signup' />
        </Switch>
      </Router>
    );
  }
}
 
export default App;