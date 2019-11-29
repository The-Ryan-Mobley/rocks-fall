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
    render(){
        return(
            <Grid item container>
                {this.props.playerCharacter.featsAndTraits.map(feat => (
                    <Grid item container xs={12}>
                        <Grid item xs={10}>
                            <p><strong>{feat.name}: </strong></p>
                            <p>{feat.description}</p>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.removeFromRedux.bind(this, feat)}>x</Button>
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