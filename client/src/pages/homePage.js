import React, { Component } from "react";
import Wrapper from '../components/wrapper';
import Grid from '@material-ui/core/Grid';

export default class HomePage extends Component{
    render(){
        return(
            <Wrapper>
                <Grid container item xs={2}>
                    <p>left</p>

                </Grid>
                <Grid container item xs={8}>
                    <p>center</p>
                </Grid>
                <Grid container item xs={2}>
                    <p>right</p>

                </Grid>

            </Wrapper>
        );
    }
}