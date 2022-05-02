import "../styles/_Card.scss";
import { Link } from "react-router-dom";

const Card = ({metodo}) => {
    return (
        <Link to={`/metodo/${metodo}`} className="card">
            <div className="card-title">
                <h2>
                    {metodo}                
                </h2>               
            </div>            
        </Link>
    )
}

export default Card;