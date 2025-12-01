import React from "react";
import Sidebar from "../../components/Sidebar";
import "./Order.css";

const sampleOrders = [
  {
    id: 1,
    img: "/register.png",
    product: "AI Hoodie - Neon Glow",
    description: "A futuristic hoodie generated using AI neon patterns.",
    status: "Delivered",
    deliveryDate: "25 Feb 2025",
  },
  {
    id: 2,
    img: "/register.png",
    product: "AI Sneakers Limited Edition",
    description: "White sneakers with hologram-generated styling.",
    status: "Shipped",
    deliveryDate: "29 Feb 2025",
  },
  {
    id: 3,
    img: "/register.png",
    product: "AI Cyber Jacket",
    description: "Cyberpunk jacket designed using AI fashion tools.",
    status: "Pending",
    deliveryDate: "3 Mar 2025",
  },
];

const Order = () => {
  const statusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-badge status-pending";
      case "Shipped":
        return "status-badge status-shipped";
      case "Delivered":
        return "status-badge status-delivered";
      case "Cancelled":
        return "status-badge status-cancelled";
      default:
        return "status-badge";
    }
  };

  return (
    <div className="orders-layout">
      <Sidebar />

      <div className="orders-container">
        <h1>Your Orders</h1>

        {sampleOrders.map((order) => (
          <div className="order-card" key={order.id}>
            <img src={order.img} className="order-img" />

            <div className="order-details">
              <h3 className="order-title">{order.product}</h3>

              <p className="order-description">{order.description}</p>

              <span className={statusClass(order.status)}>
                {order.status}
              </span>

              <p className="delivery-date">
                Delivery by: <strong>{order.deliveryDate}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
