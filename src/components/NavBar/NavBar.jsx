import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link,NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";

 
const NavBar = () =>{
    return(
        <header>
            
            <Link to="/" className="logo-container"> 
                <img src={logo} alt="Logo de Thelirium" className="logo"/>
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