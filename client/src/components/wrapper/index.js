import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
        
    }
    
    render(){
        return(
            <Box>
                <div className="wrapper">
                    <Grid container direction="row">
                        <Heading/>
                    </Grid>
                        <Container>
                            {this.props.children}
                        </Container>
                    <Grid container direction="row">
                        <footer>
                            <div className="header-footer bottom-content">
                            <p className="footerTitle">Created by Ryan Mobley</p>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <a className="links" href="https://github.com/The-Ryan-Mobley">Github</a>
                                    <a className="links" href="https://www.linkedin.com/in/ryan-mobley-b843b5186/">LinkedIn</a>
                                    <a className="links" href="http://www.myryanmobley.com/">Portfolio</a>
                                </Grid>
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