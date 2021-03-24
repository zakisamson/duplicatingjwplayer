import React, { Component } from 'react';
import './right-content.css';

function Right_content(props) {
    return(
        <div id="container">   
            <div className="right-content">
                <div className="rc-left-col">
                    <div className="tiny-header-right">{props.tinyheader}</div>
                    <h2>{props.header}</h2>
                    <p>{props.caption}</p>
                    <a href={props.btnlink}>{props.btncaption}</a>
                </div>
                <div className="rc-right-col">
                    <img src={props.imagesource}></img>
                </div>
            </div>
        </div>
    );
}

export default Right_content;