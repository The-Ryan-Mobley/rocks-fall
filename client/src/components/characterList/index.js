import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    userInputChange, 
    characterInputChange,
    setCharacterData, 
    swapModalBool, 
    closeModals
} from "../../redux/actions/actions";

import API from "../../utils/api/API";

const mapStateToProps = state => {
    return { 
        userData: state.formManipulation.userData,
        playerCharacter: state.characterReducer.playerCharacter,
        modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange,
      characterInputChange,
      setCharacterData,
      swapModalBool, 
      closeModals
    },
    dispatch
  );


 class CharacterList extends Component {
    componentDidMount = () => {
        
    }
    deleteCharacter = event => {

        const { name, value } = event.currentTarget;
        API.deleteCharacter(name).then(result => {
            if(result) {
                let characterList = this.props.userData.characterList;
                characterList.splice(value, 1);
                this.props.userInputChange("characterList", characterList);
            }

        });

    }
    setCurrentCharacter = event => {
        console.log(JSON.parse(event.currentTarget.value));
        this.props.userInputChange("currentCharacter", JSON.parse(event.currentTarget.value));
    }
    handleModal = event => {
        const { name, value } = event.currentTarget;
        let modalFlag = undefined;

        switch(name) {
            case "sheetModal" : {
                API.findCharacter(value).then( result => {
                    modalFlag = !this.props.modalData.sheetModal;
                    this.props.setCharacterData(result.data[0]);
                    this.props.swapModalBool("sheetModal", modalFlag);
                    
                });
                break;
                
            }
            default: {
                this.props.closeModals();
                break;
            }
        }

    }
    render() {
        return(
            <Grid container spacing={1}>
                {this.props.userData.userId ? (
                    this.props.userData.characterList.map( (character , index) => (
                        <div className={this.props.userData.currentCharacter._id === character._id ? ("box"): ("")}>
                        <Grid item container xs={12} key={index} >
                            <Grid item xs={2}>
                                <Button name={character._id} onClick={this.deleteCharacter} value={index}>X</Button>
                            </Grid>
                            <Grid item xs={7}>
                                <p><strong>{character.characterName}</strong></p><br/>
                                <p>level : {character.level} {character.playerClass}</p>
                            </Grid>
                            <Grid item xs={3}>
                                <Button name={character._id} value={JSON.stringify(character)} onClick={this.setCurrentCharacter}>Select</Button>
                                <Button name="sheetModal" value={character._id} onClick={this.handleModal.bind(this)}>View</Button>
                            </Grid>
                        </Grid>
                        </div>
                    ))) : 
                    (
                        <div className="noCharacters">
                            <p>login to view characters</p>
                        </div>

                    )}
            </Grid>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterList);