import "./Navbar.css";
import React from "react";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">lamabooking</span>
                <div className="navItems">
                    <button className="navbutton">Register</button>
                    <button className="navbutton">Login</button>

                </div>
            </div>
        </div>
    )
}
export default Navbar;