import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class MakeLobby extends Component{
    render(){
        return(
            <div className= "lobbyModal">
                <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                    <Grid item xs={12}>
                    <Input
                        id="lobbyName"
                        label="Lobby Name"
                        variant="filled"
                        color="secondary" 
                    />
                    <Input
                        id="lobbyPassword"
                        label="Lobby Password"
                        variant="filled"
                        color="secondary" 
                    />
                </Grid>
                    <Button variant="contained" className="createButton" 
                        onClick={this.formSubmit} 
                        disabled={!(this.props.userData.userId)}>
                            Create Lobby
                        </Button>

               
                </Grid>
            </div>
        )
    }
}