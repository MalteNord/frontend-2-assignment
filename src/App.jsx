import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Products from "./components/products";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Home from "./components/home";
import FAQ from "./components/faq";
import Terms from "./components/terms";
import Returns from "./components/returns";
import "./index.css"


 function App(){
  return (
    <>
    
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/faq" element={<FAQ />}/>
        <Route exact path="/terms" element={<Terms />}/>
        <Route exact path="/returns" element={<Returns />}/>
      </Routes>
      <Footer />
    </Router>
    </>

  );
}

export default App;