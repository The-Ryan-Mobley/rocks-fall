import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setStringArray} from "../../../redux/actions/actions";


const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      characterInputChange,
      setStringArray
    },
    dispatch
  );

class InventoryList extends Component {
    removeFromRedux = value => {
        let inventory = this.props.playerCharacter.inventory;
        let index = inventory.indexOf(value);
        inventory.splice(index, 1);
        this.props.setStringArray("inventory", inventory);

    }

    render() {
        return(
            <div className="inventoryList sheetBox">
            <Grid item container>
                {this.props.playerCharacter.inventory.map((item, index) => (
                    <Grid item container xs={12} key={index}>
                        <Grid item xs={10}>
                            <p><strong>{item.name}: </strong></p>
                            <p>{item.description}</p>
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                disabled={this.props.modalData.readOnly} 
                                onClick={this.removeFromRedux.bind(this, item)}
                            >
                                x
                            </Button>
                        </Grid>

                    </Grid>
                    
                ))}

            </Grid>
            </div>
        )

    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InventoryList);