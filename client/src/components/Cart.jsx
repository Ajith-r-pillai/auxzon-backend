import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProductTable from '../subcomponents/ProductTable';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params=useParams()
  
  const fetchCart = async () => {
    setLoading(true);
   
    try {
      const response = await axios.get('http://localhost:8000/cart/GetAllCart/'+params.id);
      setCartItems(response.data.cart);
    } catch (error) {
      setError('Error fetching cart items');
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);
console.log(cartItems);


  return (
    <div className="container">
      {/* <h2>Shopping Cart</h2>
      {loading && <p>Loading cart items...</p>}
      {error && <p>{error}</p>}
      {cartItems.length > 0 ? (
        <ProductTable cartItems={cartItems} fetchCart={fetchCart} />
      ) : (
        <p>Your cart is empty.</p>
      )} */}
    </div>
  );
};

export default Cart;
