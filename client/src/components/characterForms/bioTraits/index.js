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


class BioTraits extends Component {
    render(){
        return(
            <div className="bioTraits box">
                <div className="bio">
                    <h3>Biography:</h3>
                    <p>{this.props.bio}</p>
                </div>
                <div className="featsAndTraits box">
                {this.props.featsAndTrais ? (
                    this.props.featsAndTraits.map(trait => (
                        <ListItemText
                            primary={trait.name}
                            secondary={trait.description}
                        />
                ))) : (<p></p>)}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BioTraits);