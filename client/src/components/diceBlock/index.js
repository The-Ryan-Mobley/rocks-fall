import React, {Component} from "react";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    swapModalBool, 
    closeModals, 
    userInputChange,
    lobbyMessageReset,
    lobbyMessageAdd,
    lobbyMessageChange
} from "../../redux/actions/actions";

import socket from "../../utils/api/socket";

//page


const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
      modalData: state.modalControls.modalData,
      lobbyData: state.lobbyManipulation.lobbyData,
      
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      swapModalBool,
      closeModals,
      userInputChange,
      lobbyMessageReset,
      lobbyMessageAdd,
      lobbyMessageChange
    },
    dispatch
  );

class DiceBlock extends Component {
    state = {
        diceLabel: [4, 6, 8, 10, 12, 20]
    }
    updateDice = event => {
        const {name, value} = event.target;
        let diceArray = this.props.modalData.diceArray;
        diceArray.splice(name, 1, value);
        this.props.swapModalBool("diceArray", diceArray);
    }
    rollDice = () => {
        console.log('click');
        console.log(this.props.modalData.diceArray);
        let diceArray = this.props.modalData.diceArray;
        let diceTotal = 0;
        let diceString = ``
        diceArray.forEach(dice => {
            for(let i = 0; i < dice; i++){
                let roll = Math.floor(Math.random() * dice) + 1;
                diceString += (` + ${roll}`);
                diceTotal += roll;
            }
        });
        const messageString = `${this.props.userData.userName} rolled ${diceString} = ${diceTotal}`;
        this.postDiceRoll(messageString);

    }
    postDiceRoll = (roll) => {
        socket.postMessage(this.props.lobbyData.lobbyName, roll);
        let msg ={
            key: Math.floor(Math.random() * 1000000),
            body: roll
        }
        this.props.lobbyMessageReset();
        let messages = this.props.lobbyData.chat.messages;
        messages.push(msg);
        this.props.lobbyMessageAdd(messages);
    }
    render() {
        return (
            <Grid container direction="row fullWidth">
                {this.props.modalData.diceArray.map((dice, index) => (
                    <TextField
                        key={index}
                        id="dice"
                        label={`d${this.state.diceLabel[index]}`}
                        defaultValue=""
                        variant="filled"
                        color="primary"
                        name={index}
                        onBlur={this.updateDice}
                        className="smallInput"
                    />
                ))}
                <Button onClick={this.rollDice} className="saveButton">Roll</Button>
            </Grid>
        )
    }
}

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiceBlock);