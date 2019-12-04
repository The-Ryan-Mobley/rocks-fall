import React, {Component} from "react";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

import Wrapper from '../../components/wrapper';

import API from "../../utils/api/API";

const UrlTextField = styled(TextField)({
    width: "100%",
    marginBottom: "5%"
});
const ChangeButton = styled(Button)({
    padding: "2%",
    backgroundColor: "#4A463B",
    color: "#ffffff"

});

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
                <div className="homeBody">
                    <Grid item container xs={12} direction="column" alignItems="center" justify="center">
                        <h1>{this.props.userData.userName}</h1>
                        <img className="bigProfile" src={this.props.userData.userThumbnail}></img>
                        <UrlTextField
                            id="thumbnailInput"
                            label="Enter a Valid Image Url"
                            defaultValue=""
                            variant="filled"
                            color="primary"
                            name="tempUrl"
                            onBlur={this.urlChange}
                            className="smallInput"
                            fullWidth
                        >
                      
                        </UrlTextField>
                        <ChangeButton 
                            disabled={!this.state.tempUrl} 
                            onClick={this.updateUserData}
                        >
                            Change
                        </ChangeButton>

                    </Grid>
                </div>
            </Wrapper>
        )
    }

}