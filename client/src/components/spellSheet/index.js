import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {SpellHeader, SpellBlock, DescriptionBody} from "../spellForms";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../redux/actions/actions";


const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter
     };
  };
  const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange
    },
    dispatch
  );

class SpellSheet extends Component{
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
                    <Grid item xs={12}>
                        <DescriptionBody/>
                    </Grid>
                    <Grid item container direction="column" xs={12}>
                        {this.props.playerCharacter.spellSlots.map( (slot, index) => (
                            <Grid item container xs={4}>
                                <SpellBlock 
                                    spellSlots={slot}
                                    spellLevel={index}
                                />
                            </Grid>
                        ))}
                        
                    </Grid>
                    
            </Grid>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SpellSheet);