import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './Pages/About/About'
import Work from './Pages/Works/Work'
import Skill  from "./Pages/Skill/Skill";
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="container">
      <div class="row align-items-center vh-100">
      <div class="col-12 mx-auto">
      <div className="card border-0  custom-shadow my-4 simple-bg-1">
        <div className="card-body p-4">
        <Router>
            <Header/>

            <div className="main-contend-area">
               
                  <Routes>
                    <Route  path="/" element={<About title="About"/>} />
                    <Route  path="/skill" element={<Skill />}/>
                    <Route  path="/works" element={<Work title="Works"/>}/>
                    <Route  path="/contact" element={<Contact/>} />
                  </Routes>
                
            </div>
            <Footer/>
            </Router>
        </div>
      </div>
      </div>
      </div>
    </div>
    
      
      
  );
}

export default App;

