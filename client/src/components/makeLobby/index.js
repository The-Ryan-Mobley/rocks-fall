import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import API from "../../utils/api/API";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {lobbyInputChange, lobbyHostData} from "../../redux/actions/actions";

const mapStateToProps = state => {
    return { 
        userData: state.formManipulation.userData,
        lobbyData: state.lobbyManipulation.lobbyData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      lobbyInputChange,
      lobbyHostData
    },
    dispatch
  );

class MakeLobby extends Component{
    
    componentDidMount = () => {

    }
    onTextChange = event =>{
        this.props.lobbyInputChange(event.target.name, event.target.value);
    }
    sendLobbyData = event => {
        event.preventDefault();
        //console.log(this.props);
        
        this.props.lobbyHostData(this.props.userData.userName, this.props.userData.userId);
        console.table(this.props.lobbyData);

    }
    render(){
        return(

                <Grid container spacing={1}>
                    <h1>Create a Lobby</h1>
                    <Grid item xs={6} direction="column" alignItems="center" justify="center">
                    <Input
                        name="lobbyName"
                        value={this.props.lobbyData.lobbyName}

                        id="lobbyName"
                        label="Lobby Name"
                        variant="filled"
                        color="secondary" 
                        onChange={this.onTextChange}
                    />
                    <Input
                        name="lobbyPassword"
                        value={this.props.lobbyData.lobbyPassword}

                        id="lobbyPassword"
                        label="Lobby Password"
                        variant="filled"
                        color="secondary"
                        onChange={this.onTextChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" className="createButton" 
                            onClick={this.sendLobbyData} 
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