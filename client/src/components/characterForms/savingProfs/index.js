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

class SavingProfs extends Component{
    onTextChange = (event) => { 
        this.props.onTextChange(event);
    }

    render(){
        return(
            <div className="profs">
            <div className="savingProfs box">
                <p>Proficiency Bonus</p>
                <p>{this.props.proficiencyBonus}</p>
                <p><strong>Saving Throws</strong></p>
                    {this.props.primaryStats ? (
                        <div className="savingThrows">
                            {this.props.primaryStats.map(stat => (
                                <Input
                                    id={this.props.primaryStats.indexOf(stat)}
                                    defaultValue={stat}
                                    variant="filled"
                                    color="secondary" 
                                />
                            ))}
                            <Input
                                id="add saving throw"
                                label="Add"
                                placeholder="Add"
                                variant="filled"
                                color="secondary" 
                            />
                        </div>
                    ):(
                        <div className="savingThrows">
                            <Input
                                id="add saving throw"
                                label="Add"
                                placeholder="Add"
                                variant="filled"
                                color="secondary" 
                            />
                        <Button>Add Stat</Button>
                        </div>
                    )}
            </div>
                <div className="Skills box">
                    {this.props.skillProficiency ? (
                        this.props.skillProficiency.map(skill => (
                            <Input
                                id={this.props.skillProficiency.indexOf(skill)}
                                defaultValue={skill}
                                variant="filled"
                                color="secondary" 
                                />
                        ))

                    ) : (<p></p>)}
                        <Input
                            id="add a skill Proficiency"
                            label="Add"
                            variant="filled"
                            color="secondary" 
                        />
                        <Button>Add Prof</Button>
                    </div>
            </div>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SavingProfs);