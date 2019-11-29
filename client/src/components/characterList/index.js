import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin, userCreateAccount, saveSession} from "../../redux/actions/actions";

class CharacterList extends Component {
    render() {
        return(
            <Grid container spacing={1}>
                
            </Grid>
        )
    }
}