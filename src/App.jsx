import React, {useState, createContext} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";

import About from "./pages/About";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NewCart from "./components/newcart";


import Home from "./pages/Home"
import FAQ from "./pages/Faq";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import "./index.css"

export const CartContext = createContext(null)


 function App(){
const [cart, setCart] = useState([])

const addProductToCart = (item) => {
  setCart([...cart, item])
  console.log("hej")
}

  return (
    <>
    <Router>
      <CartContext.Provider value={{cart, setCart, addProductToCart}}>
      <Header />
      <Routes>
      <Route exact path="/newcart" element={<NewCart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<Products />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/faq" element={<FAQ />}/>
        <Route exact path="/terms" element={<Terms />}/>
        <Route exact path="/returns" element={<Returns />}/>
        <Route exact path="/checkout" element={<Checkout />}/>
        <Route exact path="/product/:productId" element={<ProductDetail />}/>
      </Routes>
      <Footer />
      </CartContext.Provider>
    </Router>
    </>

  );
}

export default App;