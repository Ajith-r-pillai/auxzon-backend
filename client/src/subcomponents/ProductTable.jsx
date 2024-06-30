// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductTable = ({ cartItems, fetchCart }) => {
//   const [loading, setLoading] = useState(false);

//   const handleAddQuantity = async (productId) => {
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:8000/cart/addQuantity', { currentuserid: 'user_id_here', productId });
//       fetchCart();
//     } catch (error) {
//       console.error('Error adding quantity:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemoveQuantity = async (productId) => {
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:8000/cart/removeQuantity', { currentuserid: 'user_id_here', productId });
//       fetchCart();
//     } catch (error) {
//       console.error('Error removing quantity:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemoveFromCart = async (productId) => {
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:8000/cart/removeFromCart', { currentuserid: 'user_id_here', productId });
//       fetchCart();
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Product Name</th>
//           <th scope="col">Price</th>
//           <th scope="col">Quantity</th>
//           <th scope="col">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cartItems.map((item, index) => (
//           <tr key={item.productId}>
//             <th scope="row">{index + 1}</th>
//             <td>{item.productDetails.productName}</td>
//             <td>{item.price}</td>
//             <td>{item.quantity}</td>
//             <td>
//               <button className="btn btn-sm btn-primary" onClick={() => handleAddQuantity(item.productId)} disabled={loading}>
//                 + Add
//               </button>
//               <button className="btn btn-sm btn-secondary mx-1" onClick={() => handleRemoveQuantity(item.productId)} disabled={loading}>
//                 - Remove
//               </button>
//               <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromCart(item.productId)} disabled={loading}>
//                 Remove
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ProductTable;
