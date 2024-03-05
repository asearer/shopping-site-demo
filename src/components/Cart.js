import React from 'react';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(productId, newQuantity);
  };

  const incrementQuantity = (productId) => {
    // Check if productId exists in cartItems
    if (cartItems[productId]) {
      const newQuantity = cartItems[productId].quantity + 1;
      updateQuantity(productId, newQuantity);
    } else {
      console.error(`Product with ID ${productId} not found in cart.`);
    }
  };

  const decrementQuantity = (productId) => {
    // Check if productId exists in cartItems and quantity is greater than 1
    if (cartItems[productId] && cartItems[productId].quantity > 1) {
      const newQuantity = cartItems[productId].quantity - 1;
      updateQuantity(productId, newQuantity);
    } else {
      console.error(`Product with ID ${productId} not found in cart or quantity cannot be decreased further.`);
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {Object.values(cartItems).map(item => (
            <li key={item.id}>
              <div className="d-flex align-items-center justify-content-between">
                <span>{item.name} - ${item.price}</span>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary mx-1" onClick={() => decrementQuantity(item.id)}>-</button>
                  <input type="number" min="1" value={item.quantity} onChange={(event) => handleQuantityChange(item.id, event)} className="form-control mx-1" />
                  <button className="btn btn-primary mx-1" onClick={() => incrementQuantity(item.id)}>+</button>
                  <button className="btn btn-danger mx-1" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
