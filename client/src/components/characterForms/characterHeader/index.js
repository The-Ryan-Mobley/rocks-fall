import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
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
            <div className="characterHeader">
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={3}>
                            <TextField
                                id="nameInput"
                                label=" Character Name"
                                defaultValue={this.props.playerCharacter.characterName.length ? 
                                    (this.props.playerCharacter.characterName) : ("")}
                                color="secondary"
                                name="characterName"
                                variant="filled"
                                fullWidth={true}
                                onBlur={this.onTextChange}
                                InputProps={{
                                    readOnly: this.props.modalData.readOnly
                                  }}
                            />
                    </Grid>
                    <Grid item xs={12} md={9} >
                        <div className="headerInfoTop">
                            <Grid container item xs={12} direction="row" spacing={1}>
                            <div className="sheetBox">
                                <TextField
                                    id="playerClass"
                                    label=" Character Class"
                                    defaultValue= {this.props.playerCharacter.playerClass ? 
                                        (this.props.playerCharacter.playerClass) : ("")}
                                    color="secondary"
                                    name="playerClass"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </div>
                            <div className="sheetBox">
                                <TextField
                                    label=" level"
                                    id="level"
                                    defaultValue= {this.props.playerCharacter.level ? 
                                        (this.props.playerCharacter.level) : ("")}
                                    color="secondary"
                                    name="level"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}

                                />
                            </div>
                            <div className="sheetBox">
                                <TextField
                                    id="background"
                                    label=" background"
                                    defaultValue= {this.props.playerCharacter.background.length ? 
                                        (this.props.playerCharacter.background) : ("")}
                                    color="secondary"
                                    name="background"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </div>
                            </Grid>
                        </div>
                        <div className="headerInfoBottom">
                            <Grid container item xs={12} direction="row" spacing={1}>
                            <div className="sheetBox">
                                <TextField
                                    id="playerRace"
                                    label=" race"
                                    defaultValue= {this.props.playerCharacter.playerRace.length ? 
                                        (this.props.playerCharacter.playerRace) : ("")}
                                    color="secondary"
                                    name="playerRace"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </div>
                            <div className="sheetBox">
                                <TextField
                                    id="alignment"
                                    defaultValue= {this.props.playerCharacter.alignment.length ? 
                                        (this.props.playerCharacter.alignment) : ("")}
                                    color="secondary"
                                    name="alignment"
                                    label=" alignment"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                /> 
                            </div>
                            <div className="sheetBox">                        
                                <TextField
                                    defaultValue= {this.props.playerCharacter.experience ? 
                                        (this.props.playerCharacter.experience) : ("")}
                                    color="secondary"
                                    name="experience"
                                    label=" experience"
                                    onBlur={this.onTextChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </div>
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