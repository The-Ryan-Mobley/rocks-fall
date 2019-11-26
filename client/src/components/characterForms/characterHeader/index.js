import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

import "./style.css"

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

  class CharacterHeader extends Component{
    onTextChange = event => {
        this.props.characterInputChange(event.target.name, event.target.value);
        
    }
    render(){
        return(
            <div className="characterHeader box">
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={3}>
                        <div classname="charName box">
                            <Input 
                                id="nameInput"
                                defaultValue={this.props.playerCharacter.characterName.length ? 
                                    (this.props.playerCharacter.characterName) : ("Character Name")}
                                variant="filled"
                                color="secondary"
                                name="characterName"
                                onChange={this.onTextChange}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={9} direction="row">
                        <div className="headerInfoTop box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <Input 
                                    id="playerClass"
                                    defaultValue= {this.props.playerCharacter.playerClass.length ? 
                                        (this.props.playerCharacter.playerClass) : ("class")}
                                    variant="filled"
                                    color="secondary"
                                    name="playerClass"
                                    value={this.props.playerCharacter.playerClass}
                                    onChange={this.onTextChange}
                                />
                                <p>level: </p>
                                <Input
                                    id="level"
                                    defaultValue= {this.props.playerCharacter.level ? 
                                        (this.props.playerCharacter.level) : ("?")}
                                    variant="filled"
                                    color="secondary"
                                    name="level"
                                    value={this.props.playerCharacter.level}
                                    onChange={this.onTextChange}

                                />
                                <Input
                                    id="background"
                                    defaultValue= {this.props.playerCharacter.background.length ? 
                                        (this.props.playerCharacter.background) : ("background")}
                                    variant="filled"
                                    color="secondary"
                                    name="background"
                                    value={this.props.playerCharacter.background}
                                    onChange={this.onTextChange}
                                />
                            </Grid>
                        </div>
                        <div className="headerInfoBottom box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <Input
                                    id="playerRace"
                                    defaultValue= {this.props.playerCharacter.playerRace.length ? 
                                        (this.props.playerCharacter.playerRace) : ("Player Race")}
                                    variant="filled"
                                    color="secondary"
                                    name="playerRace"
                                    value={this.props.playerCharacter.playerRace}
                                    onChange={this.onTextChange}
                                />
                                <Input
                                    id="alignment"
                                    defaultValue= {this.props.playerCharacter.alignment.length ? 
                                        (this.props.playerCharacter.alignment) : ("alignment")}
                                    variant="filled"
                                    color="secondary"
                                    name="alignment"
                                    value={this.props.playerCharacter.alignment}
                                    onChange={this.onTextChange}
                                />                            
                                <Input
                                    defaultValue= {this.props.playerCharacter.experience ? 
                                        (this.props.playerCharacter.experience) : ("experience")}
                                    variant="filled"
                                    color="secondary"
                                    name="experience"
                                    value={this.props.playerCharacter.experience}
                                    onChange={this.onTextChange}
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