import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";

import About from "./pages/About";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import CheckoutCart from "./components/checkoutCart";

import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import "./index.css";
import Confirmation from "./pages/confirmation";

export const CartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);

  const addProductToCart = (item) => {
    const existingProductIndex = cart.findIndex((product) => product.data.id === item.data.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeProductFromCart = (item) => {
    const existingProductIndex = cart.findIndex((product) => product.data.id === item.data.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingProductIndex].quantity === 1){
        setCart(updatedCart.filter((product) => product.data.id !== item.data.id))
      }
      else {
        updatedCart[existingProductIndex].quantity -= 1;
        setCart(updatedCart);
      }
    } else {
      setCart([...cart, { ...item, quantity: -1 }]);
    }
  };

  // const addProductAmount = (productId) => { 
  //   const updatedCart = cart.filter((product) => product.data.id !== productId);
  //   setCart(updatedCart);
  // };

  // const removeProductAmount = (productId) => { 
  //   const updatedCart = cart.filter((product) => product.data.id !== productId);
  //   setCart(updatedCart);
  // };
  
  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart, addProductToCart, removeProductFromCart }}>
          <Header />
          <Routes>
          <Route exact path="/confirmation" element={<Confirmation />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products/:id" element={<Products />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/returns" element={<Returns />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/product/:productId"
              element={<ProductDetail />}
            />
          </Routes>
          <Footer />
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
