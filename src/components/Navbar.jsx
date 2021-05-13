import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    return <div className="main">
        {props.children}
    </div>
}

export default Navbar;