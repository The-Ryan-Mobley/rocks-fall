import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class RecentlyPlayed extends Component {
    constructor(){
        super();
        this.state = {
            tab: "characters",
            recentArr: [],
            userId: ""
        }
    }

    render(){
        return(

            <Grid container item xs={12}>
                {this.state.userId ? (
                    <Grid container spacing={1}>
                        <Button variant="contained" >
                            Characters
                        </Button>
                        <Button variant="contained" >
                            Lobbies
                        </Button>
                    </Grid>
                    <Grid container spacing={1}>
                        {this.state.recentArr.map(item => {
                            <div>
                                <img src={i.thumbnailUrl}></img>
                            <h2>{i.name}</h2>
                            <p><storng>{i.level} {i.playerClass}</storng></p>
                            <p>{i.playerRace}</p>

                                
                            </div>
                        })}

                    </Grid>
                ) : 
                (<p>Login to view characters</p>)}

            </Grid>
        )
    }
}