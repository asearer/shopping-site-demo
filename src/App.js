import React, { useState } from 'react';
import './App.css';
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
    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
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
    // Handle search functionality
    console.log('Search query:', query);
  };

  const handleFilter = (name, value) => {
    // Handle filter functionality
    console.log(`Filter by ${name}: ${value}`);
  };

  const handleSort = (value) => {
    // Handle sort functionality
    console.log('Sort by:', value);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">E-commerce App Demo</h1>
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
    </div>
  );
}

export default App;
