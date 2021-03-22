import React, { Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Right_content from "./components/right-content"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Navbar />
        <Hero />
        <Right_content 
        tinyheader="PLAY" 
        header="Beautiful experiences on every screen." 
        caption="High quality, consistent playback, so that you can reach viewers everywhere. Whether across websites, mobile apps, or connected TV, our player delivers a beautiful experience and increases your ad revenue." 
        btncaption="Play Everywhere"
        imagesource="https://images.prismic.io/jw-v2/f53f6aa8-ed95-48ba-9da2-04d019b469b9_ott-left.svg?auto=compress,format&rect=0,0,267,150&w=1200&h=674"/>
      </div>
     );
  }
}
 
export default App;