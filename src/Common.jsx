import React from 'react';
import { NavLink } from 'react-router-dom';
const Common=(props)=>{
 return(
    <>
   <div style={{height:"600px"}}>
   <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav-bg">
      <div className="row">
       <div className="col-10 mx-auto">
           <div className="row">
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name} <strong className="brand-name"> Abhianna Technical</strong></h1>
                  <h2 className="my-1">We are the Team of Talented developed making Website</h2>
                  <div className="mt-3">
                      <NavLink to={props.visit} className="btn btn-get-started">{props.btnname}</NavLink>
                  </div>
               </div>
               <div className="col-lg border-1 order-lg-2 header-img">
                   <img src={props.imgsrc} alt="home img" className="img-fluid animated"/>
               </div>
           </div>
       </div>
      </div>
      </div>
   </section>
   </div>

    </>
 )
}
export default Common;
