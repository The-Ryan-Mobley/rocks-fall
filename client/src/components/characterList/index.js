import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
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

const ListButton = styled(Button)({
    fontSize: "0.6rem",
    backgroundColor: "#181713b9",
    color: "#ffffff",
    padding: "1%"
  });
const ListGrid = styled(Grid)({
    marginTop: "",
    position: "relative",
    marginBottom: "1%",
    backgroundColor: "#ffffff",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "1%",
    height: "20%"

});

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
        this.props.userInputChange("currentCharacter", JSON.parse(event.currentTarget.value));
    }
    handleModal = event => {
        const { name, value } = event.currentTarget;
        let modalFlag = undefined;

        switch(name) {
            case "sheetModal" : {
                API.findCharacter(value).then( result => {
                    console.log(result.data[0]);
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
            <Grid container alignItems="flex-start" justify="flex-start" className="characterList">
                {this.props.modalData.loadingList ? 
                    (<p className="loader whiteText">Loading...</p>) : 
                    (<p className="loader whiteText">Characters</p>)
                }
                
                {this.props.userData.userId ? (
                    this.props.userData.characterList.map( (character , index) => (
                        <ListGrid item container xs={12} md={12} key={index} spacing={0} 
                            justify="flex-start" alignItems="baseline" className="characterBlock">
                            <Grid item xs={4} sm={2} md={3}>
                                <Button 
                                    name={character._id} 
                                    onClick={this.deleteCharacter} 
                                    value={index}
                                    className="deleteButton"
                                >
                                    X
                                </Button>
                            </Grid>
                            <Grid item xs={8} sm={4} md={9}>
                                <p className="characterName"><strong>{character.characterName}</strong></p>
                                <p>level : {character.level} {character.playerClass}</p>
                            </Grid>
                            
                            <Grid item container xs={12} sm={4} md={12} justify="center" alignItems="center" spacing={1}>
                                <ListButton 
                                    name={character._id} 
                                    value={JSON.stringify(character)} 
                                    onClick={this.setCurrentCharacter}
                                >
                                    Select
                                </ListButton>
                                <ListButton 
                                    name="sheetModal" 
                                    value={character._id} 
                                    onClick={this.handleModal.bind(this)}
                                >
                                    View
                                </ListButton>
                            </Grid>
                        </ListGrid>
                    ))) : 
                    (
                        <div className="noCharacters">
                            <p className="whiteText">login to view characters</p>
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