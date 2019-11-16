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

//use redux functions bound by index


 class CreateAccount extends Component{
    onTextChange =  event => {
        props.userInputChange(event);
      };
    render(){
        const inputElement = React.createRef();
        return(
            <Wrapper>
                <Grid container xs={12} className="spacer"></Grid>
                <Grid container xs={3}></Grid>
                <Grid container  xs={6} spacing={1} direction="column" alignItems="center" justify="center"
                    className ="createBody">
                        <Input
                            name="userName"
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
                            id="filled-required"
                            fullWidth="true"
                            placeholder="password*"
                            variant="filled"
                            color="secondary" 
                            className="createInput lastInput"
                            onChange={this.onTextChange}
                        />
                        <Button variant="contained" className="createButton">
                            Create
                        </Button>
                </Grid>
                <Grid container xs={3}></Grid>
            </Wrapper>
        );
    }

}
CreateAccount.defaultProps = {
    userData: {
        username: "",
        password: "",
        confirmPassword: "",
    }
  };
export default CreateAccount;