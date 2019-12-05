import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {characterInputChange, setPrimaryStats, setStringArray} from "../../../redux/actions/actions";


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
      setPrimaryStats,
      setStringArray
    },
    dispatch
  );

class SkillProfs extends Component {
    state = {
        skillMenu: false,
        selectedSkill: "",
        anchorEl: "",
        skillList: [
            "Acrobatics (Dex)", "Animal Handling (Wis)", "Arcana (Int)", 
            "Athletics (Str)", "Deception (Cha)", "History (Int)", 
            "Insight (Wis)", "Intimidation (Cha)", "Investigation (Int)",
            "Medicine (Wis)", "Nature (Int)", "Perception (Wis)",
            "Performance (Cha)", "Persuasion (Cha)", "Religion (Int)",
            "Sleight of Hand (Dex)", "Stealth (Dex)", "Survival (Wis)"
        ]
    }
    dropDownOpen = event => {
        this.setState({
            anchorEl: event.target,
            skillMenu: true
            
        });
    }
    addOption = selectedSkill => {
        this.setState({
            selectedSkill, 
            skillMenu: false,
            anchorEl: ""
        });
    }
    pushToRedux = () => {
        const selectedSkill = this.state.selectedSkill;
        let skillProficiency = this.props.playerCharacter.skillProficiency;
        if(skillProficiency.indexOf(selectedSkill) === -1) {
            skillProficiency.push(selectedSkill);
            this.props.setStringArray("skillProficiency", skillProficiency);
            this.setState({selectedSkill: ""})
        }
    }
    remove = skill => {
        let skillProficiency = this.props.playerCharacter.skillProficiency;
        skillProficiency.splice(skillProficiency.indexOf(skill), 1);
        this.props.characterInputChange("skillProficiency", skillProficiency);

    }
    handleClickAway = () => {
        this.setState({skillMenu: false});
    }
    render() {
        return(
            <div className="skillProfs sheetBox"> 
            <Grid item container xs={12}>
                <p className="centered fullWidth"><strong>Skill Proficiencies</strong></p>
                    {this.props.playerCharacter.skillProficiency.length ? (
                        this.props.playerCharacter.skillProficiency.map((skill, index) => (
                            <Grid item container direction="row" key={index}>
                                <Button 
                                    disabled={this.props.modalData.readOnly}
                                    onClick={this.remove.bind(this, skill)}
                                    className="centered fullWidth"
                                >
                                   {skill} X
                                </Button>
                            </Grid>
                        ))

                    ) : (<p></p>)}

                        
                        <Button 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            className="centered fullWidth"
                            onClick={this.dropDownOpen}>
                            {this.state.selectedSkill.length ? 
                            (this.state.selectedSkill) : ("Select")}
                        </Button>
                        <Menu
                            id="simple-menu"
                            keepMounted 
                            open={this.state.skillMenu}
                            name="Saving Throw Proficiencies"
                            keepMounted
                            anchorEl={this.state.anchorEl}
                            onChange={this.dropDownOpen}
                            onClose={this.handleClickAway}
                            disabled={this.props.modalData.readOnly}
                        >
                            {this.state.skillList.map((skill) => (
                                <MenuItem
                                    key={skill}
                                    value={skill}
                                    onClick={this.addOption.bind(this, skill)}
                                >
                                    {skill}
                                </MenuItem>
                            ))}
                        </Menu>
                        <Button onClick={this.pushToRedux} className="centered fullWidth">+</Button>
            </Grid>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SkillProfs);