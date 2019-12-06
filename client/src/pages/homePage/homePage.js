import React, { Component } from "react";

import Wrapper from '../../components/wrapper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Input from '@material-ui/core/Input';

import MakeLobby from "../../components/makeLobby";
import JoinLobby from "../../components/joinLobby";
import SheetModal from "../../components/sheetModal";
import CharacterList from "../../components/characterList";

import API from "../../utils/api/API";
import socket from "../../utils/api/socket";

export default class HomePage extends Component{
    state = {
        createModal: false,
        joinModal: false,
        sheetModal: false
    }
    componentDidMount = () => {
        if(this.props.userData.userId) {
            socket.joinGlobal(this.props.userData);
            this.globalListener();
            this.findCharacterList(this.props.userData.userId);
        }
    }
    componentWillUnmount = () => {
        socket.leaveGlobal(this.props.userData);

    }
    handleModal = (event) => {
        event.preventDefault();
        let value = undefined;
        switch(event.currentTarget.name) {
            case "createModal" : {
                value = !this.props.modalData.createModal;
                this.props.swapModalBool("createModal", value);
                break;
            }
            case "joinModal" : {
                value = !this.props.modalData.joinModal;
                this.props.swapModalBool("joinModal", value);
                break;
            }
            case "sheetModal" : {
                if(event.currentTarget.value === "newCharacter") {
                    this.props.setBlankCharacter();
                    value = !this.props.modalData.newCharacter;
                    this.props.swapModalBool("newCharacter", value);
                }
                value = !this.props.modalData.sheetModal;
                this.props.swapModalBool("sheetModal", value);
                break;
            }
            default: {
                this.props.closeModals();
                break;
            }
        }
        
        
    };
    findCharacterList = (userId) => {
        if(this.props.userData.characterList.length === 0) {
            this.props.swapModalBool("loadingList", true);
          }
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
                    characterList.push(CharacterData);
                }
                
            });
            this.props.userInputChange( "characterList" , characterList );
            this.props.swapModalBool("loadingList", false);
  
        });
    }
    postMessage = () => {
        const msg ={
            key: Math.floor(Math.random() * 1000000),
            body: `${this.props.userData.userName}: ${this.props.modalData.newGlobalMessage}`
        }
        
        
        this.props.swapModalBool("newGlobalMessage", "");
        let globalChat = this.props.modalData.globalChat;
        globalChat.push(msg);
        this.props.swapModalBool("globalChat", globalChat);
        socket.postMessage("Global", msg);
    }
    blurMessage = event => {
        const {name, value} = event.target;
        this.props.swapModalBool(name, value);
    }
    globalListener = () => {
        socket.listenChat(re => {
            const msg ={
                key: Math.floor(Math.random() * 1000000),
                body: re
            }
            let globalChat = this.props.modalData.globalChat;
            let keys = globalChat.map(message => {
                return message.key;
            });
            
            if((keys.indexOf(msg.key) === -1)) {
                globalChat.push(msg);
                this.props.swapModalBool("globalChat", globalChat);
            }
        })

    }
    render(){
        return(
            <Wrapper>
                <Grid item container xs={12} spacing={3}>
                    <div className="homeBody">
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        <h1>Play!</h1>
                    </Grid>
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        {this.props.userData.userId ? (
                            <Grid item container direction="row" alignItems="center" justify="center" spacing={5}>
                                <Button name="createModal" className="modalButton shaded" onClick={this.handleModal.bind(this)}>Make Lobby</Button>
                                <Button 
                                    name="joinModal"
                                    className="modalButton shaded"
                                    disabled={!this.props.userData.currentCharacter._id} 
                                    onClick={this.handleModal.bind(this)}
                                    >
                                        {this.props.userData.currentCharacter._id ? ("Join Lobby") : ("No Character Selected")}
                                    </Button>
                            </Grid>
                        ) : (<p className="notLogged">Login to play</p>)}
                    </Grid>
                    
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        
                        
                    </Grid>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className="characters">
                        <Button name="sheetModal" value="newCharacter" className="newButton modalButton shaded" onClick={this.handleModal.bind(this)}>CreateCharacter</Button>
                        <CharacterList className="shaded"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <h1 className="centered">Chat</h1>
                            <div className="chatBody shaded">
                                {this.props.modalData.globalChat.map((msg, index) => (
                                    <p key={index}>{msg.body.body ? (msg.body.body) : (msg.body)}</p>
                                ))}

                            </div>
                        <Input
                            name="newGlobalMessage"
                            value={this.props.modalData.newGlobalMessage}
                            id="filled-required"
                            fullWidth={true}
                            placeholder="Type Message Here"
                            variant="filled"
                            color="secondary"
                            className="chatBox" 
                            onChange={this.blurMessage}
                        />
                        <Button variant="contained" className="createButton" 
                            onClick={this.postMessage} 
                            disabled={!(this.props.modalData.newGlobalMessage)}>
                               post
                        </Button>
                    </Grid>
                    </Grid>
                    
                    


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
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        name="createModal"
                        open={this.props.modalData.createModal}
                        onClose={this.handleModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 100,
                        }}
                    >
                        <Fade in={this.props.modalData.createModal}>
                            <MakeLobby />
                        </Fade>
                    </Modal>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        name="joinModal"
                        open={this.props.modalData.joinModal}
                        onClose={this.handleModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                    >
                        <Fade in={this.props.modalData.joinModal}>
                            <JoinLobby />
                        </Fade>

                    </Modal>
                    </div>
                </Grid>
            </Wrapper>
        );
    }
}