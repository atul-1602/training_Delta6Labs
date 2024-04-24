import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import ThirdComponent from "./components/ThirdComponent"
import FourthComponent from "./components/FourthComponent"

import {Route, BrowserRouter as Router , Routes, Routr} from 'react-router-dom'
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import Navbar from './routing/Navbar';
import DarkMode from './components/DarkMode';

import UserContext from './contextAPI/UserContext';
function App() {
  return (
    <>
    {/* <FirstComponent name="Atul" profession="Associate Sowtware Developer"/>
    <SecondComponent/>
    <ThirdComponent/>
    <FourthComponent/> */}

    {/* <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router> */}

    {/* Dark mode Component */}
    {/* <DarkMode/> */}

    <UserContext/>
    </>
    
  );
}

export default App;
