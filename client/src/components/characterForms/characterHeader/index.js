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
    render(){
        return(
            <div className="characterHeader box">
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={3}>
                        <div classname="charName box">
                            <Input 
                                id="nameInput"
                                defaultValue={this.props.name ? (this.props.name) : ("Character Name")}
                                variant="filled"
                                color="secondary" 
                            />
                        </div>
                    </Grid>
                    <Grid item xs={9} direction="row">
                        <div className="headerInfoTop box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <Input 
                                    id="playerClass"
                                    defaultValue= {this.props.playerClass ? (this.props.playerClass) : ("class")}
                                    variant="filled"
                                    color="secondary"
                                />
                                <p>level: </p>
                                <Input
                                    id="level"
                                    defaultValue= {this.props.level ? (this.props.level) : ("?")}
                                    variant="filled"
                                    color="secondary"

                                />
                                <Input
                                    id="background"
                                    defaultValue= {this.props.background ? (this.props.background) : ("background")}
                                    variant="filled"
                                    color="secondary"
                                />
                            </Grid>
                        </div>
                        <div className="headerInfoBottom box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <Input
                                    id="playerRace"
                                    defaultValue= {this.props.race ? (this.props.race) : ("Player Race")}
                                    variant="filled"
                                    color="secondary"
                                />
                                <Input
                                    id="alignment"
                                    defaultValue= {this.props.alignment ? (this.props.alignment) : ("alignment")}
                                    variant="filled"
                                    color="secondary"
                                />                            
                                <Input
                                    defaultValue= {this.props.experience ? (this.props.experience) : ("experience")}
                                    variant="filled"
                                    color="secondary"
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