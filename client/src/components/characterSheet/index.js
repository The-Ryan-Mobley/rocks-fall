import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import {
    StatBlock, 
    SavingProfs, 
    GearBlock, 
    CharacterHeader, 
    BioTraits, 
    Languages
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
                    <Grid item xs={12} md={1}>
                        <StatBlock
                        />
                    </Grid>
                        <Grid xs={12} md={3} item>
                            <SavingProfs/>
                            <Languages/>
                        </Grid>
                   <Grid item xs={12} md={4}>
                        <GearBlock 
                        />

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BioTraits 
                        />
                    </Grid>
            </Grid>
            </div>
        )
    }
}