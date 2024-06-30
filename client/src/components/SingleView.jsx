import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleView() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extracting the product ID from the URL params using useParams hook
  const  params = useParams();

  // Function to fetch product details by ID
  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cart/product/"+params.id);
      setProduct(response.data); // Assuming response.data is the product object returned from backend
    
    } catch (error) {
      setError(error.message);
   
    }
  };

  useEffect(() => {
    fetchProduct(); },[])
console.log(product);

  return (
    <div className="single-view">
      {/* <h2>{product.productName}</h2>
      <p>Price: {product.productPrice}₹</p>
      <p>Description: {product.productDetails}</p>
      {product.productImage && (
        <img src={`http://localhost:8000/${product.productImage}`} alt={product.productName} />
      )} */}
    </div>
  );
}

export default SingleView;
