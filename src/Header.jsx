import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="w-100" style={{borderBottom: "0.5px solid black", display:"flex", height: "60px", backgroundColor: "#ffffcc", fontFamily: "sans-serif" }}>
            <div >
                <h1 className="mx-3 pt-2" style={{ fontFamily:"Roboto", color: "#7c86fc" }}>Osum Tech</h1>
                </div>
                <div className="" style={{marginLeft : "350px",marginTop: "20px"}}>    
                <NavLink  className="menuList" to="/home">Home</NavLink>
                <NavLink  className="menuList" to="/service">Service</NavLink>
                <NavLink  className="menuList" to="/about">About</NavLink>
                <NavLink  className="menuList" to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Header;