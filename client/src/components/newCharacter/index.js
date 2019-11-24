import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {StatBlock, SavingProfs, GearBlock, ItemElement, BioTraits, CharacterHeader} from "../characterForms";
import "./style.css"

class NewCharacter extends Component {
    render(){
        return (
            <div className="characterSheet">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <CharacterHeader
                            name= {this.state.playerCharacter.name}
                            level = {this.state.playerCharacter.level}
                            playerClass = {this.state.playerCharacter.playerClass}
                            background = {this.state.playerCharacter.background}
                            race = {this.state.playerCharacter.playerRace}
                            alignment = {this.state.playerCharacter.alignment}
                            experience = {this.state.playerCharacter.experience}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <StatBlock
                            stats = {this.state.playerCharacter.stats}
                            statMods = {this.state.statMods}
                        />
                    </Grid>
                        <Grid xs={2} item>
                            <SavingProfs
                                proficiencyBonus={this.state.playerCharacter.proficiencyBonus} 
                                primaryStats={this.state.playerCharacter.primaryStats}
                                skillProficiency={this.state.playerCharacter.skillProficiency}
                            />
                            
                        </Grid>
                   <Grid item xs={4}>
                        <GearBlock 
                            armorClass ={this.state.playerCharacter.armorClass}
                            initiative= {this.state.playerCharacter.initiative}
                            speed = {this.state.playerCharacter.speed}
                            health = {this.state.playerCharacter.health}
                            hitDie= {this.state.playerCharacter.hitDie}
                            level = {this.state.playerCharacter.level}
                            inventory = {this.state.playerCharacter.inventory}
                        />

                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <BioTraits 
                            bio = {this.state.playerCharacter.bio}
                            featsAndTraits = {this.state.playerCharacter.featsAndTraits}
                        />
                    </Grid>
            </Grid>
            </div>
        )
    }

}