import React, { Component } from 'react';
import './subfooter.css'

class Subfooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="subfooter">
                <div className="subfooter-container">
                    <h2>Take back control of your video strategy.</h2>
                    <p>From upload to delivery, we've got you covered with sophisticated tools and expert guidance to help you successfully engage viewers and monetize.</p>
                    <a>Get Started</a>
                </div>
            </div>
         );
    }
}
 
export default Subfooter;