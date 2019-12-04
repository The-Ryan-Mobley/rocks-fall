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
            <div className="gearBlock box">
                <Grid container spacing={1} direction="row">
                            <Grid item xs={4}>
                                <div className="AC">
                                    <TextField
                                        id="armor"
                                        label="AC"
                                        defaultValue={this.props.playerCharacter.armorClass ? 
                                            (this.props.playerCharacter.armorClass) : ("10")}
                                        variant="filled"
                                        name="armorClass" 
                                        onBlur={this.props.characterInputChange}
                                        InputProps={{
                                            readOnly: this.props.modalData.readOnly
                                          }}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="INIT">
                                    <TextField
                                        id="init"
                                        label="INIT"
                                        defaultValue={this.props.playerCharacter.initiative ? 
                                            (this.props.playerCharacter.initiative) : ("0")}
                                        variant="filled"
                                        name="initiative"
                                        onBlur={this.props.characterInputChange}
                                        InputProps={{
                                            readOnly: this.props.modalData.readOnly
                                          }}
                                    />
                                    </div>
                            </Grid>
                            <Grid item xs={4}>
                            <div className="SPEED">   
                                <TextField
                                    id="speed"
                                    defaultValue={this.props.playerCharacter.speed ? 
                                        (this.props.playerCharacter.speed) : ("30")}
                                    label="SPD"
                                    color="secondary"
                                    name="speed"
                                    onBlur={this.props.characterInputChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                            </div>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} item>
                                <TextField
                                    id="health"
                                    defaultValue={this.props.playerCharacter.health ? 
                                        (this.props.playerCharacter.health) : ("0")}
                                    variant="filled"
                                    color="secondary"
                                    name="health"
                                    onBlur={this.props.characterInputChange}
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                                <TextField
                                    id="hit die"
                                    defaultValue={this.props.playerCharacter.hitDie ? 
                                        (`${this.props.playerCharacter.level} d${this.props.playerCharacter.hitDie}`) : 
                                        ("1d8")}
                                    variant="filled"
                                    color="secondary"
                                    name="hitDie"
                                    onBlur={this.props.characterInputChange} 
                                    InputProps={{
                                        readOnly: this.props.modalData.readOnly
                                      }}
                                />
                        </Grid>
                        <Grid spacing={1} item>
                            <p><strong>Inventory: </strong></p>
                            <CurrencyBlock/>
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