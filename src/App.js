import React, { Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Right_content from "./components/right-content" 
import Left_content from "./components/left-content"
import Sponsors from "./components/sponsors"
import Subfooter from "./components/subfooter"
import Footer from "./components/footer"

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
        imagesource="https://images.prismic.io/jw-v2/f53f6aa8-ed95-48ba-9da2-04d019b469b9_ott-left.svg"
        btnlink="#"
        />
        <Left_content 
        tinyheader="STREAM" 
        header="Deliver Compelling Video Anywhere." 
        caption="Our streaming services process and deliver high-quality video faster and at a smaller size to your audience on every device." 
        btncaption="Deliver Instantly"
        imagesource="https://images.prismic.io/jw-v2/b723bced-13f4-423d-bebb-5adbd89a1f08_strategy.svg"
        btnlink="#"
        />
        <Right_content 
        tinyheader="MONETIZE" 
        header="Maximize Ad Revenue." 
        caption="Industry leading ad support to maximize your fill rate and CPMs across platforms and screens. Our experts will guide you through best practices and how to take advantage of our innovative technology such as Video Player Bidding." 
        btncaption="Boost Your CPMs"
        imagesource="https://images.prismic.io/jw-v2/e68b5e44-bb31-403f-9c18-7115517b40a1_ad-revenue.svg"
        btnlink="#"
        />
        <Left_content 
        tinyheader="ENGAGE" 
        header="Deepen Viewer Engagement." 
        caption="Capture your viewers' attention and keep them watching. Our engagement products: Article Matching and Recommendations surface the most relevant content from your library to increase plays -- all in real-time." 
        btncaption="Engage Viewers"
        imagesource="https://images.prismic.io/jw-v2/68e0cc07-b19a-40d3-b41f-94e002b7d758_recommend-right.svg"
        btnlink="#"
        />
        <Sponsors />
        <Subfooter />
        <Footer />
      </div>
     );
  }
}
 
export default App;