import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>   <div className='nav-top'>
    <div className='nav-top-content' >
<div className='nav-c1'>
  <a className='nav-c1-text'><i className="fa-solid fa-phone"></i> +221 33 66 22</a>
  <a><i className="fa-solid fa-envelope"></i> support@elextra.io</a>

</div>




    </div>
  </div> 
  <div className='nav-middle'>
   <div className='nav-middle-2'>
      <div className='nav-md1'>
      <Link style={{textDecoration:'none',color:'black'}} to={'/'}> <h3><i style={{color:'rgba(49,135,238,255)',fontSize:'3rem'}} class="fa-brands fa-product-hunt"></i> Products</h3></Link>
      </div>
      <div className='nav-midd-select'>
        <select className='nav-midd-select1' name="" id="">
          <option value="">classified</option>
        </select>
      </div>
      <div className='nav-midd-search'>
        {/* <input className='nav-midd-searchin' type="text" placeholder='Search Here....' />
        <button style={{border:"none",backgroundColor:'white'}}><i style={{color:'rgba(49,135,238,255)',fontSize:'1.3rem'}} className="fa-solid fa-magnifying-glass"></i></button> */}

      </div >
      <div className='nav2-Icons'>
      <i className="fa-regular fa-heart"></i>
<i className="fa-solid fa-basket-shopping"></i>
     <i className="fa-solid fa-circle-user"></i>
      </div>

      {/* <button className='btn-classifi'>Classified</button> */}
   </div>
  </div></div>
  )
}

export default Header