import logo from './logo.svg';
import './App.css';
import Navebar from './Component/Navebar';
import Header from './Component/Header';
import About from './Component/About';
import Skill from './Component/Skill';
import Project from './Component/Project';
import Contact from './Component/Contact';
import End from './Component/End';
import HomePage from './Component/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navebar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
   </Routes>
   <Routes>
    <Route path='/about' element={<About></About>}/>
   </Routes>
   <Routes>
    <Route path='/skills' element={<Skill/>}/>
   </Routes>
   <Routes>
    <Route path='/project' element={<Project/>}/>
   </Routes>
   <Routes>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <End/>
   </BrowserRouter>
    </div>
  );
}

export default App;
