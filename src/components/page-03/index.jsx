import {Navigate, useNavigate} from "react-router-dom";
import classes from "./index.module.css"

const Page03 = () => {

    const siRedirection = false ;
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/", {state: {message : "Ceci est un statut envoyé avec la redirection"}})
    }

    return (
        <div className={classes.customDev}>
            <h1>Page 03 </h1>
            {siRedirection &&
                <Navigate to="/page01"/>
            }
            <button onClick={goHome} className={classes.button}>Aller à l'acceuil</button>
        </div>
    )
}

export default Page03;