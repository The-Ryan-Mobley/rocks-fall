import React, { Component } from 'react';

import SkillProfs from "../skillProfs";

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setPrimaryStats} from "../../../redux/actions/actions";

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
      setPrimaryStats
    },
    dispatch
  );

class SavingProfs extends Component{
    state = {
        selectedStat: "",
        statLists: ["Strength", "Dexterity", "Constitution", "Wisdom", "Intelligence", "Charisma"],
        savingMenu: false
    }
    onTextChange = (event) => { 
        this.props.onTextChange(event);
    }
    pushPrimaryStat = () => {
        let primaryStats = this.props.playerCharacter.primaryStats;
        const selectedStat = this.state.selectedStat;
        if(selectedStat.length) {
            if(primaryStats.indexOf(selectedStat) === -1) {
                primaryStats.push(selectedStat);
                this.props.setPrimaryStats(primaryStats);
                this.setState({selectedStat: ""});
    
            }
        }
    }
    dropDownOpen = () => {
        this.setState({savingMenu: true});
    }

    addOption = value => {
        this.setState({selectedStat: value, savingMenu: false});
        
    }

    render(){
        return(
            <div className="profs">
            <div className="savingProfs box">
                <p>Proficiency Bonus</p>
                <p>{this.props.playerCharacter.proficiencyBonus}</p>
                <p><strong>Saving Throws</strong></p>
                <div className="savingThrows">
                    {this.props.playerCharacter.primaryStats.map((stat, index) => (
                        <Grid item container direction="row" spacing={0} key={index}>
                            <p>{stat}</p>
                            <Button>X</Button>
                        </Grid>
                    ))}
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.dropDownOpen}>
                        {this.state.selectedStat.length ? 
                        (this.state.selectedStat) : ("Select")}
                    </Button>
                    <Menu
                        id="simple-menu"
                        keepMounted 
                        open={this.state.savingMenu}
                        name="Saving Throw Proficiencies"
                        onChange={this.dropDownOpen}
                    >
                        {this.state.statLists.map((stat) => (
                            <MenuItem
                                key={stat}
                                value={stat}
                                onClick={this.addOption.bind(this, stat)}
                            >
                                {stat}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button onClick={this.pushPrimaryStat}>+</Button>
                </div>
            </div>
                <SkillProfs/>
            </div>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SavingProfs);