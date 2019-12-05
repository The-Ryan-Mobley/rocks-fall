import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

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
    remove = language => {
      let languages = this.props.playerCharacter.languages;
      languages.splice(languages.indexOf(language), 1);
      this.props.characterInputChange("languages", languages);
    }
    render(){
        return(
          <div className="languages sheetBox">
            <Grid item container>
                <p><strong>Languages Known</strong></p>
                {this.props.playerCharacter.languages.map((language, index) => (
                    <Grid item container key={index}>
                        <Button
                                onClick={this.remove.bind(this, language)}
                                disabled={this.props.modalData.readOnly}
                                className="centered fullWidth"
                            >
                                {language} X
                            </Button>
                    </Grid>   
                ))}
              <TextField
                id="language"
                label="language"
                defaultValue=""
                color="primary"
                name="name"
                fullWidth={true}
                onBlur={this.inputNewLangData}
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <Button onClick={this.pushItemToRedux}className="centered fullWidth">+</Button>
            </Grid>
            </div>
          
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeatsAndTraits);