import React, { Component } from "react";

import Wrapper from '../../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/api/API"
import { Redirect } from 'react-router-dom'

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
    formSubmit = () => {
        event.preventDefault();
        API.loginUser(this.props.userData).then(result => {
            this.props.userLogin();
            this.setState({returnHome: true});
        });
        
    }
    

    render(){
        return(
            <Wrapper>
                <div><h1>Hello World</h1></div>
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
                    placeholder="username*"
                    variant="filled"
                    color="secondary"
                    className="createInput" 
                    onChange={this.onTextChange}
                />
                <Button variant="contained" className="createButton" 
                        onClick={this.formSubmit} disabled={!(this.props.userData.userName && this.props.userData.password)}>
                            Create
                </Button>
            </Wrapper>
        );
    }

}