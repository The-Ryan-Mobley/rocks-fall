import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
//import Box from '@material-ui/core/Box';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {lobbyInputChange, lobbyHostData} from "../../redux/actions/actions";

import API from "../../utils/api/API";

class MakeLobby extends Component{
    state = {
        sendLobby: false,
        lobbyId: ""
    }
    componentDidMount = () => {
        //

    }
    componentDidUpdate = (prevProps) => {
        if(prevProps.lobbyData.hostId !== this.props.lobbyData.hostId) {
            API.newLobby(this.props.lobbyData).then(result => {
                if(result !== "404") {
                    API.hostLobby(this.props.lobbyData.hostId).then(re => {
                        console.log(re);
                        this.setState({
                            sendLobby: true,
                            lobbyId: re.data._id
                        })
                    })
                }

            });
        }


    }
    onTextChange = event =>{
        this.props.lobbyInputChange(event.target.name, event.target.value);
    }
    sendLobbyData = event => {
        event.preventDefault();
        //console.log(this.props);
        this.props.lobbyHostData(this.props.userData.userName, this.props.userData.userId);

    }
    render(){
        return(

                <Grid container spacing={1}>
                    {this.state.sendLobby ? (<Redirect to={"/lobby/"+this.state.lobbyId}/>) : (<h1>Create a Lobby</h1>)}

                    
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
      lobbyHostData
    },
    dispatch
  );

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MakeLobby);