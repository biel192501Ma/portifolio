import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import AOS from 'aos';
import 'aos/dist/aos.css'; 


import About from "./Pages/About";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";

const Routers =()=> {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
 return (
     <Router>
            <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/resume" element={<Resume />}/>
     
    </Routes>
     </Router>
 
 );
}

export default Routers;