import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
        spellCasters: ["Bard", "Cleric", "Druid","Paladin","Ranger","Sorcerer","Warlock","Wizard"],
    }
    componentWillMount = () => {

    }
    handleClick = () => {
        this.setState({classDropdown: true});
    }
    selectOption = (value) => {
        this.props.characterInputChange("spellCastingClass",value);
        this.setState({classDropdown: false});

    }
    optionValues = (event, selectedIndex) => {
        console.log(selectedIndex);
    }
    onTextChange = event => {
        this.props.characterInputChange(event.target.name , event.target.value);
    }
    render(){
        return(
            <div className="characterHeader box">
                <Grid container direction="row" spacing={2}>
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
                            onChange={this.optionValues}
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
                        <div className="headerInfoTop box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <Grid item xs={4}>
                                <Input 
                                    id="playerClass"
                                    label="Spell Stat"
                                    defaultValue= {this.props.playerCharacter.spellCastingStat ? 
                                        (this.props.playerCharacter.spellCastingStat) : ("stat")}
                                    variant="filled"
                                    color="secondary"
                                    name="spellCastingStat"
                                    onChange={this.onTextChange}
                                />
                                </Grid>
                                <Grid item xs={4}>
                                <Input 
                                    id="playerClass"
                                    label="Spell Atk Bonus"
                                    defaultValue= {this.props.playerCharacter.spellAttackBonus ? 
                                        (this.props.playerCharacter.spellAttackBonus) : ("0")}
                                    variant="filled"
                                    color="secondary"
                                    name="spellAttackBonus"
                                    onChange={this.onTextChange}
                                />

                                </Grid>
                                <Grid item xs={4}>
                                <Input 
                                    id="playerClass"
                                    label="Spell Save DC"
                                    defaultValue= {this.props.playerCharacter.spellSaveDc ? 
                                        (this.props.playerCharacter.SpellSaveDc) : ("8")}
                                    variant="filled"
                                    color="secondary"
                                    name="spellSaveDc"
                                    onChange={this.onTextChange}
                                />

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