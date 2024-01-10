import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <>
            <nav className="Navbar">
                <ul className="menu">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bitcoin">BTC Rates</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};
