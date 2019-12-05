import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField'


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";
import {FeatsAndTraits} from "../";

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


class BioTraits extends Component {
    onTextChange = event => {
        this.props.characterInputChange(event.target.name, event.target.value);  
    }
    render(){
        return(
            <div className="bioTraits">
                <div className="personalityTraits sheetBox">
                <TextField 
                        id="multiline-flexible"
                        label="Personality Traits"
                        multiline={true}
                        rows="2"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="personalityTraits"
                        fullWidth={true}
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
                        defaultValue={this.props.playerCharacter.personalityTraits ? 
                            (this.props.playerCharacter.personalityTraits) : ("")}
                    />
                </div>
                <div className="ideals sheetBox">
                <TextField 
                        id="multiline-flexible"
                        label="Ideals"
                        multiline={true}
                        rows="2"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="ideals"
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
                        defaultValue={this.props.playerCharacter.ideals.length ? 
                            (this.props.playerCharacter.ideals) : ("")}
                    />
                </div>
                <div className="bonds sheetBox">
                    <TextField 
                        id="multiline-flexible"
                        label="Bonds"
                        multiline={true}
                        rows="2"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="ideals"
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
                        defaultValue={this.props.playerCharacter.bonds.length ? 
                            (this.props.playerCharacter.bonds) : ("")}
                    />     
                </div>
                <div className="flaws sheetBox">
                <TextField 
                        id="multiline-flexible"
                        label="Flaws"
                        multiline={true}
                        rows="2"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="flaws"
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
                        defaultValue={this.props.playerCharacter.flaws.length ? 
                            (this.props.playerCharacter.flaws) : ("")}
                    />
                </div>
                <div className="bio sheetBox">
                    <TextField 
                        id="multiline-flexible"
                        label="Biography"
                        multiline={true}
                        rows="3"
                        onBlur={this.onTextChange}
                        margin="normal"
                        name="bio"
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
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