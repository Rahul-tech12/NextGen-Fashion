import React, { useState } from "react";
import "./AdminDashboard.css";

const ProductsSection = () => {
  const [products, setProducts] = useState([
    {
      id: 101,
      name: "AI Hoodie – Neon Blue",
      price: 2499,
      stock: 25,
      status: "Active",
    },
    {
      id: 102,
      name: "Hologram Sneakers",
      price: 3999,
      stock: 10,
      status: "Active",
    },
    {
      id: 103,
      name: "Custom AI Dress",
      price: 2999,
      stock: 5,
      status: "Out of Stock",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
  };

  return (
    <div className="glass-card fade">

      <table className="neon-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>#{p.id}</td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>

              <td>
                <select
                  value={p.status}
                  className={`status-select ${p.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  onChange={(e) => handleStatusChange(p.id, e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </td>

              <td>
                <button className="save-btn">Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsSection;