import {NavLink} from "react-router-dom";
import classes from "./index.module.css";

const NavBar = () => {
    return (
        <nav className={classes.container}>
            <ul className={classes.appBar}>
                <li><NavLink to="/" >Home </NavLink></li>
                <li><NavLink to="/page01" > Page 01 </NavLink></li>
                <li><NavLink to="/page02" > Page 02 </NavLink></li>
                <li><NavLink to="/page03" > Page 03 </NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;