import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setSpellQuery, updateSpellSlots} from "../../../redux/actions/actions";

import API from "../../../utils/api";


const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        spellQuery: state.spellReducer.spellQuery
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      setSpellQuery,
      updateSpellSlots
    },
    dispatch
  );

class SpellBlock extends Component {
    componentDidMount
    spellSlotArrayChange = event => {
        let spellSlots = this.props.playerCharacter.spellSlots;
        spellSlots[event.target.name] = event.target.value;
        this.props.updateSpellSlots(spellSlots)
    }
    render(){
        return(
            <Grid item container direction="column" spacing={1}>
                {this.props.spellLevel === 0 ? (<p>Cantrips</p>) : 
                (<Grid item container direction="row">
                    <p>{this.props.spellLevel}</p>
                    <Input 
                        id="slotsTotal"
                        defaultValue= {this.props.spellSlots ? 
                        (this.props.spellSlots) : ("0")}
                            variant="filled"
                            color="secondary"
                            name={this.props.spellLevel}
                            onChange={this.spellSlotArrayChange}
                        />
                </Grid>
                )}


            </Grid>
        )
        
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(spellBlock);