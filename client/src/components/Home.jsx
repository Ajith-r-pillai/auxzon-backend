// import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import ProductCard from "../subcomponents/ProductCard";
// import ProductCard from "./ProductCard";
// import Categories from "./Categories";
// import axios from "axios";
// import Subcategories from "./Subcategories";
// import { Link, useNavigate } from "react-router-dom";
// import Addcategory from "./Addcategory";
function Home() {
 
  const [products, setProducts] = useState([]);
  const [result, setresult] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cart/Getproducts');
      setProducts(response.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const AddCart=async(productId)=>{
    const currentuserid=613
    const quantity=1
    const body={productId,currentuserid,quantity}
      
  try {
        const response = await axios.post('http://localhost:8000/cart/AddCart',body);
        setresult(response)// Assuming response.data is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
   }
 
console.log(result);


  return (
    <div>
      <Header />
      <div className="Home-main">
        <div className="carousel-main">
          <div
            id="carouselExampleControls"
            style={{ width: "80%" }}
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{
                    height: "20rem",
                    width: "100%",
                    borderRadius: "3rem",
                  }}
                  src="https://i.postimg.cc/44BsPfd2/Solar-pc-3000x1200-CB577106624.jpg"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "20rem", borderRadius: "3rem" }}
                  src="https://i.postimg.cc/zGr1ZN5K/Homepage-Desktop-Hero-Template-3000x1200-22-June2023-ksd-Cricket-toys-2x-CB577185967.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "20rem", borderRadius: "3rem" }}
                  src="https://i.postimg.cc/pVwwzvm4/PFF-Unrec-3000-CB577063325.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
     
        <div className="">
          <div className="home-heading">
          <div className="home-heading-conent">
       
            <h1>Categories</h1>
            {/* <Link to={'/addc'}> <button className="btn-classifi">New category <i class="fa-solid fa-folder-plus"></i></button></Link> */}
          </div>
          </div>
          {/* <button className="btn-classifi" >Add Product</button> */}
        
          <div className="pcard">
         
          <div className="product-list">
        {products.map((product) => (
          <div key={product.productId} className="product-card">
            <h3>{product.productName}</h3>
            <p>Price: ${product.productPrice}</p>
<Link to={'/single/'+product.productId}><img style={{width:'7rem',height:'6rem'}} src={`http://localhost:8000/${product.productImage}`} alt={product.productName} /></Link>
            <p>{product.productDetails}</p>
         <button onClick={()=>{AddCart(product.productId)}}> <div><i class="fa-solid fa-cart-plus"></i></div></button>
          </div>
        ))}
      </div>
          </div>

          {/* <div className='pcard'>
{
allSubcategory.map((item, index)=>( <Subcategories data={item}/>
))}
</div> */}
          {/* <div className='pcard'>
{
allProducts.map((item, index)=>(  
<ProductCard data={item}/>
))}
</div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
