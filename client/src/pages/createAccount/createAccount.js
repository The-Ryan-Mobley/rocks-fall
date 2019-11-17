import React, { Component } from "react";
//materialUi imports
import Wrapper from '../../components/wrapper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/api/API"

//use redux functions bound by index


 class CreateAccount extends Component{
     state = {
         sendHome: false
     }
    onTextChange =  event => {
        this.props.userInputChange(event.target.name, event.target.value);
      };
    formSubmit = event =>{
        console.log(this.props.userData)
        event.preventDefault();
        API.newUser(this.props.userData).then(re =>{
            this.props.userCreateAccount();
            this.setState({sendHome: true});

        })

    };
    render(){
        return(
            <Wrapper>
                <Grid container xs={12} className="spacer"></Grid>
                <Grid container xs={3}></Grid>
                <Grid container  xs={6} spacing={1} direction="column" alignItems="center" justify="center"
                    className ="createBody">
                        <Input
                            name="userName"
                            value={this.props.userData.userName}

                            id="filled-required"
                            fullWidth="true"
                            placeholder="username*"
                            variant="filled"
                            color="secondary"
                            className="createInput" 
                            onChange={this.onTextChange}
                        />
                        <Input
                            name="password"
                            value={this.props.userData.password}

                            id="filled-required"
                            fullWidth="true"
                            placeholder="password*"
                            variant="filled"
                            color="secondary" 
                            className="createInput"
                            onChange={this.onTextChange}
                        />
                        <Input
                            name="confirmPassword"
                            value={this.props.userData.confirmPassword}

                            id="filled-required"
                            fullWidth="true"
                            placeholder="password*"
                            variant="filled"
                            color="secondary" 
                            className="createInput lastInput"
                            onChange={this.onTextChange}
                        />
                        <Button variant="contained" className="createButton" 
                        onClick={this.formSubmit} disabled={!(this.props.userData.userName && this.props.userData.password)}>
                            Create
                        </Button>
                </Grid>
                <Grid container xs={3}></Grid>
            </Wrapper>
        );
    }

}

export default CreateAccount;