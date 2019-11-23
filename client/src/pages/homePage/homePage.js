import React, { Component } from "react";
import Wrapper from '../../components/wrapper';
// import CharacterSheet from "../../components/characterSheet";
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles'

import MakeLobby from "../../components/makeLobby";
import JoinLobby from "../../components/joinLobby";


export default class HomePage extends Component{
    state = {
        createModal: false,
        joinModal: false
    }
    
    handleOpenCreate = (event) => {
        event.preventDefault();
        this.setState({createModal: true});
    };
    
    handleCloseCreate = (event) => {
        event.preventDefault();
        this.setState({createModal: false});
    };
    handleOpenJoin = (event) => {
        event.preventDefault();
        this.setState({joinModal: true});
    };
    
    handleCloseJoin = (event) => {
        event.preventDefault();
        this.setState({joinModal: false});
    };
    render(){
        return(
            <Wrapper>
                <Grid container xs={12} spacing={3}>
                    <div className="homeBody">
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        <h1>Play!</h1>
                    </Grid>
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        {this.props.userData.userId ? (
                            <Grid item container direction="row" alignItems="center" justify="center" spacing={5}>
                                <Button className="modalButton shaded" onClick={this.handleOpenCreate}>Make Lobby</Button>
                                <Button className="modalButton shaded" onClick={this.handleOpenJoin}>Join Lobby</Button>
                            </Grid>
                        ) : (<p>Login to play</p>)}
                    </Grid>
                    <Grid item container xs={12} direction="row" alignItems="center" justify="center" spacing={5}>
                        <h1>Chat</h1>
                    </Grid>
                    
                    
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        name="createModal"
                        open={this.state.createModal}
                        onClose={this.handleCloseCreate}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                    >
                        <Fade in={this.state.createModal}>
                            <MakeLobby />
                        </Fade>
                    </Modal>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        name="createModal"
                        open={this.state.joinModal}
                        onClose={this.handleCloseJoin}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                    >
                        <Fade in={this.state.joinModal}>
                            <JoinLobby />
                        </Fade>

                    </Modal>
                    </div>
                </Grid>
            </Wrapper>
        );
    }
}