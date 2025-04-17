import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Thêm Footer
import Home from "./pages/Home";
import Category from "./pages/Category";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/UserProfile";
import { products } from "./data/data";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WishlistPage from "./pages/WishlistPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const addToWishlist = (id) => {
    const product = products.find((p) => p.id === id);
    if (!wishlist.find((item) => item.id === id)) {
      setWishlist([...wishlist, product]);
    }
  };
  const handleLogin = (values) => {
    console.log("Đăng nhập:", values);
  };

  const handleRegister = (values) => {
    console.log("Đăng ký:", values);
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartItems={cartItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} onAddToWishlist={addToWishlist} />} />
            <Route path="/category/:categoryName" element={<Category onAddToCart={addToCart} onAddToWishlist={addToWishlist} />} />
            <Route path="/category" element={<Category onAddToCart={addToCart} onAddToWishlist={addToWishlist}/>}/>
            <Route path="/collection/:collectionName" element={<Collection onAddToCart={addToCart} onAddToWishlist={addToWishlist} />} />
            <Route path="/product/:id" element={<Product onAddToCart={addToCart} onAddToWishlist={addToWishlist} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            <Route path="/account" element={<Account wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
            <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;