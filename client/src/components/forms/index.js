import React, {Component} from 'react';
import './style.css';

export function Input(props) {
    return(
        <div className="row">
            <input className="inputField" {...props} />
        </div> 
    );
}
export function SubmitBtn(props) {
    return(
        <button {...props} className="button SubmitBtn">
            {props.children}
        </button>
    );
}