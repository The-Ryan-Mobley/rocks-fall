import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {StatBlock, SavingProfs, GearBlock} from "../characterForms";
import "./style.css"

export default class CharacterSheet extends Component{
    state = {
        playerCharacter:{
            name: "lorem",
            level: 3,
            health: 25,
            hitDie: 10,
            experience: 0,
            stats: [12,16,14,10,9,10],
            primaryStats: ["strength","dexterity"],
            playerClass: "Fighter",
            subClass: "Champion",
            playerRace: "Halfling",
            background: "Urchin",
            bio: "Just a fighter",
            alignment: "good",
            currency: [15,30,0,6,0],
            attunementSlots: ["Open","Open","Boots of Flying"],
            proficiencyBonus: 2,
            armorClass: 15,
            initiative: 3,
            speed: 30,
            skillProficiency: ["Athletics","Acrobatics","Stealth"],
            toolProficiency: "Playing Cards",
            languages: ["Common","Halfling"],
            inventory: [{name: "backpack", description: "holds stuff"}],
            featsAndTraits: [{name: "Action Surge", description: "take an extra action this turn refreshes on short rests"}]
            
        },
        statMods: []
    }
    componentDidMount(){
        let statMods = this.state.playerCharacter.stats.map(stat =>{
            if(stat === 10){
                return 0;
            } else if(stat > 10) {
                let modValue = Math.floor(stat / 4);
                return modValue;
            } else if (stat < 10) {
                let modValue = Math.floor((stat - 10)/2);
                return modValue;
            }
        })
        this.setState({
            statMods: statMods
        });
        //set playercharacter data
    }
    render(){
        return(
            <Grid container spacing={1}>
                    <Grid item xs={1}>
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
                        />

                    </Grid>
                   <div className="characterSummary box">
                        <Grid 
                            item 
                            xs={5}
                            spacing={3}
                        >
                            <p>placeholder</p>
                        </Grid>
                   </div>
                
                
            </Grid>
        )
    }
}