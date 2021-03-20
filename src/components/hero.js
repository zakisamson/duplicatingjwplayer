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
                    <div className="heading-container"> 
                        <h1>Unlock the power of video <span></span></h1>
                    </div>
                    <div className="subheader">
                        <p>Grow your business with JW Player's flexible platform of video services, powered by billions of signals from across our vast network.</p>
                    </div>
                    <div className="btn">
                        <a id="btn-primary" href="#">Get started</a>
                    </div>
                    <div className="video">
                    <iframe width="1080" height="720" src="https://www.youtube.com/embed/D-h8L5hgW-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hero;