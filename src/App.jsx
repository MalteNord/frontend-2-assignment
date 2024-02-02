import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/About";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./components/cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"
import FAQ from "./pages/Faq";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import "./index.css"


 function App(){
  return (
    <>
    
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<Products />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/faq" element={<FAQ />}/>
        <Route exact path="/terms" element={<Terms />}/>
        <Route exact path="/returns" element={<Returns />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </Router>
    </>

  );
}

export default App;