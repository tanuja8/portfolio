import logo from './logo.svg';
import './App.css';
import Navebar from './Component/Navebar';
import Header from './Component/Header';
import About from './Component/About';
import Skill from './Component/Skill';

function App() {
  return (
    <div className="App">
     <Navebar/>
     <Header/>
     <About/>
     <Skill/>
    </div>
  );
}

export default App;
