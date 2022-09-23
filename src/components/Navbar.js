import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux";
import Logın from './Logın';
import LOGın from './Logın';

function Navbar() {
  const state = useSelector((state)=>state.handleCart)
  return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">ARADIĞIN BURADA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Ana Sayfa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="products">Ürünler</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">İletişim</NavLink>
        </li>
      </ul>
      <div className='buttons'>
      <NavLink className="btn btn-outline-dark " to="/login ">
      <i className="fa fa-sign-in me-1">Giriş Yap</i>
      </NavLink>
      <NavLink className="btn btn-outline-dark ms-2 " to="/signup ">
      <i className="fa fa-user-plus me-1">Kayıt Ol</i>
      </NavLink>
    
      <NavLink className="btn btn-outline-dark ms-2 " to="/cart">
      <i className="fa fa-cart-plus me-1">Sepet ({state.length})</i>
      </NavLink>

     

      </div>
     
    </div>
  </div>
</nav>
</div>

  )
}

export default Navbar