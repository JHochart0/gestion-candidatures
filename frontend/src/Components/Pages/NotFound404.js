import { Link } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div className="not-found">
            <h2>Désolé</h2>
            <p>Cette page n'a pas pu être trouvée.</p>
            <Link to="/">Retourner à l'accueil</Link>
        </div>
    );
}
 
export default NotFound404;