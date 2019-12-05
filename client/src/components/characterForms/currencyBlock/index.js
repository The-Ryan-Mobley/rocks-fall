import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange} from "../../../redux/actions/actions";


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

class CurrencyBlock extends Component {
    state = {
        names: ["CP", "SP", "EP", "GP", "PP"]
    }
    updateCurrency = event => {
        let index = event.target.name;
        let value = event.target.value;
        let currency = this.props.playerCharacter.currency;
        currency.splice(index, 1, value);
        this.props.characterInputChange("currency", currency);
    }
    render() {
        return (
            <Grid item container xs={12} direction="row" justify="space-evently">
                {this.props.playerCharacter.currency.map((currency, index) => (
                    <TextField
                        key={index}
                        id="money"
                        label={this.state.names[index]}
                        defaultValue={currency}
                        variant="filled"
                        color="secondary"
                        name={index}
                        onChange={this.updateCurrency}
                        className="smallInput"
                        InputProps={{
                            readOnly: this.props.modalData.readOnly
                          }}
                    />
                ))}

            </Grid>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrencyBlock);