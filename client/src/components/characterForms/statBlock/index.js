import React, { Component } from 'react';


import TextField from '@material-ui/core/TextField'


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, characterStatsChange} from "../../../redux/actions/actions";

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
        this.calcStatModifiers();
    }
    componentDidUpdate = () => {
    }
    render(){
        return(
            <div className="statBlock box">
                {
                this.state.statNames.map(stat => (
                   
                    <div className="singleBlock sheetBox" key={`${stat}Div`}>
                        <p><strong>{stat}</strong></p>
                        <TextField
                            id={stat}
                            defaultValue={this.props.playerCharacter.stats[this.state.statNames.indexOf(stat)]}
                            variant="filled"
                            color="secondary"
                            name={this.state.statNames.indexOf(stat)}
                            onBlur={this.onStatChange}
                            InputProps={{
                                readOnly: this.props.modalData.readOnly
                              }}
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