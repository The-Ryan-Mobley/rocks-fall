import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import "./style.css"

class StatBlock extends Component {
    render(){
        return(
            <div className="statBlock box">
                {this.props.stats.map(stat => (   
                    <div className="singleBlock">
                        <Input
                            id={this.props.stats.indexOf(stat)}
                            placeholder={stat}
                            variant="filled"
                            color="secondary" 
                        />
                        <p>{this.props.statMods[this.props.stats.indexOf(stat)]}</p>
                    </div>
                ))}
            </div>

        );
    }
}
class SavingProfs extends Component{
    render(){
        return(
            <div className="savingProfs box">
                <p>Proficiency Bonus</p>
            <p>{this.props.proficiencyBonus}</p>
            <p><strong>Saving Throws</strong></p>
            <div className="savingThrows">
                {this.props.primaryStats.map(stat => (
                <Input
                    id={this.props.primaryStats.indexOf(stat)}
                    placeholder={stat}
                    variant="filled"
                    color="secondary" 
                />
                ))}
                <Input
                    id="add saving throw"
                    label="Add"
                    placeholder="Add"
                    variant="filled"
                    color="secondary" 
                />
            </div>
                <div className="Skills box">
                    {this.props.skillProficiency.map(skill => (
                        <Input
                            id={this.props.skillProficiency.indexOf(skill)}
                            placeholder={skill}
                            variant="filled"
                            color="secondary" 
                            />
                    ))}
                        <Input
                            id="add a skill Proficiency"
                            label="Add"
                            variant="filled"
                            color="secondary" 
                        />
                    </div>
            </div>

        );
    }
}
class GearBlock extends Component {
    render(){
        return(
            <div className="gearBlock">
                <Grid spacing={3} direction="row">
                            <p><strong>AC: </strong></p>
                            <Input
                                id="armor"
                                placeholder={this.props.armorClass}
                                variant="filled"
                                color="secondary" 
                            />
                            <p><strong>INITIATIVE: </strong></p>
                            <Input
                                id="armor"
                                placeholder={this.props.initiative}
                                variant="filled"
                                color="secondary" 
                            />
                            <p><strong>SPEED: </strong></p>
                            <Input
                                id="armor"
                                placeholder={this.props.speed}
                                variant="filled"
                                color="secondary" 
                            />
                        </Grid>
                        <Grid 
                            spacing={1}
                            item
                        >
                            <Input
                                id="health"
                                placeholder={this.props.health}
                                variant="filled"
                                color="secondary" 
                            />
                            <Input
                                id="hit die"
                                placeholder={`${this.props.level} d ${this.props.hitDie}`}
                                variant="filled"
                                color="secondary" 
                            />
                        </Grid>

            </div>
        )
    }

}
export {
    StatBlock,
    SavingProfs,
    GearBlock
}