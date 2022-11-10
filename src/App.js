import './App.css';
import {Home} from './home/home';
import {About} from './about/about';
import {Skills} from './skills/skills';
import {Career} from './career/career';
import {Projects} from './projects/projects';
import {WhyMe} from './whyme/whyme';
import {References} from './references/references';
import {Contact} from './contact/contact';
import React from 'react';


function App() {
  return (
    <div className="App">
        <Home/>
        <div className="App-body">
            <About/>
            <Skills/>
            <Career/>
            <Projects/>
            <WhyMe/>
            <References/>
        </div>
        <footer className="App-footer">
          <Contact/>
          <div className="copyRight">
              &copy; Guirado Léo | 2022
          </div>
        </footer>
    </div>
  );
}

export default App;
