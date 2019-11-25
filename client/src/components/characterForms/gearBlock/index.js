import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";

import ItemElement from "../itemElement";
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
    render(){
        return(
            <div className="gearBlock box">
                <Grid container spacing={1} direction="row">
                            <Grid item xs={4}>
                                {this.props.armorClass ? (
                                    <div className="AC">
                                    <p>AC:</p>
                                    <Input
                                        id="armor"
                                        defaultValue={this.props.armorClass}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                </div>
                                ) : (
                                    <div className="AC">
                                    <p>AC:</p>
                                    <Input
                                        id="armor"
                                        placeholder="AC"
                                        variant="filled"
                                        color="secondary" 
                                    />
                                </div>
                                )}
                            </Grid>
                            <Grid item xs={4}>
                                {this.props.initiative ? (
                                    <div className="INIT">
                                    <p>INIT:</p>
                                    <Input
                                        id="init"
                                        defaultValue={this.props.initiative}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                    </div>
                                ) : (
                                    <div className="INIT">
                                    <p>INIT:</p>
                                    <Input
                                        id="init"
                                        placeholder="initiative"
                                        variant="filled"
                                        color="secondary" 
                                    />
                                </div>
                                )}
                            </Grid>
                            <Grid item xs={4}>
                            <div className="SPEED">
                                <p>SPEED:</p>
                                {this.props.speed ? (    
                                    <Input
                                        id="speed"
                                        defaultValue={this.props.speed}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                ) : (
                                    <Input
                                        id="speed"
                                        placeholder="speed"
                                        variant="filled"
                                        color="secondary" 
                                    />
                                )}
                                </div>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} item>
                            {this.props.health ? (
                                <Input
                                id="health"
                                defaultValue={this.props.health}
                                variant="filled"
                                color="secondary" 
                                />
                            ) : (
                                <Input
                                id="health"
                                placeholder="HP"
                                variant="filled"
                                color="secondary" 
                                />
                            )}
                            {this.props.hitDie ? (
                                <Input
                                id="hit die"
                                defaultValue={`${this.props.level} d${this.props.hitDie}`}
                                variant="filled"
                                color="secondary" 
                                />
                            ) : (
                                <Input
                                id="hit die"
                                placeholder="hit die"
                                variant="filled"
                                color="secondary" 
                                />
                            )}
                        </Grid>
                        <Grid spacing={1} item>
                            <p><strong>Inventory: </strong></p>
                            {this.props.inventory ? (this.props.inventory.map(item => (
                                <ItemElement 
                                    name = {item.name}
                                    description = {item.description}
                                />
                            ))) : (<p></p>)}
                            <Input
                                id="addItemName"
                                placeholder="name"
                                variant="filled"
                                color="secondary" 
                            />
                            <Input
                                id="addItemDesc"
                                placeholder="description"
                                variant="filled"
                                color="secondary" 
                            />
                            <Button>Add Item</Button>
                        </Grid>

            </div>
        )
    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GearBlock);