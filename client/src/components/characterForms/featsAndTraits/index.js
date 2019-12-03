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
        description: ""

    }
    inputNewFeatData = (event) => {
      const {name, value} = event.target;
      this.setState({ [name] : value});
    }
    pushItemToRedux = () => {
      const {name, description} = this.state;
      const newItem ={
        name,
        description
      }
      let featsAndTraits = this.props.playerCharacter.featsAndTraits;
      featsAndTraits.push(newItem);
      this.props.characterInputChange("featsAndTraits", featsAndTraits);
    }
    removeFromRedux = index => {
      let featsAndTraits = this.props.playerCharacter.featsAndTraits;
      if( index !== -1) {
        featsAndTraits.splice(index, 1);
      }
      this.characterInputChange("featsAndTraits", featsAndTraits);
    }
    render(){
        return(
            <Grid item container>
                {this.props.playerCharacter.featsAndTraits.map((feat, index) => (
                    <Grid item container xs={12} key={index}>
                        <Grid item xs={10}>
                            <p><strong>{feat.name}: </strong></p>
                            <p>{feat.description}</p>
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                              disabled={!this.props.modalData.readOnly} 
                              onClick={this.removeFromRedux.bind(this , index)}
                              >
                                x
                            </Button>
                        </Grid>

                    </Grid>
                    
                ))}
              <TextField
                id="featTitle"
                label="Feat name"
                defaultValue=""
                variant="filled"
                color="secondary"
                name="name"
                onChange={this.inputNewFeatData}
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <TextField 
                id="featDesc"
                label="Feat Description"
                multiline={true}
                rows="4"
                onChange={this.inputNewFeatData}
                margin="normal"
                name="description"
                defaultValue=""
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <Button disabled={this.state.name} onClick={this.pushItemToRedux}>+</Button>
            </Grid>
          
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeatsAndTraits);