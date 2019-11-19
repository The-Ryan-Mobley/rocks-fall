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

export default class Lobby extends Component {
    render(){
        return(
            <div className="lobbyRoom">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <div className="playerZone lobbybox">

                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}