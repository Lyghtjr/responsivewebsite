import React from 'react';
import { NavLink } from 'react-router-dom';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const NavBar=()=>{
return(
    <>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" exact  to="/">Abhianna Technical</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact activeClassName="menu_active" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact activeClassName="menu_active" to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact activeClassName="menu_active" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact activeClassName="menu_active" to="/contact">Contact Us</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
            </div>
        </div>
    </div>


    </>
)
}

export default NavBar;