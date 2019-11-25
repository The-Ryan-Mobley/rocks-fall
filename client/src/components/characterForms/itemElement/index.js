import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

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

  class ItemElement extends Component {
    render(){
        return(
            <div className="itemDetails">
                <p className="itemName"><strong>{this.props.name}</strong></p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemElement);