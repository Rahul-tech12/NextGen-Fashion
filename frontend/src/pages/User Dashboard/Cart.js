import React, { useState } from "react";
import "./Cart.css";
import { FaHome, FaMagic, FaBoxOpen, FaCog, FaTrash, FaShoppingCart } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Lymio Jackets || Jacket for men || Lightweight Outwear Jacket (J-06-Green-2XL)",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/619xMvtqClL._AC_AA360_.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "JVX Men Sweatshirts || Sweatshirts for Men || Unisex Hoodie ||Hoodie ||Available in Plus Size (SWEATSHIRT-11)",
      price: 999,
      image: "https://m.media-amazon.com/images/I/51s3QfodazL._SY879_.jpg",
      quantity: 2,
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div className="cart-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="cart-container">
        <h1><FaShoppingCart /> Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-text">Your cart is empty.</p>
        ) : (
          <>
            <div className="items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="info">
                    <h3>{item.title}</h3>
                    <p className="price">₹{item.price}</p>

                    <div className="qty-box">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>

                  <FaTrash className="delete-btn" onClick={() => removeItem(item.id)} />
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="summary">
              <h2>Order Summary</h2>

              <div className="line">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="line total-line">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>

              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;
