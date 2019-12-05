import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";



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
class SpellHeader extends Component {
    state = {
        classDropdown: false,
        anchorEl: "",
        spellCasters: ["Bard", "Cleric", "Druid","Paladin","Ranger","Sorcerer","Warlock","Wizard"],
    }
    handleClick = event => {
        this.setState({
            anchorEl: event.target,
            classDropdown: true
        });
    }
    selectOption = (value) => {
        this.props.characterInputChange("spellCastingClass",value);
        this.setState({
            anchorEl: "",
            classDropdown: false
        });

    }
    optionValues = (event, selectedIndex) => {
        console.log(selectedIndex);
    }
    onTextChange = event => {
        console.log(event.target.name);
        console.log(event.target.value);
        this.props.characterInputChange(event.target.name , event.target.value);
    }
    handleClickAway = () => {
        this.setState({
            anchorEl: "",
            classDropdown: false
        });
    }
    render(){
        return(
            <div className="characterHeader sheetBox">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                            {this.props.playerCharacter.spellCastingClass ? 
                                (this.props.playerCharacter.spellCastingClass) : ("Select")}
                        </Button>
                        <Menu
                            id="simple-menu"
                            keepMounted 
                            open={this.state.classDropdown}
                            name="spellCastingClass"
                            anchorEl={this.state.anchorEl}
                            onChange={this.optionValues}
                            onClose={this.handleClickAway}
                        >
                            {this.state.spellCasters.map(caster => (
                                <MenuItem
                                    key={caster}
                                    value={caster}
                                    onClick={this.selectOption.bind(this, caster)}
                                >{caster}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                    <Grid item xs={9} direction="row">
                        <div className="headerInfoTop">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <Grid item xs={4}>
                                <div className="sheetBox">
                                    <TextField
                                        id="playerClass"
                                        label=" Casting Stat"
                                        defaultValue= {this.props.playerCharacter.spellCastingStat ? 
                                            (this.props.playerCharacter.spellCastingStat) : ("stat")}
                                        color="primary"
                                        name="spellCastingStat"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                                </Grid>
                                <Grid item xs={4}>
                                <div className="sheetBox">
                                    <TextField
                                        id="playerClass"
                                        label=" Spell Atk Bonus"
                                        defaultValue= {this.props.playerCharacter.spellAttackBonus ? 
                                            (this.props.playerCharacter.spellAttackBonus) : ("")}
                                        color="primary"
                                        name="spellAttackBonus"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                                </Grid>
                                <Grid item xs={4}>
                                <div className="sheetBox">
                                    <TextField
                                        id="playerClass"
                                        label=" Save DC"
                                        defaultValue= {this.props.playerCharacter.spellSaveDc ? 
                                            (this.props.playerCharacter.spellSaveDc) : ("")}
                                        color="primary"
                                        name="spellSaveDc"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    
    }   

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SpellHeader);