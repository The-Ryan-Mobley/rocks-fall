import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

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

  class FeatsAndTraits extends Component {
    state = {
        name: "",
    }
    inputNewLangData = (event) => {
      const {name, value} = event.target;
      this.setState({ [name] : value});
    }
    pushItemToRedux = () => {
      const {name} = this.state;
      let languages = this.props.playerCharacter.languages;
      languages.push(name);
      this.props.characterInputChange("languages", languages);
    }
    render(){
        return(
            <Grid item container className="box">
                <p><strong>Languages Known</strong></p>
                {this.props.playerCharacter.languages.map((language, index) => (
                    <Grid item container key={index}>
                        <p>{language}</p>
                    </Grid>   
                ))}
              <TextField
                id="language"
                label="language"
                defaultValue=""
                variant="filled"
                color="secondary"
                name="name"
                onBlur={this.inputNewLangData}
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <Button onClick={this.pushItemToRedux}>+</Button>
            </Grid>
          
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeatsAndTraits);