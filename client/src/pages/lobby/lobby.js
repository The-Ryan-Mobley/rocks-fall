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
import {lobbyInputChange, lobbyHostData, lobbyUserJoin, lobbyUserSet, lobbyMessageReset, lobbyMessageAdd, lobbyMessageChange} from "../../redux/actions/actions";

import API from "../../utils/api/API";
import socket from "../../utils/api/socket";

class Lobby extends Component {
    constructor(){
        super();
    }
    state = {
        messageKey: 0
    }
    componentDidMount = () => {
        this.messageListener();
        API.findLobby(this.props.match.params.lobbyId).then(re => {
            if(this.props.userData.userId === re.data.hostId){
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
        //host calls DELETE for lobby
        //user updates active users and emits

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
    postMessage = () => {
        socket.postMessage(this.props.lobbyData.lobbyName, this.props.lobbyData.chat.newMessage);
        let msg ={
            key: Math.floor(Math.random() * 1000000),
            body: this.props.lobbyData.chat.newMessage
        }
        this.props.lobbyMessageReset();
        let messages = this.props.lobbyData.chat.messages;
        messages.push(msg);
        this.props.lobbyMessageAdd(messages);
        //need to set newmessage to ""
    }
    messageListener = () => {
        socket.listenChat(re => {
            
            let msg ={
                key: Math.floor(Math.random() * 1000000),
                body: re
            }
            console.log(msg);
            let messages = this.props.lobbyData.chat.messages;
            let keys = messages.map(message => {
                return message.key;
            });
            
            if((keys.indexOf(msg.key) === -1)) {
                console.log("keys");
                console.log(keys);
                messages.push(msg);
                this.props.lobbyMessageAdd(messages);
            }
        })
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
    onTextChange = (event) => {
        this.props.lobbyMessageChange(event.target.name, event.target.value);

    }

    render(){
        this.joinListener();
        
        return(
            <Wrapper>
                <div className="lobbyRoom">
                    <Grid container spacing={1}>
                    <h1>{this.props.lobbyData.lobbyName}</h1>
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
                            <div className="chatBody">
                                {this.props.lobbyData.chat.messages.map(msg => (
                                    <p>{msg.body}</p>
                                ))}

                            </div>
                        
                            <Input
                                name="newMessage"
                                value={this.props.lobbyData.chat.newMessage}
                                id="filled-required"
                                fullWidth="true"
                                placeholder="username*"
                                variant="filled"
                                color="secondary"
                                className="chatBox" 
                                onChange={this.onTextChange}
                            />
                            <Button variant="contained" className="createButton" 
                                onClick={this.postMessage} 
                                disabled={!(this.props.lobbyData.chat.newMessage)}>
                                    post
                            </Button>
                            
                       
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
      lobbyUserSet,
      lobbyMessageReset,
      lobbyMessageAdd,
      lobbyMessageChange
    },
    dispatch
  );

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lobby);