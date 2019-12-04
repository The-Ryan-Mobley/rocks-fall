import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

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
        this.props.lobbyHostData(this.props.userData.userName, this.props.userData.userId, this.props.userData.userThumbnail);

    }
    render(){
        return(
            <div className="modalBody">
                <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                <Grid item xs={12}>
                    {this.state.sendLobby ? 
                        (<Redirect to={"/lobby/"+this.state.lobbyId}/>) 
                        : (<h1>Create a Lobby</h1>)}
                </Grid>
                    
                <Grid container item xs={6} alignItems="center" justify="center">
                    <Input
                        name="lobbyName"
                        value={this.props.lobbyData.lobbyName}
                        placeholder="Lobby Name"
                        id="lobbyName"
                        label="Lobby Name"
                        variant="filled"
                        color="secondary" 
                        onChange={this.onTextChange}
                    />
                </Grid>
                <Grid container item xs={6} alignItems="center" justify="center">
                    <Input
                        name="lobbyPassword"
                        value={this.props.lobbyData.lobbyPassword}
                        placeholder="Lobby Password"
                        id="lobbyPassword"
                        label="Lobby Password"
                        variant="filled"
                        color="secondary"
                        onChange={this.onTextChange}
                    />
                </Grid>
                    <Grid container item xs={12} alignItems="center" justify="center">
                        <Button variant="contained" className="createButton" 
                            onClick={this.sendLobbyData} 
                            disabled={!(this.props.userData.userId)}>
                            Create Lobby
                        </Button>
                    </Grid>
                </Grid>
            </div>
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