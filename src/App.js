import React, { Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero"

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
      </div>
     );
  }
}
 
export default App;