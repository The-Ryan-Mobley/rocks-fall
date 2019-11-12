
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            
          </Switch>
  
        </div>
      </Router>
      
    );
  }
}

export default App;
