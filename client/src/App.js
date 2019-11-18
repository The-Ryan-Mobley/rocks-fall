
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin, saveSession} from "./redux/actions/actions";

import Login from './pages/login/index';
import CreateAccount from './pages/createAccount/index';
import HomePage from './pages/homePage';
import './App.css';

//const App = () => {
  const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
      test: state.formManipulation.ryanStuff,
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveSession,
      userInputChange,
      userLogin
    },
    dispatch
  );
class App extends Component {
  constructor(){
    super();
  }
  componentDidMount = () => {
    // console.log("grabbing local data");
    const sessionData = localStorage.getItem( "userData" ) || false;
    console.log(sessionData);
        if(sessionData) {
            let localData = JSON.parse(sessionData)
            console.table(localData);
            debugger
            this.props.saveSession(localData); 
        }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
