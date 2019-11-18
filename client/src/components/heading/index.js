import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin, saveSession} from "../../redux/actions/actions";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
      test: state.formManipulation.ryanStuff,
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveSession,
      userInputChange,
      userLogin
    },
    dispatch
  );



class Heading extends Component {
    constructor() {
        super();
        this.state = {
            createUser: false,
            sendHome: false,
            loginUser: false,
            logoutUser: false,

        }

    }
    buttonClick = event =>{
        const { name} = event.target;
        this.setState({
            [name]: true
        });
    }
    render() {
        return(
            <header>
                <Grid item xs={8}>
                <a onClick={this.buttonClick} name="sendHome" className="title headLink">Rocks Fall </a>
                    <p>subheader text</p>
                </Grid>
                <Grid item xs={4}>
                    {this.props.userData.userID ? (<p>logout</p>): (
                    <div className="noUser">
                        <Button variant="contained" className="createButton" 
                        onClick={this.buttonClick} 
                        name="createUser" >
                            Create
                        </Button>
                        <Button variant="contained" className="createButton" 
                        onClick={this.buttonClick} 
                        name="loginUser" >
                            Login
                        </Button>

                    </div>
                    )}
                                
                </Grid>
            </header>
        )
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Heading);