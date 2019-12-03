import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
        modalData: state.modalControls.modalData

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
        spellModal: false,
        queryAgain: true,
    }
    componentDidMount = () => {
        if(this.props.playerCharacter.spellCastingClass) {
            API.spellsByLevelAndClass(this.props.spellLevel , this.props.playerCharacter.spellCastingClass)
            .then(result => {
                console.log(this.props.spellLevel);
                console.log(result);      
                this.setState({
                    spellQuery: result.data,
                    queryAgain: false
                });

            });
        }
        if(this.props.playerCharacter.spellsKnown[this.props.spellLevel] !== null) {
            this.setState({spellArray: this.props.playerCharacter[this.props.spellLevel]});
        }
    }
    handleClickAway = () => {
        this.setState({ spellMenu: false});
    }
    spellSlotArrayChange = event => {
        let spellSlots = this.props.playerCharacter.spellSlots;
        spellSlots[event.target.name] = event.target.value;
    }
    dropDownOpen = () => {
        this.setState({ spellMenu: true});
        console.log(this.state.spellQuery);
        if(this.state.spellQuery.length === 0) {
            this.queryAgain();
        }
        
    }
    selectSpell = (value) => {
        let selectedSpell = this.state.selectedSpell;
        selectedSpell = value;

        this.setState({selectedSpell});
        this.props.setViewdSpell(selectedSpell)
    }
    addOption = (value) => {

        this.selectSpell(value);
        if(this.state.spellMenu){
            this.setState({spellMenu: false});
        }
        
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
    queryAgain = () => {
        console.log("query again query again");
        console.log(this.props.playerCharacter.spellCastingClass);
        if(this.state.queryAgain) {
            if(this.props.playerCharacter.spellCastingClass.length) {
                API.spellsByLevelAndClass(this.props.spellLevel , this.props.playerCharacter.spellCastingClass)
                .then(result => {  
                    console.log(result);    
                    this.setState({
                        spellQuery: result.data,
                        queryAgain: false
                    });
                });
            }
            if(this.props.playerCharacter.spellsKnown[this.props.spellLevel] !== null) {
                this.setState({
                    spellArray: this.props.playerCharacter[this.props.spellLevel], 
                });
            }
        }
    }
    render(){
        
        return(
            <Grid item container direction="column" spacing={1}>
                {this.props.spellLevel === 0 ? (<p>Cantrips</p>) : 
                (<Grid item container direction="row">
                    <p>{this.props.spellLevel}</p>
                    <Input 
                        id="slotsTotal"
                        placeholder= {this.props.spellSlots ? 
                        (this.props.spellSlots) : ("0")}
                            variant="filled"
                            color="secondary"
                            label="spellSlots"
                            name={this.props.spellLevel}
                            onChange={this.spellSlotArrayChange}
                        />
                </Grid>
                )}
                {this.state.spellArray ?  (this.state.spellArray.map((spell, index) => (
                    <Grid item container direction="row" key={index}>
                        <Button onClick={this.addOption.bind(this, spell)}>{spell.name}</Button>
                        <Button 
                            disabled={this.props.modalData.readOnly} 
                            onClick={this.removeFromKnown.bind(this, spell)}
                        >
                            X
                        </Button>
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
                        onClose={this.handleClickAway}
                        disabled={this.props.modalData.readOnly}
                    >
                    {this.state.spellQuery.map((spell) => (
                        <MenuItem
                            key={spell.name}
                            value={spell.name}
                            onClick={this.addOption.bind(this, spell)}
                            disabled={this.props.modalData.readOnly}
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