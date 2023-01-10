import logo from './logo.svg';
import './App.css';
import Navebar from './Component/Navebar';
import Header from './Component/Header';
import About from './Component/About';
import Skill from './Component/Skill';
import Project from './Component/Project';
import Contact from './Component/Contact';
import End from './Component/End';

function App() {
  return (
    <div className="App">
     <Navebar/>
     <Header/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <End/>
    </div>
  );
}

export default App;
