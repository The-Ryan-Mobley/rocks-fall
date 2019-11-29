import React, { Component } from 'react';

import Wrapper from '../../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange, characterInputChange} from "../../redux/actions/actions";

import API from "../../utils/api/API";

const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        userData: state.formManipulation.userData,
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      userInputChange
    },
    dispatch
  );

class SaveCharacterButton extends Component {
    componentDidMount = () => {
        this.props.characterInputChange("authorId", this.props.userData.userId);
    }
    postToDb = () => {

        API.createCharacter(this.props.playerCharacter).then(result => {
            console.log(result);
        })

    }
    putToDb = () => {


    }
    render() {
        return(
            <Grid item>
                {this.props.newCharacter ? (
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
