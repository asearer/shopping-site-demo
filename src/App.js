import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'; 
import Products from './components/Products'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Search from './components/Search';
import FiltersAndSorting from './components/FiltersAndSorting';
import ProductDetails from './components/ProductDetails';
import ShoppingCartSummary from './components/ShoppingCartSummary';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCartItems;
    });
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  const handleFilter = (name, value) => {
    console.log(`Filter by ${name}: ${value}`);
  };

  const handleSort = (value) => {
    console.log('Sort by:', value);
  };

  return (
    <Router>
      <div className="container">
        <header>
          <div className="header-content">
            <h1 className="logo">E-commerce App Demo</h1>
            <nav className="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Search handleSearch={handleSearch} />
          <FiltersAndSorting handleFilter={handleFilter} handleSort={handleSort} />
          <div className="row">
            <div className="col-lg-8">
              <ProductList addToCart={addToCart} />
            </div>
            <div className="col-lg-4">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
              <ShoppingCartSummary cartItems={cartItems} />
            </div>
          </div>
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2024 E-commerce App Demo. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
