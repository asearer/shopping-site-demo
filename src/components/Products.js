import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1', images: ['image1.jpg', 'image2.jpg'] },
  { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2', images: ['image3.jpg', 'image4.jpg'] },
  { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3', images: ['image5.jpg', 'image6.jpg'] },
  // Add more products...
];

const PRODUCTS_PER_PAGE = 3;

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const viewProductDetails = (productId) => {
    const product = products.find(product => product.id === productId);
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCartItems(prevItems => [...prevItems, productToAdd]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Implement your updateQuantity logic here
    console.log(`Updating quantity of product with ID ${productId} to ${newQuantity}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="product-list">
            <h2>Products</h2>
            {currentProducts.map(product => (
              <Product 
                key={product.id} 
                product={product} 
                addToCart={handleAddToCart} 
                viewProductDetails={viewProductDetails} 
              />
            ))}
            <div className="pagination">
              {Array.from({ length: Math.ceil(products.length / PRODUCTS_PER_PAGE) }, (_, index) => (
                <button key={index + 1} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Pass removeFromCart and updateQuantity functions as props */}
          <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} updateQuantity={handleUpdateQuantity} />
        </div>
      </div>
      {selectedProduct && (
        <div className="product">
          <h3>{selectedProduct.name}</h3>
          <p>${selectedProduct.price}</p>
          <button onClick={() => handleAddToCart(selectedProduct.id)}>Add to Cart</button>
          <button onClick={closeProductDetails}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Products;
