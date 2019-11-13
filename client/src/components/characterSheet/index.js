import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
export default class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.state = {
            playerCharacter: undefined,
            statMods: []
        }
        
    }
    componentDidMount(){
        let playerCharacter = {
            name: "lorem",
            level: 3,
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
            skillProficiency: ["Athletics","Acrobatics","Stealth"],
            toolProficiency: "Playing Cards",
            languages: ["Common","Halfling"],
            inventory: [{name: "backpack", description: "holds stuff"}],
            featsAndTraits: [{name: "Action Surge", description: "take an extra action this turn refreshes on short rests"}]
            
        }
        let statMods = playerCharacter.stats.map(stat =>{
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
            playerCharacter,
            statMods
        });
        //set playercharacter data
    }
    render(){
        return(
            <Grid container item xs={12} spacing={3} direction="column">
                <div className="sheetModal">
                    <Grid xs={1}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                        <div className="statBlock">
                            {this.state.playerCharacter.stats.map(stat => (   
                                <div className="singleBlock">
                                    <Input
                                        id={this.playerCharacter.stats.indexOf(stat)}
                                        placeholder={stat}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                    <p>{this.state.statMods[this.playerCharacter.stats.indexOf(stat)]}</p>
                                </div>
                             ))}
                        </div>
                    </Grid>
                    <Grid xs={2}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                        <div className="Saving Throws">
                            <p>Proficiency Bonus</p>
                            <p>{this.playerCharacter.proficiencyBonus}</p>
                            <p><strong>Saving Throws</strong></p>
                            {this.state.playerCharacter.primaryStats.map(stat => (
                                <Input
                                id={this.playerCharacter.primaryStats.indexOf(stat)}
                                placeholder={stat}
                                variant="filled"
                                color="secondary" 
                                />
                            ))}
                            <Input
                                id="add saving throw"
                                label="Add"
                                variant="filled"
                                color="secondary" 
                            />
                        </div>
                        <div className="Skills">
                            
                        </div>
                    </Grid>
                </div>
                
            </Grid>
        )
    }
}