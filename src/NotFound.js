import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Opps</h2>
            <p>esta pagina no se ha encontrado</p>
            <Link to="/">para volver a la pagina inicial...</Link>
        </div>
    );
}
 
export default NotFound;