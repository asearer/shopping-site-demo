// ShoppingCartSummary.js
import React from 'react';

function ShoppingCartSummary({ cartItems }) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="shopping-cart-summary">
      <h2>Shopping Summary</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCartSummary;
