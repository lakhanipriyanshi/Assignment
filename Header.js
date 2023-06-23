import React from 'react'

import logo from './img/logo.jpg';
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img style={{width:'90px',height:'70px'}} src={logo} alt="logo"/> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/Header'} className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={'/product'} className="nav-link active">Product</Link>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accessories</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
clothes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Men</a></li>
            <li><a className="dropdown-item" href="#">Women</a></li>
            <li><a className="dropdown-item" href="#">Chlid</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className="d-flex align-items-left" style={{margin:"20px"}}>
    <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  
</div>
</div>
   </nav>
        
    </div>
  )
}

