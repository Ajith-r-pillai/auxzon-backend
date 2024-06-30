import React, { useState } from 'react';
import axios from 'axios';

const ProductTable = ({ cartItems, fetchCart,Total }) => {
 

  const handleAddQuantity = async (productId) => {
  
    try {
      await axios.post('http://localhost:8000/cart/addQuantity', { currentuserid:613, productId });
      fetchCart();
    } catch (error) {
      console.error('Error adding quantity:', error);
    } 
  };

  const handleRemoveQuantity = async (productId) => {
    
    try {
      await axios.post('http://localhost:8000/cart/RemoveCart', { currentuserid: 613, productId });
      fetchCart();
    } catch (error) {
      console.error('Error removing quantity:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
   
    try {
      await axios.post('http://localhost:8000/cart/removeFromCart', { currentuserid: 'user_id_here', productId });
      fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
    } 
  };

  return (
 <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.productId}>
                <th scope="row">{index + 1}</th>
                <td>{item.productDetails.productName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="btn btn-sm btn-primary" onClick={() => handleAddQuantity(item.productId)} >
                    + Add
                  </button>
                  <button className="btn btn-sm btn-secondary mx-1" onClick={() => handleRemoveQuantity(item.productId)}>
                    - Remove
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromCart(item.productId)} >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{Total}</p>
 </>
  );
};

export default ProductTable;
