import React, { Component } from 'react';

//import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, characterStatsChange} from "../../../redux/actions/actions";

import "./style.css"

const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      characterStatsChange
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
    onStatChange = (event) => {
        const statArray = this.props.playerCharacter.stats;
        const index = event.target.name;
        statArray.splice(index, 1, parseInt(event.target.value));
        this.props.characterStatsChange(statArray);
        this.calcStatModifiers();

    }
    calcStatModifiers = () => {
        let statMods = this.props.playerCharacter.stats.map(stat =>{
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
    componentDidMount = () => {
        console.log(this.props.playerCharacter.stats);
        this.calcStatModifiers();
    }
    componentDidUpdate = () => {
        console.table(this.props.playerCharacter.stats);
    }
    render(){
        this.props.playerCharacter.stats.map(stat => console.log(stat));
        return(
            <div className="statBlock box">
                {
                this.state.statNames.map(stat => (
                   
                    <div className="singleBlock" key={`${stat}Div`}>
                        <p>{stat}</p>
                        <Input
                            id={stat}
                            defaultValue={this.props.playerCharacter.stats[this.state.statNames.indexOf(stat)]}
                            variant="filled"
                            color="secondary"
                            name={this.state.statNames.indexOf(stat)}
                            onChange={this.onStatChange}
                        />
                        
                        <p>{this.state.statMods[this.state.statNames.indexOf(stat)]}</p>
                    </div>
                ))}
                
            </div>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StatBlock);