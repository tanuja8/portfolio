import logo from './logo.svg';
import './App.css';
import Navebar from './Component/Navebar';
import Header from './Component/Header';
import About from './Component/About';

function App() {
  return (
    <div className="App">
     <Navebar/>
     <Header/>
     <About/>
    </div>
  );
}

export default App;
