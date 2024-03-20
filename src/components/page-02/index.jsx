import classes from "./index.module.css"
import {NavLink, useOutlet} from "react-router-dom";

const Page02 = () => {
    const outlet = useOutlet();
    return (
        <div className={classes.customDev}>
            <h1>Page 02</h1>
            <div className={classes.sousPageBar}>
                <NavLink to="sub-01" >Sous page 01</NavLink>
                <NavLink to="sub-02" >Sous page 02</NavLink>
            </div>
            <div>{outlet}</div>
        </div>
    )
}

export default Page02;