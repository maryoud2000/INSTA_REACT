import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ({ setUser }) => {
    const logOut = () => {
      setUser();
      localStorage.removeItem("myToken");
    };
    
    return (
      <div className="navbarContainer">
        <div className="header"> <h1>Imiagram</h1> </div>
        <div className="navButtons">
          <div className='homeLink'><Link to="/home" >Home</Link></div> 

          <div className='profileLink'><Link to="/userProfile" >My Profile</Link></div>
                     
          <div className='logoutButton'><button id="logoutBtn" onClick={logOut}>Log out</button></div>
        </div>
      </div>
    );
};

export default Navbar;