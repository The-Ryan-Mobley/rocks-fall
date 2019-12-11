import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        anchorEl: ""
    }
    componentDidMount = () => {
        if(this.props.playerCharacter.spellCastingClass) {
            API.spellsByLevelAndClass(this.props.spellLevel , this.props.playerCharacter.spellCastingClass)
            .then(result => {
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
        this.setState({ 
            anchorEl: "",
            spellMenu: false
        });
    }
    spellSlotArrayChange = event => {
        let spellSlots = this.props.playerCharacter.spellSlots;
        spellSlots[event.target.name] = event.target.value;
        this.props.characterInputChange("spellSlots", spellSlots);
    }
    dropDownOpen = event => {
        this.setState({
            anchorEl: event.target,
            spellMenu: true
        });
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
            this.setState({
                anchorEl: "",
                spellMenu: false
            });
        }
        
    }
    pushToKnown = () => {

        const selectedSpell = this.state.selectedSpell;
        console.log(selectedSpell)
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
        if(this.state.queryAgain) {
            if(this.props.playerCharacter.spellCastingClass.length) {
                API.spellsByLevelAndClass(this.props.spellLevel , this.props.playerCharacter.spellCastingClass)
                .then(result => {    
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
            <div className="spellBlock sheetBox">
            <Grid container direction="column" spacing={1} m={0}>
                {this.props.spellLevel === 0 ? (<p>Cantrips</p>) : 
                (<Grid item container direction="row" spacing={2}>
                    <p>spell Level: {this.props.spellLevel}</p>
                    <TextField 
                            id="slotsTotal"
                            defaultValue= {this.props.spellSlots ? 
                                (this.props.spellSlots) : ("0")}
                            color="primary"
                            label=" spellSlots"
                            name={this.props.spellLevel}
                            onChange={this.spellSlotArrayChange}
                        />
                </Grid>
                )}
                {this.props.playerCharacter.spellsKnown[this.props.spellLevel] ?  (this.props.playerCharacter.spellsKnown[this.props.spellLevel].map((spell, index) => (
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
                        anchorEl={this.state.anchorEl}
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
            </div>
        )
        
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpellBlock);