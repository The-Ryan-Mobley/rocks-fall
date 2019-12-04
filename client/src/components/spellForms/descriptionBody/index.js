import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { 
        playerCharacter: state.characterReducer.playerCharacter,
        spellData: state.spellReducer.spellData,

     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { 
    },
    dispatch
  );

class DescriptionBody extends Component {
    

    render(){
        let viewedSpell = {};
        if(this.props.spellData.viewedSpell) {
            viewedSpell = this.props.spellData.viewedSpell;
        }
        return(
            <div className="descriptionBody">
            <Grid container item spacing={1}>
                {this.props.spellData.viewedSpell._id ? 
                    (<Grid container item xs={12}>
                        <Grid container item xs={6} direction="column">
                            <p><strong>Name: </strong>{viewedSpell.name}</p>
                            <p><strong>Casting Time: </strong>{viewedSpell.castingTime}</p>           
                            <p><strong>Range :</strong>{viewedSpell.range}</p>
                            <p><strong>Components: </strong>{viewedSpell.components}</p>
                            <p><strong>Duration: </strong>{viewedSpell.duration}</p>
                            <p><strong>Ritual: </strong>{viewedSpell.ritual}</p>
                            <p><strong>Concentration: </strong>{viewedSpell.concentration}</p>
                            <p><strong>Spell Level: </strong>{viewedSpell.spellLevel}</p>
                            <p><strong>School of Magic: </strong>{viewedSpell.school}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p>{viewedSpell.description}</p><br/>
                            {viewedSpell.higherLevel ? 
                                (<p><strong>At Higher Levels: </strong> {viewedSpell.higherLevel}</p>) : 
                                (<p></p>)}
                        </Grid>

                    </Grid>) : 
                    (<p>Select a spell to see the description here</p>)}

            </Grid>
            </div>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DescriptionBody);