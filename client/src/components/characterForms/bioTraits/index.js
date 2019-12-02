import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField'


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";
import {FeatsAndTraits} from "../";

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


class BioTraits extends Component {
    onTextChange = event => {
        this.props.characterInputChange(event.target.name, event.target.value);  
    }
    render(){
        return(
            <div className="bioTraits box">
                <div className="personalityTraits">
                <TextField 
                        id="multiline-flexible"
                        label="Personality Traits"
                        multiline={true}
                        rows="3"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="personalityTraits"
                        defaultValue={this.props.playerCharacter.personalityTraits ? 
                            (this.props.playerCharacter.personalityTraits) : ("")}
                    />
                </div>
                <div className="ideals">
                <TextField 
                        id="multiline-flexible"
                        label="Ideals"
                        multiline={true}
                        rows="3"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="ideals"
                        defaultValue={this.props.playerCharacter.ideals.length ? 
                            (this.props.playerCharacter.ideals) : ("")}
                    />
                </div>
                <div className="bonds">
                    <TextField 
                        id="multiline-flexible"
                        label="Bonds"
                        multiline={true}
                        rows="3"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="ideals"
                        defaultValue={this.props.playerCharacter.bonds.length ? 
                            (this.props.playerCharacter.bonds) : ("")}
                    />     
                </div>
                <div className="flaws">
                <TextField 
                        id="multiline-flexible"
                        label="Flaws"
                        multiline={true}
                        rows="3"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="flaws"
                        defaultValue={this.props.playerCharacter.flaws.length ? 
                            (this.props.playerCharacter.flaws) : ("")}
                    />
                </div>
                <div className="bio">
                    <TextField 
                        id="multiline-flexible"
                        label="Biography"
                        multiline={true}
                        rows="8"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="bio"
                        defaultValue={this.props.playerCharacter.bio.length ? 
                            (this.props.playerCharacter.bio) : ("")}
                    />
                </div>
                <FeatsAndTraits/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BioTraits);