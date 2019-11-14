import React, { Component } from "react";
import Wrapper from '../components/wrapper';
import CharacterSheet from "../components/characterSheet"
import Grid from '@material-ui/core/Grid';

export default class HomePage extends Component{
    render(){
        return(
            <Wrapper>
                <Grid container item xs={2}>
                    <p>left</p>

                </Grid>
                <Grid container xs={8}>
                    <CharacterSheet/>
                    <p>center</p>
                </Grid>
                <Grid container item xs={2}>
                    <p>right</p>

                </Grid>

            </Wrapper>
        );
    }
}