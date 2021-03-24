import React, { Component } from 'react';
import './left-content.css';

function Left_content(props) {
    return(
        <div id="container">   
            <div className="left-content">
                <div className="lc-left-col">
                    <img src={props.imagesource}></img>
                </div>
                <div className="lc-right-col">
                    <div className="tiny-header-right">{props.tinyheader}</div>
                    <h2>{props.header}</h2>
                    <p>{props.caption}</p>
                    <a href={props.btnlink}>{props.btncaption}</a>
                </div>
            </div>
        </div>
    );
}

export default Left_content;