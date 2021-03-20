import React, { Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Navbar />
        <h1>Hello WOoooooRLD</h1>
      </div>
     );
  }
}
 
export default App;