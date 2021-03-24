import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer-container">
                <div className="copyright">
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/11/jwplayer-logo.png"></img>
                    <p className="copyright-text">© 2007-2021 Longtail Ad Solutions, Inc.</p>
                </div>
                <div >
                    <ul className="footer-list" type="none">
                        <li><a>Terms Of Service</a> |</li>
                        <li><a>Privacy Policy</a> |</li>
                        <li><a>Ad Choices</a> |</li>
                        <li><a>DMCA</a> |</li>
                        <li><a>Developers</a> |</li>
                        <li><a>About Us</a> |</li>
                        <li><a>Careers</a></li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Footer;