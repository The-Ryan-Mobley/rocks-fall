import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setSpellQuery, updateSpellSlots, updateSpellsKnown} from "../../../redux/actions/actions";

import API from "../../../utils/api/API";


const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        spellQuery: state.spellReducer.spellQuery
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      setSpellQuery,
      updateSpellSlots,
      updateSpellsKnown
    },
    dispatch
  );

class SpellBlock extends Component {
    state = {
        spellQuery: [],
        spellArray: [],
        selectedSpell: {},
        spellMenu: false,
    }
    componentDidMount = () => {
        if(this.props.playerCharacter.spellCastingStat) {
            if(this.props.spellSlots > 0) {
                API.spellsByLevelAndClass(this.props.spellLevel , this.props.playerCharacter.spellCastingClass)
                .then(result => {
                    
                    this.setState({spellQuery: result.data});
                });
            }
        }
        if(this.props.playerCharacter.spellsKnown[this.props.spellLevel] !== null) {
            this.setState({spellArray: this.props.playerCharacter[this.props.spellLevel]});
        }
    }
    spellSlotArrayChange = event => {
        let spellSlots = this.props.playerCharacter.spellSlots;
        spellSlots[event.target.name] = event.target.value;
    }
    dropDownOpen = () => {
        this.setState({ spellMenu: true});
    }
    selectSpell = (value) => {
        let selectedSpell = this.state.selectedSpell;
        selectedSpell = value
        this.setState({selectedSpell});
        console.log(this.state.selectedSpell);
    }
    addOption = (value) => {
        console.log(value);
        this.selectSpell(value);
        
        this.setState({spellMenu: false});
        
    }
    pushToKnown = () => {
        console.log(this.state.selectedSpell);
        const selectedSpell = this.state.selectedSpell;
        let spellArray = undefined; 
        if(this.state.spellArray) {
            spellArray = this.state.spellArray
        } else {
            spellArray=[];
        }
        spellArray.push(selectedSpell);
        let spellsKnown = this.props.playerCharacter.spellsKnown;
        if(spellsKnown[this.props.spellLevel] !== null) {
            spellsKnown.splice(this.props.spellLevel, 1, spellArray);
        } else {
            spellsKnown.push(spellArray);
        }
        this.setState({spellArray})
        this.props.updateSpellsKnown(spellsKnown);

    }
    render(){
        return(
            <Grid item container direction="column" spacing={1}>
                {this.props.spellLevel === 0 ? (<p>Cantrips</p>) : 
                (<Grid item container direction="row">
                    <p>{this.props.spellLevel}</p>
                    <Input 
                        id="slotsTotal"
                        defaultValue= {this.props.spellSlots ? 
                        (this.props.spellSlots) : ("0")}
                            variant="filled"
                            color="secondary"
                            name={this.props.spellLevel}
                            onChange={this.spellSlotArrayChange}
                        />
                </Grid>
                )}
                {this.state.spellArray ?  (this.state.spellArray.map(spell => (
                    <Grid item container direction="row">
                        <Button>{spell.name}</Button>
                        <Button>X</Button>
                    </Grid>
                ))) : (<p></p>)}
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.dropDownOpen}>
                        {this.state.selectedSpell.name ? 
                        (this.state.selectedSpell.name) : ("Select")}
                    </Button>
                    <Menu
                        id="simple-menu"
                        keepMounted 
                        open={this.state.spellMenu}
                        name="spellCastingClass"
                        onChange={this.dropDownOpen}
                    >
                    {this.state.spellQuery.map((spell) => (
                        <MenuItem
                            key={spell.name}
                            value={spell.name}
                            onClick={this.addOption.bind(this, spell)}
                        >
                            {spell.name}
                        </MenuItem>
                    ))}
                    </Menu>
                    <Button onClick={this.pushToKnown} disabled={this.selectedSpell}>+</Button>


            </Grid>
        )
        
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpellBlock);