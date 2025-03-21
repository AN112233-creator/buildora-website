/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Home"
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */

import About from "./About.jsx";
import Projects from "./projects.jsx";
import Services from "./services.jsx";
import Clients from "./Clients.jsx";
import Contact from "./Contacts.jsx";
import Blog from "./Blogs.jsx";
import Team from "./Team.jsx";

function App() {
  

  return (

       <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/Team" element={<Team />} />
       
        
          </Routes>
       </Router>
      );
    };
  
/* 
    <Router>
    <Home />
    
   <Routes>
    <Route path = "/about" element = {<About />} />
   
    </Routes>

    </Router> */
   
 

     


export default App
