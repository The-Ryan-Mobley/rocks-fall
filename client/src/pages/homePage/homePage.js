import React, { Component } from "react";

import Wrapper from '../../components/wrapper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles'

import MakeLobby from "../../components/makeLobby";
import JoinLobby from "../../components/joinLobby";
import SheetModal from "../../components/sheetModal";
import CharacterList from "../../components/characterList";

import API from "../../utils/api/API";

export default class HomePage extends Component{
    state = {
        createModal: false,
        joinModal: false,
        sheetModal: false
    }
    componentDidMount = () => {
        if(this.props.userData.userId) {
            this.findCharacterList(this.props.userData.userId);
        }
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
            this.props.closeModals();
  
        });
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
                                    disabled={!this.props.userData.currentCharacter} 
                                    onClick={this.handleModal.bind(this)}
                                    >
                                        Join Lobby
                                    </Button>
                            </Grid>
                        ) : (<p>Login to play</p>)}
                    </Grid>
                    
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        <h1>Chat</h1>
                        <Button name="sheetModal" value="newCharacter" className="modalButton shaded" onClick={this.handleModal.bind(this)}>CreateCharacter</Button>
                        
                    </Grid>
                    <Grid item xs={2}>
                        <CharacterList/>
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