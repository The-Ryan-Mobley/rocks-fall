import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

import "./style.css"

const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange
    },
    dispatch
  );

  class CharacterHeader extends Component{
    onTextChange = event => {
        this.props.characterInputChange(event.target.name, event.target.value);
        
    }
    render(){
        return(
            <div className="characterHeader box">
                <Grid container direction="row" spacing={2}>
                    <Grid item md={3}>
                        <div classname="charName box">
                            <TextField
                                id="nameInput"
                                label="Character Name"
                                defaultValue={this.props.playerCharacter.characterName.length ? 
                                    (this.props.playerCharacter.characterName) : ("")}
                                variant="filled"
                                color="secondary"
                                name="characterName"
                                onBlur={this.onTextChange}
                                InputProps={{
                                    readOnly: this.props.modalData.readOnly
                                  }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={9} direction="row">
                        <div className="headerInfoTop box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <TextField
                                    id="playerClass"
                                    label="Character Class"
                                    defaultValue= {this.props.playerCharacter.playerClass ? 
                                        (this.props.playerCharacter.playerClass) : ("")}
                                    variant="filled"
                                    color="secondary"
                                    name="playerClass"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                                <TextField
                                    label="level"
                                    id="level"
                                    defaultValue= {this.props.playerCharacter.level ? 
                                        (this.props.playerCharacter.level) : ("")}
                                    variant="filled"
                                    color="secondary"
                                    name="level"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}

                                />
                                <TextField
                                    id="background"
                                    label="background"
                                    defaultValue= {this.props.playerCharacter.background.length ? 
                                        (this.props.playerCharacter.background) : ("")}
                                    variant="filled"
                                    color="secondary"
                                    name="background"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </Grid>
                        </div>
                        <div className="headerInfoBottom box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <TextField
                                    id="playerRace"
                                    label="race"
                                    defaultValue= {this.props.playerCharacter.playerRace.length ? 
                                        (this.props.playerCharacter.playerRace) : ("")}
                                    variant="filled"
                                    color="secondary"
                                    name="playerRace"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                                <TextField
                                    id="alignment"
                                    defaultValue= {this.props.playerCharacter.alignment.length ? 
                                        (this.props.playerCharacter.alignment) : ("")}
                                    variant="filled"
                                    color="secondary"
                                    name="alignment"
                                    label="alignment"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />                            
                                <TextField
                                    defaultValue= {this.props.playerCharacter.experience ? 
                                        (this.props.playerCharacter.experience) : ("")}
                                    variant="filled"
                                    color="secondary"
                                    name="experience"
                                    label="experience"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </Grid>
                        </div>
                        
                    </Grid>

                </Grid>

            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterHeader);