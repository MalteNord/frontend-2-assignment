import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Products from "./components/products";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import "./index.css"


 function App(){
  return (
    <>
    <Header />
    <Footer />
    <Router>
      <Routes>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    </>

  );
}

export default App;