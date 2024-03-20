import {useParams, useSearchParams} from "react-router-dom";
import classes from "./index.module.css"

const Page01 = () => {

    const LignHorisontal = ({text}) => {
        return (
            <h3 className={classes.paramsContainer}>
                <hr/>
                <p>{text}</p>
                <hr/>
            </h3>
        )
    };
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const nom = searchParams.get("nom");
    const prenom = searchParams.get("prenom");

    const modifierLesPrams = () => {
        setSearchParams({nom: "EL MADANI", prenom: "AMIN" })
    }
    return (
        <div className={classes.customDev}>
            <h1>Page 01</h1>
            {id && <>
                <LignHorisontal text="Paramètres"/>
                <h2>
                    <h2> id : {id}</h2>
                </h2>
            </>}
            {(nom || prenom) &&
                <>
                    <LignHorisontal text="Paramètres de recherche"/>
                    <div>
                        <h2>Nom: {nom}</h2><br/>
                        <h2>Prénom: {prenom}</h2>
                    </div>
                </>
            }
            <button onClick={modifierLesPrams} className={classes.modification}>
                Modifier les paramètres de recherche à : "EL MADANI AMINE"
            </button>
        </div>
    )
}

export default Page01;