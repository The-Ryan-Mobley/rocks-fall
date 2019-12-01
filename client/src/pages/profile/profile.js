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
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
    componentDidMount = () => {
        API.queryUser(this.props)
    }
    render(){
        return(
            <Wrapper>
                <Grid container direction="column" direction="column" alignItems="center" justify="center">
                    <Grid item>
                        <img src={this.props.userData.userThumbnail} alt="profile"/>
                    </Grid>
                    <Grid item>
                        
                    </Grid>
                </Grid>
            </Wrapper>

        );
    }
}