import React, { Component } from "react";
import Wrapper from '../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';




export default class CreateAccount extends Component{
    handleInputChange = event =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render(){
        return(
            <Wrapper>
                <Grid container xs={12} className="spacer"></Grid>
                <Grid container xs={3}></Grid>
                <Grid container  xs={6} spacing={1} direction="column" alignItems="center" justify="center"
                    className ="createBody">
                        <Input
                            id="filled-required"
                            fullWidth="true"
                            placeholder="username*"
                            variant="filled"
                            color="secondary"
                            className="createInput" 
                        />
                        <Input
                            id="filled-required"
                            fullWidth="true"
                            placeholder="password*"
                            variant="filled"
                            color="secondary" 
                            className="createInput"
                        />
                        <Input
                            id="filled-required"
                            fullWidth="true"
                            placeholder="password*"
                            variant="filled"
                            color="secondary" 
                            className="createInput lastInput"
                        />
                        <Button variant="contained" className="createButton">
                            Create
                        </Button>
                </Grid>
                <Grid container xs={3}></Grid>
            </Wrapper>
        );
    }

}