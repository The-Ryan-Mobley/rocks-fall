import React, { Component } from "react";
import Wrapper from '../../components/wrapper';
import CharacterSheet from "../../components/characterSheet";
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

export default class HomePage extends Component{
    render(){
        return(
            <Wrapper>
                <Grid container item xs={2}>
                    <p>left</p>

                </Grid>
                <Grid container xs={8}>
                    <div className="homeBody">
                        <p>middle body</p>
                        <Button variant="contained" className="createButton" 
                        onClick={this.formSubmit} 
                        disabled={!(this.props.userData.userId)}>
                            Create Lobby
                        </Button>
                    </div>
                </Grid>
                <Grid container item xs={2}>
                    <p>right</p>

                </Grid>

            </Wrapper>
        );
    }
}