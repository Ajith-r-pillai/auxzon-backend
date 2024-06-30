import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Admin.css";
import { Link } from "react-router-dom";
import axios from "axios";


function Admin() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/cart/Getproducts"
      );
      setProducts(response.data); // Assuming response.data is an array of products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="admin-main">
      <div className="header-admin">
        {" "}
        <Header />
      </div>
      <div className="admin-btns">
        <Link to="/addproduct">
          {" "}
          <button className="btn-classifi">
            Add Product <i class="fa-solid fa-folder-plus"></i>
          </button>
        </Link>
      </div>
      <div className="pcard">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id}  className="product-card">
              <h3>{product.productName}</h3>
              <p>Price: ${product.productPrice}</p>
              <img
                style={{ width: "7rem", height: "6rem" }}
                src={`http://localhost:8000/${product.productImage}`}
                alt={product.productName}
              />
              <p>{product.productDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
