import React, { useState } from 'react';
import './App.css'; // Import your CSS file with Shopify-like styles
import Home from './components/Home'; // Import the Home component
import Products from './components/Products'; // Import the Products component
import About from './components/About'; // Import the About component
import Contact from './components/Contact'; // Import the Contact component
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
    <div className="container">
      <header>
        <div className="header-content">
          <h1 className="logo">E-commerce App Demo</h1>
          <nav className="navbar">
            <ul>
              <li><Home /></li>
              <li><Products /></li>
              <li><About /></li>
              <li><Contact /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
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
  );
}

export default App;
