import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

import {ItemElement, InventoryList, CurrencyBlock} from "../";
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
      characterInputChange
    },
    dispatch
  );


  class GearBlock extends Component {
    onTextChange = event => {
        this.props.characterInputChange(event.target.name, event.target.value);  
    }
    render(){
        return(
            <div className="gearBlock">
                <Grid container spacing={1} direction="row">
                            <Grid item xs={4}>
                                <div className="AC sheetBox centered">
                                    <TextField
                                        id="armor"
                                        label="AC"
                                        defaultValue={this.props.playerCharacter.armorClass ? 
                                            (this.props.playerCharacter.armorClass) : ("10")}
                                        name="armorClass" 
                                        onBlur={this.props.characterInputChange}
                                        fullWidth={true}
                                        InputProps={{
                                            readOnly: this.props.modalData.readOnly
                                          }}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="INIT sheetBox centered">
                                    <TextField
                                        id="init"
                                        label="INIT"
                                        defaultValue={this.props.playerCharacter.initiative ? 
                                            (this.props.playerCharacter.initiative) : ("0")}
                                        name="initiative"
                                        onBlur={this.props.characterInputChange}
                                        fullWidth={true}
                                        InputProps={{
                                            readOnly: this.props.modalData.readOnly
                                          }}
                                    />
                                    </div>
                            </Grid>
                            <Grid item xs={4}>
                            <div className="SPEED sheetBox centered">  
                                <TextField
                                    id="speed"
                                    defaultValue={this.props.playerCharacter.speed ? 
                                        (this.props.playerCharacter.speed) : ("30")}
                                    label="SPD"
                                    name="speed"
                                    className="centered"
                                    onBlur={this.props.characterInputChange}
                                    fullWidth={true}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </div>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} item>
                            <div className="HEALTH sheetBox centered">
                            <Grid container>
                                <Grid item xs={5}></Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="health"
                                        defaultValue={this.props.playerCharacter.health ? 
                                            (this.props.playerCharacter.health) : ("0")}
                                        name="health"
                                        label="health"
                                        onBlur={this.props.characterInputChange}
                                        fullWidth={true}
                                        InputProps={{
                                            readOnly: this.props.modalData.readOnly
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={5}></Grid>
                            </Grid>
                            </div>
                            <div className="HITDIE sheetBox centered">
                            <Grid container>
                                <Grid item xs={5}></Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="hit die"
                                        defaultValue={this.props.playerCharacter.hitDie ? 
                                            (`${this.props.playerCharacter.level} d${this.props.playerCharacter.hitDie}`) : 
                                            ("1d8")}
                                        name="hitDie"
                                        label="hit Die"
                                        onBlur={this.props.characterInputChange} 
                                        fullWidth={true}
                                        InputProps={{
                                            readOnly: this.props.modalData.readOnly
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={5}></Grid>
                            </Grid>
                            </div>
                        </Grid>
                        <Grid spacing={1} item>
                            <p><strong>Inventory: </strong></p>
                            <div className="sheetBox">
                                <CurrencyBlock/>
                            </div>
                            <InventoryList/>
                            <ItemElement/>
                        </Grid>

            </div>
        )
    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GearBlock);