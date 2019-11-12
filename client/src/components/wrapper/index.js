import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            <Container>
                <div className="wrapper">
                    <Row>
                        <header>
                            <h1></h1>
                        </header>
                    </Row>
                    <Row>
                        <Col md={12}>
                            {this.props.children}
                        </Col>
                    </Row>
                    <Row>
                        <footer>
                            <div className="header-footer bottom-content">
                                <p className="title">bottomText</p>
                            </div>
                        </footer>
                    </Row>
                </div>
            </Container>
        );
    }
}