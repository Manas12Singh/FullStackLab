import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Menu = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/contact"> Contact</Link>
            </nav>
        </div>
    )
}

export default Menu;