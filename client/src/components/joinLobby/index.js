import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {lobbyInputChange, lobbyHostData, lobbyUserSet} from "../../redux/actions/actions";

import API from "../../utils/api/API";

class JoinLobby extends Component {
    state = {
        sendLobby: false,
        lobbyId: ""
    }
    componentDidMount = () => {
        //

    }
    componentDidUpdate = (prevProps) => {


    }
    onTextChange = event =>{
        this.props.lobbyInputChange(event.target.name, event.target.value);
    }
    sendLobbyData = event => {
        event.preventDefault();
        API.joinLobby(this.props.lobbyData).then(result => {
            if(result !== "404") {
                this.props.lobbyUserSet(result.data);
                this.setState({
                    sendLobby: true,
                    lobbyId: result.data._id
                })
            }
        })
        

    }
    render(){
        return(
            <div className="modalBody">
                <Grid container spacing={1}  direction="row" alignItems="center" justify="center">
                    <Grid item xs={12}>
                    {this.state.sendLobby ? 
                        (<Redirect to={"/lobby/"+this.state.lobbyId}/>) :
                        (<h1 className="centeredHeading">Join a Lobby</h1>)}
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
                            className="modalInput"
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
                            className="modalInput"
                        />
                    </Grid>
                    <Grid container item xs={12} alignItems="center" justify="center">
                        <Button variant="contained" className="createButton" 
                            onClick={this.sendLobbyData} 
                            disabled={!(this.props.userData.userId)}>
                            Join Lobby
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
      lobbyHostData,
      lobbyUserSet
    },
    dispatch
  );

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JoinLobby);
