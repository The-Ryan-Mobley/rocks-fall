import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Wrapper from '../../components/wrapper';
import SheetModal from "../../components/sheetModal";
import DiceBlock from "../../components/diceBlock";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import API from "../../utils/api/API";
import socket from "../../utils/api/socket";

export default class Lobby extends Component {
    state = {
        messageKey: 0
    }
    componentDidMount = () => {
        this.messageListener();
        this.leaveListener();
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
                    userThumbnail: this.props.userData.userThumbnail,
                    currentCharacter: this.props.userData.currentCharacter
                }
                this.findLobbyUsers(user);                  
            }
        }); 
    }
    componentDidUpdate = () => {
        
        
        
    }
    componentWillUnmount = () => {
        if(this.props.userData.userId === this.props.lobbyData.hostId){
            API.deleteLobby(this.props.lobbyData.lobbyId);

        } else {
            this.removeLobbyUsers();
            socket.leaveLobby(this.props.lobbyData.lobbyName, this.props.userData)
        }
        //host calls DELETE for lobby
        //user updates active users and emits

    }
    removeLobbyUsers = () => {
        let users = this.props.lobbyData.activeUsers;
        let userId = this.props.userData.userId;
        let activeUsers = users.filter(user => {
            if(user.userId !== userId){
                return user;
            }
        });
        this.props.lobbyUserJoin(activeUsers);
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
        let msg ={
            key: Math.floor(Math.random() * 1000000),
            body: `${this.props.userData.userName}: ${this.props.lobbyData.chat.newMessage}`
        }
        socket.postMessage(this.props.lobbyData.lobbyName, msg);
        
        this.props.lobbyMessageReset();
        let messages = this.props.lobbyData.chat.messages;
        messages.push(msg);
        this.props.lobbyMessageAdd(messages);
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
    leaveListener = () => {
        socket.listenLeave(re => {
            let users = this.props.lobbyData.activeUsers;
            let activeUsers = users.filter( user => {
                if(user.userId !== re.userId) {
                    return user;
                }
            });
            this.props.lobbyUserJoin(activeUsers);

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
                userThumbnail: callback.userData.userThumbnail,
                currentCharacter: callback.userData.currentCharacter
            }
            console.log(user)
            this.processActiveUsers(user);
        });
    }
    onTextChange = (event) => {
        this.props.lobbyMessageChange(event.target.name, event.target.value);

    }
    handleModal = event => {
        const { name, value } = event.currentTarget;
        let modalFlag = undefined;

        switch(name) {
            case "sheetModal" : {
                API.findCharacter(value).then( result => {
                    modalFlag = !this.props.modalData.sheetModal;
                    this.props.setCharacterData(result.data[0]);
                    this.props.swapModalBool("sheetModal", modalFlag);   
                });
                break;  
            }
            default: {
                this.props.closeModals();
                break;
            }
        }
    }
    

    render(){
        this.joinListener();
        
        return(
            <Wrapper>
                <div className="lobbyRoom">
                    <Grid container spacing={1}>
                        <Grid xs={12} alignItems="center" justify="center" spacing={1}>
                            <h1 className="centeredHeading">{this.props.lobbyData.lobbyName}</h1>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="playerZone lobbybox">
                                {this.props.lobbyData.activeUsers.map(user => (
                                    <div className="player" key={user.userId}>
                                        <img src={user.userThumbnail} alt="profile" className="profileThumbnail"></img>
                                        <p><strong>{user.userName}</strong></p>
                                        <p>{user.currentCharacter.characterName}</p>
                                        <Button value={user.currentCharacter._id} name="sheetModal" onClick={this.handleModal}>View</Button>
                                    </div>
                                ))}
                        
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <DiceBlock/>
                            <div className="chatBody">
                                {this.props.lobbyData.chat.messages.map(msg => (
                                    <p>{msg.body.body ? (msg.body.body) : (msg.body)}</p>
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

                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className="sheetModal"
                                name="sheetModal"
                                open={this.props.modalData.sheetModal}
                                onClose={this.handleModal}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                  timeout: 100,
                                }}
                            >
                                <Fade in={this.props.modalData.sheetModal}>
                                    <SheetModal />
                                </Fade>
                            </Modal>
                            
                       
                        </Grid>
                    </Grid>
                </div>
            </Wrapper>
        )
    }
}
