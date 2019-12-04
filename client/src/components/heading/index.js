import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin, userCreateAccount, saveSession} from "../../redux/actions/actions";
import "./style.css";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
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

  const AccountButton = styled(Button)({
      marginTop: "1%",
      padding: "2%",
      backgroundColor: "#4A463B",
      color: "#ffffff",
  });



class Heading extends Component {
    constructor() {
        super();
        this.state = {
            createUser: false,
            sendHome: false,
            loginUser: false,
            logoutUser: false,
            sendProfile: false

        }

    }
    componentDidMount = () =>{
        

    }
    buttonClick = event =>{

        const { name } = event.currentTarget;
        this.setState({
            [name]: true
        });
    }
    logoutClick = event => {
        const { name } = event.target;
        this.props.userCreateAccount();
        localStorage.removeItem("userData");
        this.setState({
            [name]: true
        });
    }
    render() {
        return(
            <header>
                <Grid container spacing={1}>
                <Grid item xs={8} md={10}>
                <div className="titleBlock">
                        <a onClick={this.buttonClick} name="sendHome" className="title">Rocks Fall </a>
                        <p>subheader text</p>
                    </div>
                {this.state.sendHome ? (<Redirect to="/" />) : (<p></p>)}
                
                </Grid>
                <Grid item container xs={4} md={2} >
                    {this.props.userData.userId ? (
                        <Grid item container xs={12} direction="row"spacing={0} justify="flex-end">
                            
                            <Grid item xs={4} mt={1}>
                                <img src={this.props.userData.userThumbnail} alt="profile" className="profileThumbnail inHeader"></img>
                            </Grid>
                            <Grid item xs={8}>
                                <div className="loggedInDat">
                                    <p>{this.props.userData.userName}</p>
                                    {this.state.sendProfile ? 
                                        (<Redirect to={"/profile/"+this.props.userData.userName}/>) : 
                                        (<AccountButton className="scaledButton" name="sendProfile" onClick={this.buttonClick}>Account</AccountButton>)}
                                    {this.state.logoutUser ? (<Redirect to="/"/>) : (
                                    <AccountButton
                                        className="scaledButton"
                                        variant="contained"
                                        onClick={this.logoutClick} 
                                        name="logoutUser" >
                                        Logout
                                    </AccountButton>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
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
                </Grid>
            </header>
        )
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Heading);