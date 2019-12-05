import React, { Component } from 'react';

import SkillProfs from "../skillProfs";

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField'
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
        playerCharacter: state.characterReducer.playerCharacter,
        modalData: state.modalControls.modalData
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
        savingMenu: false,
        anchorEl: ""
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
    dropDownOpen = event => {
        this.setState({
            anchorEl: event.target,
            savingMenu: true
        });
    }

    addOption = value => {
        this.setState({selectedStat: value, savingMenu: false});
        
    }
    bonusChange = (event) => {
        const { name, value } = event.target;
        this.props.characterInputChange(name, value);

    }
    handleClickAway = () => {
        this.setState({savingMenu: false});
    }
    remove = stat => {
        let primaryStats = this.props.playerCharacter.primaryStats;
        primaryStats.splice(primaryStats.indexOf(stat), 1);
        this.props.characterInputChange("primaryStats", primaryStats);
    }

    render(){
        return(
            <div className="profs">
            <div className="savingProfs sheetBox box">
                
                <TextField 
                        id="multiline-flexible"
                        label="Proficiency Bonus"
                        multiline={true}
                        rows="3"
                        onBlur={this.bonusChange}
                        margin="normal"
                        name="proficiencyBonus"
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
                        defaultValue={this.props.playerCharacter.proficiencyBonus ? 
                            (this.props.playerCharacter.proficiencyBonus) : ("")}
                    />
                <p><strong>Saving Throws</strong></p>
                <div className="savingThrows">
                    {this.props.playerCharacter.primaryStats.map((stat, index) => (
                        <Grid item container direction="row" spacing={0} key={index}>
                            <p>{stat}</p>
                            <Button
                                onClick={this.remove.bind(this, stat)}
                                disabled={this.props.modalData.readOnly}
                            >
                                X
                            </Button>
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
                        anchorEl={this.state.anchorEl}
                        onChange={this.dropDownOpen}
                        onClose={this.handleClickAway}
                    >
                        {this.state.statLists.map((stat) => (
                            <MenuItem
                                key={stat}
                                value={stat}
                                onClick={this.addOption.bind(this, stat)}
                                disabled={this.props.modalData.readOnly}
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