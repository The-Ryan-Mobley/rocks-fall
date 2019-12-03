import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
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
        skillList: [
            "Acrobatics (Dex)", "Animal Handling (Wis)", "Arcana (Int)", 
            "Athletics (Str)", "Deception (Cha)", "History (Int)", 
            "Insight (Wis)", "Intimidation (Cha)", "Investigation (Int)",
            "Medicine (Wis)", "Nature (Int)", "Perception (Wis)",
            "Performance (Cha)", "Persuasion (Cha)", "Religion (Int)",
            "Sleight of Hand (Dex)", "Stealth (Dex)", "Survival (Wis)"
        ]
    }
    dropDownOpen = () => {
        this.setState({skillMenu: true});
    }
    addOption = selectedSkill => {
        this.setState({selectedSkill, skillMenu: false});
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
    render() {
        return(
            <Grid item container xs={12} className="box">
                    {this.props.playerCharacter.skillProficiency.length ? (
                        this.props.playerCharacter.skillProficiency.map(skill => (
                            <Grid item container direction="row">
                                <p>{skill}</p>
                                <Button disabled={this.props.modalData.readOnly}>x</Button>
                            </Grid>
                        ))

                    ) : (<p></p>)}

                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.dropDownOpen}>
                            {this.state.selectedSkill.length ? 
                            (this.state.selectedSkill) : ("Select")}
                        </Button>
                        <Menu
                            id="simple-menu"
                            keepMounted 
                            open={this.state.skillMenu}
                            name="Saving Throw Proficiencies"
                            onChange={this.dropDownOpen}
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
                        <Button onClick={this.pushToRedux}>+</Button>
            </Grid>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SkillProfs);