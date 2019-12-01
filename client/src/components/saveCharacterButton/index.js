import React, { Component } from 'react';


import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange, characterInputChange, swapModalBool} from "../../redux/actions/actions";

import API from "../../utils/api/API";

const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        userData: state.formManipulation.userData,
        modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      userInputChange,
      swapModalBool
    },
    dispatch
  );

class SaveCharacterButton extends Component {
    componentDidMount = () => {
        this.props.characterInputChange("authorId", this.props.userData.userId);
    }
    postToDb = () => {
        let value = undefined;

        API.createCharacter(this.props.playerCharacter).then(result => {
            if(result) {
                value = !this.props.modalData.newCharacter;
                this.props.swapModalBool("newCharacter", value);
                value =!this.props.modalData.sheetModal;
                this.props.swapModalBool("sheetModal", value);
            }
        })

    }
    putToDb = () => {
        API.updateCharacter(this.props.playerCharacter).then(result => {
            if(result) {
                value =!this.props.modalData.sheetModal;
                this.props.swapModalBool("sheetModal", value);
            }

        });


    }
    render() {
        return(
            <Grid item>
                {this.props.modalData.newCharacter ? (
                    <Button onClick={this.postToDb}>Create</Button>
                ) : 
                (
                    <Button onClick={this.putToDb}>Save</Button>
                )}
            </Grid>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SaveCharacterButton);
