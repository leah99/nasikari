import React from 'react'
import {Header, Introduction, Doughnut, QuoteBanner, Banner, Card, Credits, Footer, ScrollButton } from './components'

import tulips from './assets/tulips-light.png'
import lemons from './assets/lemons.jpg'
import spiderLily from './assets/spider-lily-light.png'
import leaves from './assets/leaves.jpg'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header
        title1='About Me'
        title2='My Projects'
      />
      <Introduction />
      <div id="aboutMe" className="app__aboutMe" >
        <h2>About Me</h2>
        <span className="app__aboutMe__doughnut">
          <Doughnut isPink
            percentage="96%"
            description="Studious" />
          <Doughnut isYellow
            percentage="97%"
            description="Neat" />  
          <Doughnut isGreen
            percentage="98%"
            description="Fun" />
          <Doughnut isBlue
            percentage="100%"
            description="Effort" />
        </span>
        <QuoteBanner />
        <span className="app__aboutMe__banner">
          <Banner />
        </span>
      </div>
      <div id="myProjects" className="app__myProjects">
        <h2>My Projects</h2>
        <span className="app__myProjects__card">
          <Card />
          <Card
            icon={tulips}
            image={lemons}
            text="Ke Xiang's Website"
            link="https://leah99.github.io/kexiang-website/"
          />
          <Card
            isButtonDisabled
            icon={spiderLily}
            image={leaves}
            text="Stay Tuned"
            link=""
          />
        </span>
      </div>
      <Credits />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;