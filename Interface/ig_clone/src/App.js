import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Signup from './components/signup';
import Login from './components/Login';
import Lockpage from './components/Lockpage';
import Homepage from './components/homepage';
import './App.css'

class App extends Component {
  constructor(props) {
  super(props);

      this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() { 
    const { loading } = this.state;
    return (
      <Router>
        <Switch>
        {loading ? <Lockpage /> : <Signup />}
        <Route exact path='/instagram/loading' component={Lockpage} />
          <Route path='/accounts/login' component={Login} />
          <Route path='/homepage' component={Homepage} />
          <Redirect to='/accounts/signup' />
        </Switch>
      </Router>
    );
  }
}
 
export default App;


class  extends Component {
  state = {  } 
  render() { 
    return ();
  }
}
 
export default ;