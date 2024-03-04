// ProductList.js
import React, { useState } from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  // Add more products...
];

const PRODUCTS_PER_PAGE = 3; // Number of products to display per page

function ProductList({ addToCart }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      {currentProducts.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / PRODUCTS_PER_PAGE) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
