import React from 'react'
import { FaHome, FaMagic, FaShoppingCart ,FaBoxes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
            <h2 className="brand">AI Studio</h2>
            <ul>
              <li><Link className="link" to="/"><FaHome /> Dashboard</Link></li>
              <li ><Link className="link" to="/design"><FaMagic /> Prompt Generator</Link></li>
              <li><Link className="link" to="/cart"><FaShoppingCart /> Add to Cart</Link></li>
              <li><Link className="link" to="/orders"><FaBoxes /> Orders</Link></li>
            </ul>
          </aside>
  )
}

export default Sidebar