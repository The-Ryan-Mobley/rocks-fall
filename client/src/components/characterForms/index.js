import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import "./style.css"
class SheetHeader extends Component {

}
class StatBlock extends Component {
    render(){
        return(
            <div className="statBlock box">
                {this.props.stats.map(stat => (   
                    <div className="singleBlock">
                        <Input
                            id={this.props.stats.indexOf(stat)}
                            defaultValue={stat}
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
                    defaultValue={stat}
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
                            defaultValue={skill}
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
            <div className="gearBlock box">
                <Grid container spacing={1} direction="row">
                            <Grid item xs={4}>
                                <div className="AC">
                                    <p>AC:</p>
                                    <Input
                                        id="armor"
                                        defaultValue={this.props.armorClass}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="INIT">
                                    <p>INIT:</p>
                                    <Input
                                        id="armor"
                                        defaultValue={this.props.initiative}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="SPEED">
                                    <p>SPEED:</p>
                                    <Input
                                        id="armor"
                                        defaultValue={this.props.speed}
                                        variant="filled"
                                        color="secondary" 
                                    />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid spacing={1} item>
                            <Input
                                id="health"
                                defaultValue={this.props.health}
                                variant="filled"
                                color="secondary" 
                            />
                            <Input
                                id="hit die"
                                defaultValue={`${this.props.level} d${this.props.hitDie}`}
                                variant="filled"
                                color="secondary" 
                            />
                        </Grid>
                        <Grid spacing={1} item>
                            <p><strong>Inventory: </strong></p>
                            {this.props.inventory.map(item => (
                                <ItemElement 
                                    name = {item.name}
                                    description = {item.description}
                                />
                            ))}
                            <Input
                                id="addItemName"
                                placeholder="name"
                                variant="filled"
                                color="secondary" 
                            />
                            <Input
                                id="addItemDesc"
                                placeholder="description"
                                variant="filled"
                                color="secondary" 
                            />
                        </Grid>

            </div>
        )
    }

}
class ItemElement extends Component {
    render(){
        return(
            <div className="itemDetails">
                <p className="itemName"><strong>{this.props.name}</strong></p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
class BioTraits extends Component {
    render(){
        return(
            <div className="bioTraits box">
                <div className="bio">
                    <h3>Biography:</h3>
                    <p>{this.props.bio}</p>
                </div>
                <div className="featsAndTraits box">
                {this.props.featsAndTraits.map(trait => (
                    <ListItemText
                        primary={trait.name}
                        secondary={trait.description}
                    />
                ))}
                </div>
            </div>
        );
    }
}
class CharacterHeader extends Component{
    render(){
        return(
            <div className="characterHeader box">
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={3}>
                        <div classname="charName box">
                            <h1>{this.props.name}</h1>
                        </div>
                    </Grid>
                    <Grid item xs={9} direction="row">
                        <div className="headerInfoTop box">
                            <Grid container item xs={12} direction="row" spacing={1}>
                                <p>{this.props.playerClass} level: {this.props.level}</p>
                                <p>{this.props.background}</p>
                            </Grid>
                        </div>
                        <div className="headerInfoBottom box">
                            <Grid container item xs={12} direction="row" spacing={1}>                            
                                <p>{this.props.race}</p>
                                <p>{this.props.alignment}</p>
                                <p>{this.props.experience}</p>
                            </Grid>
                        </div>
                        
                    </Grid>

                </Grid>

            </div>
        )
    }
}


export {
    StatBlock,
    SavingProfs,
    GearBlock,
    ItemElement,
    BioTraits,
    CharacterHeader
}