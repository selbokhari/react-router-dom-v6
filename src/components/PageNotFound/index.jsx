import classes from './index.module.css'

const PageNotFound = () => {
    return (
        <h1 className={classes.error}>
            La page n'est pas trouvée 😔 !
        </h1>
    );
}

export default PageNotFound;