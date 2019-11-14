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
    
}
export {
    StatBlock,
    SavingProfs
}