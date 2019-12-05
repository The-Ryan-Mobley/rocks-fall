import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setStringArray} from "../../../redux/actions/actions";


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
      event.preventDefault();
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
      this.setState({
        name: "",
        description: ""
      });
    }
    
    render(){
        return(
          <Grid item container>
            <div className="sheetBox">
              <TextField
                className="itemField"
                id="itemTitle"
                label="Item name"
                value={this.state.name}
                color="secondary"
                name="name"
                onChange={this.inputNewItemData}
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <TextField 
                className="itemField"
                id="itemDesc"
                label="Item Description"
                multiline={true}
                rows="4"
                onChange={this.inputNewItemData}
                margin="normal"
                name="description"
                value={this.state.description}
                InputProps={{
                  readOnly: this.props.modalData.readOnly
                }}
              />
              <Button onClick={this.pushItemToRedux} className="centered fullWidth">+</Button>
              </div>
          </Grid>
          
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemElement);