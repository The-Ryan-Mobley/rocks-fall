import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import {StatBlock, SavingProfs, GearBlock, ItemElement, BioTraits, CharacterHeader} from "../characterForms";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setBlankCharacter} from "../../redux/actions/actions";

import "./style.css"

class NewCharacter extends Component {
    componentDidMount = () => {
        this.props.setBlankCharacter();

    }
    saveCharacterToDatabase = () => {
        

    }
    render(){
        return (
            <div className="characterSheet">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <CharacterHeader/>
                    </Grid>
                    <Grid item xs={2}>
                        <StatBlock/>
                    </Grid>
                    <Grid xs={2} item>
                        <SavingProfs/>
                    </Grid>
                   <Grid item xs={4}>
                        <GearBlock />
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <BioTraits />
                    </Grid>
                </Grid>
                <Button>Create!</Button>
            </div>
        )
    }

}
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCharacter);