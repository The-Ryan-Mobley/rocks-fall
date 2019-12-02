
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import socket from "./utils/api/socket";


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin, saveSession} from "./redux/actions/actions";

import Login from './pages/login/index';
import CreateAccount from './pages/createAccount/index';
import HomePage from './pages/homePage/index';
import Lobby from "./pages/lobby/index";
import UserPage from "./pages/userPage/index";

import API from "./utils/api/API";
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
  componentWillMount = () => { //sets session data from local storage
    const sessionData = localStorage.getItem( "userData" ) || false;
        if(sessionData) {
            let localData = JSON.parse(sessionData)
            this.props.saveSession(localData); 
            if(localData.userId.length) {
              this.findCharacterList(localData.userId);
            }
        }
    socket.socketEmmissions();

  }
  findCharacterList = (userId) => {
      API.userCharacterList(userId).then(result => {
          let characterList = this.props.userData.characterList;
          characterList=[];
          result.data.forEach(character => {
              if(characterList.indexOf(character) === -1) {
                  const {_id, characterName, level, playerClass} = character;
                  const CharacterData = {
                      _id,
                      characterName,
                      level,
                      playerClass
                  }
                  console.table(CharacterData);
                  characterList.push(CharacterData);
              }
              this.props.userInputChange( "characterList" , characterList );
          })

      });
  }
  
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/createAccount" component={CreateAccount}/>
          <Route exact path="/profile/:userName" component={UserPage}/>
          <Route exact path="/lobby/:lobbyId" component={Lobby} />
        </Switch>
      </Router>
      
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
