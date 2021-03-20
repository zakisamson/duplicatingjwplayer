import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav>
                <div className="navbar-inner">
                    <div className="navbar-left">
                        <ul id="navlist-left" type="none">
                            <li style={{ width:'10%'}}>
                                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/11/jwplayer-logo.png" width="115%"></img></li>
                            <li>Products</li>
                            <li>Advertisers</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                            <li>Company</li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul id="navlist-right" type="none">
                            <li>Support</li>
                            <li>Dashboard</li>
                            <li><a id="btn-cta">Pricing</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;