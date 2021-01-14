import React from "react";
import "./Header.css";
import Logo from "./assets/logo.svg"


function Header() {
    return (
        <div className="header_wrapper">
            <div className="header_logo">
                <img src={Logo} width={398}/>
            </div>
            <div className="header_title">
                Stock Ticker
            </div>
        </div>
    )
}

export default Header