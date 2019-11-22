import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Wrapper from '../../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {lobbyInputChange, lobbyHostData, lobbyUserJoin, lobbyUserSet} from "../../redux/actions/actions";

import API from "../../utils/api/API";
import socket from "../../utils/api/socket";

class Lobby extends Component {
    constructor(){
        super();
    }
    componentDidMount = () => {
        API.findLobby(this.props.match.params.lobbyId).then(re => {
            if(this.props.userData.userId === re.data.hostId){
                console.log(re.data);
                socket.lobbyHost(re.data);
                this.props.lobbyHostData(re.data);
                this.props.lobbyUserSet(re.data);
            }
            else {
                socket.joinLobby(re.data, this.props.userData);
                this.props.lobbyUserSet(re.data);
                const user = {
                    userId : this.props.userData.userId,
                    userName: this.props.userData.userName,
                    userThumbnail: this.props.userData.userThumbnail
                }
                this.findLobbyUsers(user);                  
            }
        }); 
    }
    componentDidUpdate = () => {
        
    }
    componentWillUnmount = () => {

    }
    findLobbyUsers = (user) => {
        let activeUsers = this.props.lobbyData.activeUsers;
        let idArr = activeUsers.map(user => {
            return user.userId;
        });
        if(idArr.indexOf(user.userId) === -1){
            API.updateLobby(this.props.match.params.lobbyId, user).then(putData => {
                console.log("Here's what we got back");
                console.log(putData);
                this.props.lobbyUserJoin(putData.data);
            })
        }  

    }
    processActiveUsers = (user) => {
        let activeUsers = this.props.lobbyData.activeUsers;
        let idArr = activeUsers.map(user => {
            return user.userId;
        });
        if(idArr.indexOf(user.userId) === -1){
            activeUsers.push(user);
        }
        this.props.lobbyUserJoin(activeUsers);

    }
    joinListener = () => {
        socket.listenJoin(callback => {
            const user = {
                userId: callback.userData.userId,
                userName: callback.userData.userName,
                userThumbnail: callback.userData.userThumbnail
            }
            this.processActiveUsers(user);
        });
            
    }

    render(){
        this.joinListener();
        return(
            <Wrapper>
                <div className="lobbyRoom">
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <div className="playerZone lobbybox">
                                {this.props.lobbyData.activeUsers.map(user => (
                                    <div className="player" key={user.userId}>
                                        <img src={user.userThumbnail} alt="profile" className="profileThumbnail"></img>
                                        <p><strong>{user.userName}</strong></p>
                                    </div>
                                ))}
                        
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                        <h1>{this.props.lobbyData.lobbyName}</h1>
                            <TextField
                                multiline={true}
                                rows={10}
                                fullWidth={true}
                                name="meassages"
                                value={this.props.lobbyData.chat.messages}
                                id="lobbyPassword"
                                variant="filled"
                                color="secondary"
                                onChange={this.onTextChange}
                                className="chatBox"
                                InputProps={{
                                    readOnly: true,
                                  }}
                            />
                       
                        </Grid>
                    </Grid>
                </div>
            </Wrapper>
        )
    }
}
const mapStateToProps = state => {
    return { 
        lobbyData: state.lobbyManipulation.lobbyData,
        userData: state.formManipulation.userData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      lobbyInputChange,
      lobbyHostData,
      lobbyUserJoin,
      lobbyUserSet
    },
    dispatch
  );

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lobby);