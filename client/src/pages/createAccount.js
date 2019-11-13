import React, { Component } from "react";
import Wrapper from '../components/wrapper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default class createAccount extends Component{
    render(){
        return(
            <Wrapper>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
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
                    <ButtonBase 
                        type="submit" 
                        label="login" 
                        className="button-submit" 
                        primary={true}
                    />
                </Grid>
            </Wrapper>
        );
    }

}