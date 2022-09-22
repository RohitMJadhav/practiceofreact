import React from "react"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"
import {BrowserRouter as Router,Route,Routes, Link } from "react-router-dom"

export default function App(){

  return(
    <>
  
    <Router>

<Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  
  </Router>
    </>
  )
}