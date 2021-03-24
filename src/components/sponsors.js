import React, { Component } from 'react';
import './sponsors.css';
import gambar from '../assets/sponsors.svg';

class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sponsors-section">
                 <img src={gambar}></img>
            </div>
         );
    }
}
 
export default Sponsors;