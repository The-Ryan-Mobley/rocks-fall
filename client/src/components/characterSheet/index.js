import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {
    StatBlock, 
    SavingProfs, 
    GearBlock, 
    CharacterHeader, 
    BioTraits, 
} from "../characterForms";
import "./style.css"

export default class CharacterSheet extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <div className="characterSheet">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <CharacterHeader
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <StatBlock
                        />
                    </Grid>
                        <Grid xs={2} item>
                            <SavingProfs
                            />
                            
                        </Grid>
                   <Grid item xs={4}>
                        <GearBlock 
                        />

                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <BioTraits 
                        />
                    </Grid>
            </Grid>
            </div>
        )
    }
}