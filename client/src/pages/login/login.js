import React, { Component } from "react";

import Wrapper from '../../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/api/API"
import { Redirect } from 'react-router-dom';

export default class Login extends Component{
    constructor () {
        super ();
        this.state = {
            returnHome: false
        }
    }

    onTextChange = event =>{
        this.props.userInputChange(event.target.name, event.target.value);
    }
    formSubmit = event => {
        event.preventDefault();
        API.queryUser(this.props.userData).then(result => {
            let authInfo = result.data.userData;
            this.props.userLogin(authInfo.userName, authInfo.thumbnail, authInfo.id, authInfo.currentCharacter);
            localStorage.setItem( "userData", JSON.stringify(this.props.userData));
            this.setState({returnHome: true});
        });
    }
    render(){
        return(
            <Wrapper>
                <Grid container xs={12} className="spacer"></Grid>
                <Grid container  xs={12} spacing={1} direction="column" alignItems="center" justify="center"
                    className ="createBody homeBody">
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <h1>Login</h1>
                <Input
                    name="userName"
                    value={this.props.userData.userName}

                    id="filled-required"
                    fullWidth="true"
                    placeholder="username*"
                    variant="filled"
                    color="secondary"
                    className="createInput" 
                    onChange={this.onTextChange}
                />
                <Input
                    name="password"
                    value={this.props.userData.password}

                    id="filled-required"
                    fullWidth="true"
                    placeholder="password*"
                    variant="filled"
                    color="secondary"
                    className="createInput" 
                    onChange={this.onTextChange}
                    type="password"
                />
                </Grid>
                {this.state.returnHome ? (<Redirect to="/"/>) : 
                (
                    <Button variant="contained" className="createButton" 
                        onClick={this.formSubmit} 
                        disabled={!(this.props.userData.userName && this.props.userData.password)}>
                            Login
                    </Button>
                )}
                </Grid>
                <Grid container xs={3}></Grid>
            </Wrapper>
        );
    }

}