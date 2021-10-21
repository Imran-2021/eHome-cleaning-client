import React from 'react';
import { FaTimes,FaBars } from 'react-icons/fa';
import {
    Link
  } from "react-router-dom";
  import "./Navbar.css"
const Navbar = () => {
    const showmenu=()=>{
        document.getElementById("nav-links").style.left="0";
        console.log("object");
    }
  const hidemenu=()=>{
        document.getElementById("nav-links").style.left="-200px";
    }
    return (
        <section class="headerr">
        <nav>
        <Link  className="logo text-link" to="/">eHouse-Cleaning</Link>
            <div class="nav-links" id="nav-links">
                <h5 className="menuright" onClick={hidemenu}><FaTimes/></h5>
                <ul onClick={hidemenu}>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    {/* <li><Link to="/blogs">BLOGS</Link></li> */}
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/sign-in">SIGN IN</Link></li>
                    <li ><Link to="/Admin">USER</Link></li>
                    <li><Link to="/Admin">ADMIN</Link></li>
                </ul>
            </div>
            <div className="navend">
            <h5 onClick={showmenu}> <FaBars/></h5>
            </div>
        </nav>
    </section>
    );
};

export default Navbar;