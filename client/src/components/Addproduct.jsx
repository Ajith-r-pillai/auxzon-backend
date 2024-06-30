import React, { useState } from 'react';
import './Addproduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Addproduct() {
  const navigate = useNavigate();
  
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDetails, setproductDetails] = useState('');
  const [productImage, setProductImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('productName', productName);
    formData.append('productDetails', productDetails);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);

    try {
      const response = await axios.post('http://localhost:8000/cart/Addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(response.data.message);
      // Reset fields after successful submission
 
      setProductName('');
      setProductPrice('');
      setProductImage('');
      // navigate('/'); // Redirect to homepage after successful submission
    } catch (error) {
      console.log(error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Network error occurred');
      }
    }
  };

  return (
    <div className='addprdct-main'>
      <div className='form'>
        <div className='title'>Add Product</div>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
         
          <div className='input-container ic1'>
            <input
              type='text'
              className='input'
              placeholder='Product Name'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className='input-container ic2'>
            <input
              type='text'
              className='input'
              placeholder='Pproduct Details'
              value={productDetails}
              onChange={(e) => setproductDetails(e.target.value)}
              required
            />
          </div>
          <div className='input-container ic2'>
            <input
              type='number'
              className='input'
              placeholder='Product Price'
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className='input-container ic2'>
            <input
              type='file'
              className='input'
              onChange={(e) => setProductImage(e.target.files[0])}
              required
            />
          </div>
          <button type='submit' className='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addproduct;
