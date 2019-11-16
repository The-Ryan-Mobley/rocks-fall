
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/login';
import CreateAccount from './pages/createAccount/index';
import HomePage from './pages/homePage';
import './App.css';

//const App = () => {
class App extends Component {
  constructor(){
    super();
  }
  
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/createAccount" component={CreateAccount}/>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
