import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange, characterInputChange} from "../../redux/actions/actions";

import API from "../../utils/api/API";

const mapStateToProps = state => {
    return { 
        userData: state.formManipulation.userData,
        playerCharacter: state.characterReducer.playerCharacter
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange,
      characterInputChange
    },
    dispatch
  );


 class CharacterList extends Component {
    componentDidMount = () => {
        
    }
    deleteCharacter = event => {
        
        const { name, value } = event.currentTarget;
        
        //deleteCharacter(id)
        API.deleteCharacter(name).then(result => {
            if(result) {
                let characterList = this.props.userData.characterList;
                characterList.splice(value, 1);
                this.props.userInputChange("characterList", characterList);
            }

        });



    }
    setCurrentCharacter = event => {
        this.props.userInputChange("currentCharacter", event.currentTarget.name);
    }
    
    render() {
        //need to query for characters and select current character
        //current selection defaults to most recently created
        return(
            <Grid container spacing={1}>
                {this.props.userData.characterList.map( (character , index) => (
                    <div className={this.props.userData.currentCharacter === character._id ? ("box"): ("")}>
                    <Grid item container xs={12} key={index} >
                        <Grid item xs={2}>
                            <Button name={character._id} onClick={this.deleteCharacter} value={index}>X</Button>
                        </Grid>
                        <Grid item xs={7}>
                            <p><strong>{character.characterName}</strong></p><br/>
                            <p>level : {character.level} {character.playerClass}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <Button name={character._id} onClick={this.setCurrentCharacter}>Select</Button>
                            <Button>View</Button>
                        </Grid>
                    </Grid>
                    </div>
                ))}
            </Grid>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterList);