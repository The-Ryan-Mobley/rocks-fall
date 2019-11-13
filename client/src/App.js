
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import Login from './pages/login';
import CreateAccount from './pages/createAccount';
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
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/createAccount" component={CreateAccount}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
