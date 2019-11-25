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

  class StatBlock extends Component {
    state = {
        statNames: ["Strength", "Dexterity", "Constitution", "Wisdom","Intelligence","Charisma"],
        statMods: []
    }
    onTextChange = (event) => { 
        this.props.onTextChange(event);
    }
    componentDidUpdate = () => {
        let statMods = this.state.playerCharacter.stats.map(stat =>{
            if(stat === 10){
                return 0;
            } else if(stat > 10) {
                let modValue = "+"+Math.round(Math.floor((stat - 10)/2));
                return modValue;
            } else if (stat < 10) {
                let modValue = Math.round(Math.floor((stat - 10)/2));
                return modValue;
            }
        })
        this.setState({
            statMods: statMods
        });
    }
    render(){

        return(
            <div className="statBlock box">
                {this.props.stats ? 
                (this.props.stats.map(stat => (   
                    <div className="singleBlock">
                        <p>{this.state.statNames[this.props.stats.indexOf(stat)]}</p>
                        <Input
                            id={this.props.stats.indexOf(stat)}
                            defaultValue={stat}
                            variant="filled"
                            color="secondary"
                            name={`stats[${this.props.stats.indexOf(stat)}]`}
                            onchange={this.onTextChange}
                        />
                        
                        <p>{this.props.statMods[this.props.stats.indexOf(stat)]}</p>
                    </div>
                ))):
                (this.state.statNames.map(statName => (
                    <div className="singleBlock">
                        <p>{this.state.statNames[this.state.statNames.indexOf(statName)]}</p>
                        <Input
                            id={this.state.statNames.indexOf(statName)}
                            placeholder={statName}
                            variant="filled"
                            color="secondary" 
                        />
                        
                    </div>
                )))}
            </div>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StatBlock);