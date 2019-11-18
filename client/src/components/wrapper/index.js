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

import Heading from "../heading";

import './style.css';

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


class Wrapper extends Component {
    constructor(){
        super();
    }
    
    componentDidMount = () =>{
        const sessionData = localStorage.getItem( "userData" ) || false;
        if(sessionData.userId) {
            this.props.saveSession(sessionData); 
        }
    }
    
    render(){
        return(
            <Box>
                <div className="wrapper">
                    <Grid container direction="row">
                        <Heading/>
                    </Grid>
                        <Container>
                            <Grid container spacing={1}>
                                {this.props.children}
                            </Grid>
                        </Container>
                    <Grid container direction="row">
                        <footer>
                            <div className="header-footer bottom-content">
                                <p className="title">bottomText</p>
                            </div>
                        </footer>
                    </Grid>
                </div>
            </Box>
        );
    }
}

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);