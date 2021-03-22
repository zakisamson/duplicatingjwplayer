import React, { Component } from 'react';
import './hero.css'

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="hero-section">
                <div className="content">
                    <h1 className="heading">Unlock the power of video <span></span></h1>
                    <p className="subheader">Grow your business with JW Player's flexible platform of video services, powered by billions of signals from across our vast network.</p>    
                    <a id="btn-primary" href="#">Get started</a>
                    <iframe width="1080" height="652.5" src="https://www.youtube.com/embed/D-h8L5hgW-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}
 
export default Hero;