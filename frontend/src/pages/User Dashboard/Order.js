import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import "./Order.css";

const Order = () => {
  return (
    <>
    <Layout></Layout>
    <div className='order-page'> 
      <h1>Orders</h1>
      <div className='order-list'>
        <div className='order-header'>
          <h4>Product</h4>
          <h4 id='status'>Current order status</h4>
          <h4 id='date'>Delivery Date</h4>
        </div>
        <div className='order-item'>
          <img src="https://m.media-amazon.com/images/I/619xMvtqClL._AC_AA360_.jpg" />
            <div className="item-info" id='order-item-info'>
              <h3>
                Lymio Jackets || Jacket for men || LightWeight Outwear Jacket
              </h3>
              <p><b>Size:</b>2XL</p>
              <p><b>Colour:</b>Green</p>
        </div>
        <p id='order-status'>Shipped</p>
        <p id='del-date'>20th November,2025</p>
      </div>
       <div className='order-item'>
          <img src="https://m.media-amazon.com/images/I/612FuICrCCL._SY879_.jpg" />
            <div className="item-info" id='order-item-info'>
              <h3>
                Lymio Jackets || Jacket for men || LightWeight Outwear Jacket
              </h3>
              <p><b>Size:</b>2XL</p>
              <p><b>Colour:</b>Green</p>
        </div>
        <p id='order-status'>Shipped</p>
        <p id='del-date'>18th November,2025</p>
      </div>
       <div className='order-item'>
          <img src="https://m.media-amazon.com/images/I/51tkmHjrvPL._SX679_.jpg" />
            <div className="item-info" id='order-item-info'>
              <h3>
                Lymio Jackets || Jacket for men || LightWeight Outwear Jacket
              </h3>
              <p><b>Size:</b>2XL</p>
              <p><b>Colour:</b>Green</p>
        </div>
        <p id='order-status'>Shipped</p>
        <p id='del-date'>20th November,2025</p>
      </div>
       <div className='order-item'>
          <img src="https://m.media-amazon.com/images/I/619xMvtqClL._AC_AA360_.jpg" />
            <div className="item-info" id='order-item-info'>
              <h3>
                Lymio Jackets || Jacket for men || LightWeight Outwear Jacket
              </h3>
              <p><b>Size:</b>2XL</p>
              <p><b>Colour:</b>Green</p>
        </div>
        <p id='order-status'>Shipped</p>
        <p id='del-date'>20th November,2025</p>
      </div>
       <div className='order-item'>
          <img src="https://m.media-amazon.com/images/I/612FuICrCCL._SY879_.jpg" />
            <div className="item-info" id='order-item-info'>
              <h3>
                Lymio Jackets || Jacket for men || LightWeight Outwear Jacket
              </h3>
              <p><b>Size:</b>2XL</p>
              <p><b>Colour:</b>Green</p>
        </div>
        <p id='order-status'>Delivered</p>
        <p id='del-date'>11th November,2025</p>
      </div>
       <div className='order-item'>
          <img src="https://m.media-amazon.com/images/I/51tkmHjrvPL._SX679_.jpg" />
            <div className="item-info" id='order-item-info'>
              <h3>
                Lymio Jackets || Jacket for men || LightWeight Outwear Jacket
              </h3>
              <p><b>Size:</b>2XL</p>
              <p><b>Colour:</b>Green</p>
        </div>
        <p id='order-status'>Delivered</p>
        <p id='del-date'>10th November,2025</p>
      </div>

    </div>
    </div>
    </>
    
  )
}

export default Order