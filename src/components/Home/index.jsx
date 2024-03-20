import {useLocation} from "react-router-dom";
import classes from './index.module.css'

const HomePage = () => {
    const {state} = useLocation();
    return (
        <div className={classes.title}>
            <h1>Page d'acceuil </h1>
            {state?.message &&
                <div className={classes.message}>
                    <div>Le statut envoyé est :</div>
                    <div>{state?.message}</div>
                </div>
            }
        </div>
    )
}

export default HomePage;