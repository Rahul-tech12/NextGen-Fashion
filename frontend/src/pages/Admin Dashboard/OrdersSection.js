import React, { useState } from 'react'
import "./AdminDashboard.css";

const OrdersSection = () => {
    
      const [orders, setOrders] = useState([
        {
          id: 1,
          customer: "Rahul Choudhary",
          product: "AI-Generated Hoodie",
          address: "123 Fashion Street, Mumbai, 400001",
          status: "Pending",
        },
        {
          id: 2,
          customer: "Aarav Mehta",
          product: "Smart Denim Jacket",
          address: "78 Urban Road, Delhi, 110001",
          status: "Shipped",
        },
        {
          id: 3,
          customer: "Priya Sharma",
          product: "Custom Neon Sneakers",
          address: "56 Style Avenue, Bangalore, 560001",
          status: "Delivered",
        },
      ]);
    const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleSave = (id) => {
    alert(`Status for Order #${id} saved successfully!`);
  };

  return (
    <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Product</th>
                  <th>Shipping Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.address}</td>
                    <td>
                      <select
                        className={`status-select ${order.status.toLowerCase()}`}
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="save-btn"
                        onClick={() => handleSave(order.id)}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}

export default OrdersSection