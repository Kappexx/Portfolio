

import "./App.scss"



import StarsCanvas from "./components/Stars/Stars"
import PlayStop from "./components/PlayStop/PlayStop";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/LG/Logo";
import About from "./components/About/About";
import Projects from "./components/ProjectsAndSkills/Projecxts";
import Skills from "./components/ProjectsAndSkills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {

 
 
  return (
    
    <div className="App">
      {/* <div className="soon">Comming Soon ...</div> */}
       <div
       id="About" 
       className="AboutConteiner">
        <About />
      </div>
      <p id="Test"></p>
      <div 
      id="Projects"
      className="ProjectsAndSkillsconteiner">
        <Projects />
        <Skills />
      </div>
      
      <div 
      id="Contact"
      className="ContactErthConteiner">
        <Contact />

      </div>
      <Footer />
     
      <div className="BackgroundStarsConteiner"> 
        <StarsCanvas />
      </div>
      <div className="PlayStopConteiner"> 
        <PlayStop />
      </div>

      <nav>
        <Logo/>

        <Navigation/>
      </nav>
     
      
    </div>
    
  );
}

export default App;
