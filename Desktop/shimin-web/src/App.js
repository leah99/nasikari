import {Header, Introduction, AboutMe, Footer, ScrollButton} from './components'

import working from './assets/work-in-progress.png';
import linkedin from './assets/linkedin.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header
        title1='About Me'
        title2='My Projects'
      />
      <Introduction />
      <div className="app__aboutMe" id="aboutMe">
        <AboutMe />
      </div>
      <div id="myProjects" className="app__myProjects">
        <span className="app__myProjects__title">My Projects</span>
        <div className="app__myProjects__items">
          <img className="app__myProjects__items__image" src={working} alt=''/>
          <span className="app__myProjects__items__title">
            <span>Work In Progress</span>
            <span className="app__myProjects__items__title__subtitle">
              <h1>Meanwhile, do check out my LinkedIn!</h1>
              <a href='https://www.linkedin.com/in/shi-min-low-8a09591bb/'><img className="app__myProjects__items__title__subtitle__image" src={linkedin} alt=''/></a>
            </span>
          </span>
        </div>
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
