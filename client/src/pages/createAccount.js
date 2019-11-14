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
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Input
                        id="username"
                        label="username"
                        variant="filled"
                        color="secondary" 
                    />
                    <Input
                        id="password"
                        label="password"
                        variant="filled"
                        color="secondary" 
                    />
                    <Input
                        id="password"
                        label="password"
                        variant="filled"
                        color="secondary" 
                    />
                    <Button variant="contained" >
                        Create
                    </Button>
                </Grid>
            </Wrapper>
        );
    }

}