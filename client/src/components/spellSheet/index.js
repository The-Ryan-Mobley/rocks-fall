import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {SpellHeader} from "../spellForms";

export default class CharacterSheet extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <div className="characterSheet">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <SpellHeader
                        />
                    </Grid>
                    
            </Grid>
            </div>
        )
    }
}