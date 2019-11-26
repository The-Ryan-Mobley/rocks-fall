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
        spellCasters: ["Bard", "Cleric", "Druid","Paladin","Ranger","Sorcerer","Warlock","Wizard"]
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
                            name="spellCastingStat"
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
                </Grid>
            </div>
        )
    
    }   

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SpellHeader);