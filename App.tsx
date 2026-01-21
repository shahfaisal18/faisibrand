
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Product, CartItem, Category } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import GeminiAssistant from './components/GeminiAssistant';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import OrderSuccess from './pages/OrderSuccess';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart logic
  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  // Wishlist logic
  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar 
          cartCount={cartCount} 
          onOpenCart={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} initialSearch={searchQuery} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/checkout" element={<Checkout cart={cart} total={cartTotal} onOrderSuccess={clearCart} />} />
            <Route path="/login" element={<Auth type="login" />} />
            <Route path="/signup" element={<Auth type="signup" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </main>

        <Footer />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart}
          onUpdateQty={updateQuantity}
          onRemove={removeFromCart}
          total={cartTotal}
        />

        <GeminiAssistant />

        {/* Scroll To Top Button Placeholder or similar overlays can go here */}
      </div>
    </Router>
  );
};

export default App;
