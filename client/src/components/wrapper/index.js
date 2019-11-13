import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './style.css';

export default class Wrapper extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    
    componentDidMount = () =>{
    }
    
    render(){
        return(
            <Box>
                <div className="wrapper">
                    <Grid container direction="row">
                        <header>
                            <h1>Top Text</h1>
                        </header>
                    </Grid>
                        <Container>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    {this.props.children}
                                </Grid>
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