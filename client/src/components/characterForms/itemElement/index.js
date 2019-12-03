import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setStringArray} from "../../../redux/actions/actions";

import "./style.css"

const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      setStringArray
    },
    dispatch
  );

  class ItemElement extends Component {
    state = {
        name: "",
        description: ""

    }
    inputNewItemData = (event) => {
      const {name, value} = event.target;
      this.setState({ [name] : value});
    }
    pushItemToRedux = () => {
      const {name, description} = this.state;
      const newItem ={
        name,
        description
      }
      let inventory = this.props.playerCharacter.inventory;
      inventory.push(newItem);
      this.props.setStringArray("inventory", inventory);
    }
    render(){
        return(
            <Grid item container>
              <TextField
                id="itemTitle"
                label="Item name"
                defaultValue=""
                variant="filled"
                color="secondary"
                name="name"
                onBlur={this.inputNewItemData}
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <TextField 
                id="itemDesc"
                label="Item Description"
                multiline={true}
                rows="4"
                onBlur={this.inputNewItemData}
                margin="normal"
                name="description"
                defaultValue=""
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
  )(ItemElement);