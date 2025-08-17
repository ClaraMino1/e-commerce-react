import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link,NavLink } from "react-router-dom";
 
const NavBar = () =>{
    return(
        <header>
           <Link to="/"> 
                <h1>Thelirium</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/guitarras">Guitarras</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/percusion">Percusion</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/teclas">Teclas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/bajos">Bajos</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;