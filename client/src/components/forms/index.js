import React, {Component} from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './style.css';

export function Input(props) {
    return(
        <div className="row">
            <input className="inputField" {...props} />
        </div> 
    );
}
