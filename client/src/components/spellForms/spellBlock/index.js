import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
//import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    characterInputChange, 
    setSpellQuery, 
    updateSpellSlots, 
    updateSpellsKnown, 
    setViewdSpell
} from "../../../redux/actions/actions";

import API from "../../../utils/api/API";



const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        spellData: state.spellReducer.spellData,

     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      setSpellQuery,
      updateSpellSlots,
      updateSpellsKnown,
      setViewdSpell
      
    },
    dispatch
  );

class SpellBlock extends Component {
    state = {
        spellQuery: [],
        spellArray: [],
        selectedSpell: {},
        spellMenu: false,
        spellModal: false
    }
    componentDidMount = () => {
        if(this.props.playerCharacter.spellCastingStat) {
            API.spellsByLevelAndClass(this.props.spellLevel , this.props.playerCharacter.spellCastingClass)
            .then(result => {      
                this.setState({spellQuery: result.data});
            });
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
        selectedSpell = value;

        this.setState({selectedSpell});
        this.props.setViewdSpell(selectedSpell)
    }
    addOption = (value) => {

        this.selectSpell(value);
        this.setState({spellMenu: false});
        
    }
    pushToKnown = () => {

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
    removeFromKnown = spell => {
        let spellArray = this.state.spellArray;
        spellArray.splice(spellArray.indexOf(spell), 1);

        let spellsKnown = this.props.playerCharacter.spellsKnown;
        spellsKnown.splice(this.props.spellLevel, 1, spellArray);


        this.setState({spellArray, selectedSpell: {}});
        this.props.updateSpellsKnown(spellsKnown);

    }
    displaySpellInfo = () => {
        this.props.setViewdSpell(this.state.selectedSpell);

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
                {this.state.spellArray ?  (this.state.spellArray.map((spell, index) => (
                    <Grid item container direction="row" key={index}>
                        <Button>{spell.name}</Button>
                        <Button onClick={this.removeFromKnown.bind(this, spell)}>X</Button>
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