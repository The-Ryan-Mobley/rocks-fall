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
import {userInputChange,  userLogin, userCreateAccount, saveSession} from "../../redux/actions/actions";
import "./style.css";

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
      userLogin,
      userCreateAccount
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
    componentDidMount = () =>{
        

    }
    buttonClick = event =>{

        const { name } = event.currentTarget;
        console.log(event.target);
        this.setState({
            [name]: true
        });
        console.table(this.state);
    }
    logoutClick = event => {
        console.log(this.props.userData);
        const { name } = event.target;
        this.props.userCreateAccount();
        localStorage.setItem( "userData", this.props.userData);
        this.setState({
            [name]: true
        });
    }
    render() {
        return(
            <header>
                <Grid item xs={8}>
                <div className="titleBlock">
                        <a onClick={this.buttonClick} name="sendHome" className="title">Rocks Fall </a>
                        <p>subheader text</p>
                    </div>
                {this.state.sendHome ? (<Redirect to="/" />) : (<p></p>)}
                </Grid>
                <Grid item xs={4}>
                    {this.props.userData.userId ? (
                        <div className="loggedUser">
                            <Grid item xs={1}>
                                <img src={this.props.userData.userThumbnail} alt="profile" className="profileThumbnail"></img>
                            </Grid>
                            <Grid item xs={3}>
                            <p>Logged in as: {this.props.userData.userName}</p>
                            {this.state.logoutUser ? (<Redirect to="/"/>) : (
                            <Button variant="contained" className="createButton" 
                            onClick={this.logoutClick} 
                                name="logoutUser" >
                                Logout
                            </Button>
                            )}
                            </Grid>
                        </div>
                    ): (
                    <div className="noUser">
                        {this.state.createUser ? (<Redirect to="/createAccount"/>) : (
                            <Button variant="contained" className="createButton" 
                            onClick={this.buttonClick} 
                                name="createUser" >
                                Create
                            </Button>
                        )}
                        {this.state.loginUser ? (<Redirect to="/login"/>) : (
                            <Button variant="contained" className="createButton" 
                            onClick={this.buttonClick} 
                            name="loginUser" >
                                Login
                            </Button>
                        )}

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