import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

import {ItemElement, InventoryList, CurrencyBlock} from "../";
import "./style.css"

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
                                    <Input
                                        id="armor"
                                        label="AC"
                                        defaultValue={this.props.playerCharacter.armorClass ? 
                                            (this.props.playerCharacter.armorClass) : ("10")}
                                        variant="filled"
                                        color="secondary"
                                        name="armorClass" 
                                        onChange={this.props.characterInputChange}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="INIT">
                                    <Input
                                        id="init"
                                        label="INIT"
                                        defaultValue={this.props.playerCharacter.initiative ? 
                                            (this.props.playerCharacter.initiative) : ("0")}
                                        variant="filled"
                                        color="secondary" 
                                        name="initiative"
                                        onChange={this.props.characterInputChange}
                                    />
                                    </div>
                            </Grid>
                            <Grid item xs={4}>
                            <div className="SPEED">   
                                <Input
                                    id="speed"
                                    defaultValue={this.props.playerCharacter.speed ? 
                                        (this.props.playerCharacter.speed) : ("30")}
                                    variant="filled"
                                    color="secondary"
                                    name="speed"
                                    onChange={this.props.characterInputChange} 
                                />
                            </div>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} item>
                                <Input
                                    id="health"
                                    defaultValue={this.props.playerCharacter.health ? 
                                        (this.props.playerCharacter.health) : ("0")}
                                    variant="filled"
                                    color="secondary"
                                    name="health"
                                    onChange={this.props.characterInputChange} 
                                />
                                <Input
                                    id="hit die"
                                    defaultValue={this.props.playerCharacter.hitDie ? 
                                        (`${this.props.playerCharacter.level} d${this.props.playerCharacter.hitDie}`) : 
                                        ("1d8")}
                                    variant="filled"
                                    color="secondary"
                                    name="hitDie"
                                    onChange={this.props.characterInputChange} 
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