import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
 
const NavBar = () =>{
    return(
        <header>
            <h1>Nombre Tienda</h1>
            <nav>
                <ul>
                    <li>Pantalones</li>
                    <li>Remeras</li>
                    <li>Ver Todo</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;