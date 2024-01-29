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
import "./index.css"


 function App(){
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/faq" element={<FAQ />}/>
      </Routes>
    </Router>
    <Footer />
    </>

  );
}

export default App;