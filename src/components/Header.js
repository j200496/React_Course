import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <nav className=" navbar navbar-expand-lg full-screen bg-info">
         <div className="container">
            <a className="nav-link active text-white" href="index.html">
              </a>
               <div className="row justify-content-center">
                <div className="col-12 col-lg-12 gx-5">
                  <span className="mt-2 fw-bold"  href="index.html">React Tutorial</span>
                </div>
               </div>
              <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navmenu">
               <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                 <Link className='nav-link' to="/DataB" >Data Binding</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/UseState">Use State</Link>
                   </li>
                   <li className="nav-item">
                    <Link className='nav-link' to="/UseStateObj">Use State Obj</Link>
                   </li>
                   <li className="nav-item">
                    <Link className='nav-link' to="/EventB">Event Binding</Link>
                   </li>
                   <li className="nav-item">
                    <Link className='nav-link' to="/DinamicCssClass">Dinamic Css Class</Link>
                   </li>
                    <li className="nav-item">
                    <Link className='nav-link' to="/Conditional">Conditional</Link>
                   </li>
                   <li className="nav-item">
                    <Link className='nav-link' to="/MapOperator">MapOperator</Link>
                   </li>
                   <li className="nav-item">
                    <Link className='nav-link' to="/GetApi">GetApi</Link>
                   </li>
                   <li className="nav-item">
                    <Link className='nav-link' to="/Home">Home</Link>
                   </li>
               </ul>
              </div>
         </div>
        </nav>
        </div>
    );
};

export default Header;