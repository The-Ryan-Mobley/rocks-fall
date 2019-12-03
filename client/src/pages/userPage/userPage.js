import React, {Component} from "react";

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

import Wrapper from '../../components/wrapper';

import API from "../../utils/api/API";

export default class UserPage extends Component {
    state={
        tempUrl: ""
    }
    urlChange = event => {
        const {value} = event.target;
        this.setState({
            tempUrl: value
        });
    }
    updateUserData = () => {
        API.updateCharacterThumbData(this.props.userData.userId, this.state.tempUrl).then(response => {
            if(response.status === 200) {
                this.props.userInputChange("userThumbnail", this.state.tempUrl);
                this.setState({tempUrl: ""});
                let sessionData = JSON.parse(localStorage.getItem( "userData" ));
                sessionData.userThumbnail = this.props.userData.userThumbnail;
                localStorage.setItem( "userData", JSON.stringify(sessionData));
            }
        })
    }
    render() {
        return (
            <Wrapper>
                <Grid item container xs={12} direction="column" alignItems="center" justify="center">
                    <h1>{this.props.userData.userName}</h1>
                    <img src={this.props.userData.userThumbnail}></img>
                    <TextField
                        id="thumbnailInput"
                        label="Enter a Valid Image Url"
                        defaultValue=""
                        variant="filled"
                        color="secondary"
                        name="tempUrl"
                        onBlur={this.urlChange}
                        className="smallInput"
                    >
                      
                    </TextField>
                    <Button disabled={!this.state.tempUrl} onClick={this.updateUserData}>Change</Button>

                </Grid>
            </Wrapper>
        )
    }

}