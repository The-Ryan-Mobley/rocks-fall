
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import { useDispatch, useSelector } from "react-redux";
import logo from './logo.svg';
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
            <Route exact path="/" component={Login}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
