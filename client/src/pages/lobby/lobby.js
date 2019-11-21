import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Wrapper from '../../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {lobbyInputChange, lobbyHostData, lobbyUserJoin, lobbyUserSet} from "../../redux/actions/actions";

import API from "../../utils/api/API";
import socket from "../../utils/api/socket";

class Lobby extends Component {
    constructor(){
        super();
    }
    componentDidMount = () => {
        console.log(this.props.match.params.lobbyId);
        API.findLobby(this.props.match.params.lobbyId).then(re => {
            if(this.props.userData.userId === re.data.hostId){
                console.log(re.data);
                socket.lobbyHost(re.data);
                this.props.lobbyHostData(re.data);
            }
            else {
                socket.joinLobby(re.data, this.props.userData);
            }
            this.props.lobbyUserSet(re.data);

        }) 
        
    }
    componentDidUpdate = () => {
        console.log(this.props.lobbyData);
        this.joinListener();
        

    }
    componentWillUnmount = () => {

    }
    joinListener = () => {
            socket.listenJoin(callback => {
                console.log(callback);
            const user = {
                userId: callback.userData.userId,
                userName: callback.userData.userName,
                userThumbnail: callback.userData.userThumbnail
            }
            let activeUsers = this.props.lobbyData.activeUsers;
            let idArr = activeUsers.map(user => {
                return user.userId;
            });
            if(idArr.indexOf(user.userId) === -1){
                console.log("you souldnt see me 3 times wut");
                activeUsers.push(user);
            }
            // if(activeUsers.indexOf(user) === -1) {
            //     activeUsers.push(user);
            // } else {
            //     console.log("exists");
            // }
            console.log(idArr);
            this.props.lobbyUserJoin(activeUsers);
        });
            
    }

    render(){
        
        return(
            <Wrapper>
                <div className="lobbyRoom">
                    <Grid container spacing={1}>
                        <h1>{this.props.lobbyData.lobbyName}</h1>
                        <Grid item xs={3}>
                            <div className="playerZone lobbybox">
                                {this.props.lobbyData.activeUsers.map(user => (
                                    <div className="player">
                                        <img src={user.userThumbnail} alt="profile" className="profileThumbnail"></img>
                                        <p><strong>{user.userName}</strong></p>
                                    </div>
                                ))}
                        
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Wrapper>
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
      lobbyUserJoin,
      lobbyUserSet
    },
    dispatch
  );

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lobby);