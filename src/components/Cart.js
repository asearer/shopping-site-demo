import React from 'react';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  if (!cartItems) {
    // Handle the case where cartItems is undefined or null
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(productId, newQuantity);
  };

  const incrementQuantity = (productId) => {
    const cartItem = cartItems.find(item => item.id === productId);
    if (cartItem) {
      const newQuantity = cartItem.quantity + 1;
      updateQuantity(productId, newQuantity);
    } else {
      console.error(`Product with ID ${productId} not found in cart.`);
    }
  };

  const decrementQuantity = (productId) => {
    const cartItem = cartItems.find(item => item.id === productId);
    if (cartItem && cartItem.quantity > 1) {
      const newQuantity = cartItem.quantity - 1;
      updateQuantity(productId, newQuantity);
    } else {
      console.error(`Product with ID ${productId} not found in cart or quantity cannot be decreased further.`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); // Call the removeFromCart function with productId
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div className="d-flex align-items-center justify-content-between">
                <span>{item.name} - ${item.price}</span>
                <div className="d-flex align-items-center">
                  <button className="btn btn-danger mx-1" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
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
