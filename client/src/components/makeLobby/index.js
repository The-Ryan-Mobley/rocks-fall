import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin, userCreateAccount, saveSession} from "../../redux/actions/actions";

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
      userLogin,
      userCreateAccount
    },
    dispatch
  );

class MakeLobby extends Component{
    render(){
        return(

                <Grid container spacing={1}>
                    <Grid item xs={6} direction="column" alignItems="center" justify="center">
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
                    <Grid item xs={12}>
                        <Button variant="contained" className="createButton" 
                            onClick={this.formSubmit} 
                            disabled={!(this.props.userData.userId)}>
                            Create Lobby
                        </Button>
                    </Grid>
                </Grid>

        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MakeLobby);