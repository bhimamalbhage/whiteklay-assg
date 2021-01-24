import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> Whiteklay
        </Link>
      </h1>
      <ul>
          <li>
          <div className="dropdown">
            <a className="dropbtn">List
            <i className="fa fa-caret-down"></i>
            </a>
            <div className="dropdown-content">
            <Link to="/listemployee">Employee</Link>
            <Link to="/listroles">Role</Link>
            <Link to="/listorg">Organization</Link>
            </div>
        </div>
          </li>
      <li>
          <Link to='/adminpanel'>Admin Panel</Link>
      </li>
      
    </ul>
    </nav>
  );
};

export default Navbar;
