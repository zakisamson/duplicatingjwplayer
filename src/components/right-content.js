import React, { Component } from 'react';
import './right-content.css'

function Right_content(props) {
    return(
        <div className="right-content">   
            <div className="content">
                <div className="left-col">
                    <div>{props.tinyheader}</div>
                    <h2>{props.header}</h2>
                    <p>{props.caption}</p>
                    <a href="#">{props.btncaption}</a>
                </div>
                <div className="right-col">
                    <img src={props.imagesource}></img>
                </div>
            </div>
        </div>
    );
}

export default Right_content;