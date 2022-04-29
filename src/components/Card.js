import "../styles/_Card.scss";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({metodo}) => {
    return (
        <Link to={`/metodo/${metodo}`} class="card">
            <div className="card-title">
                <h2>
                    {metodo}                
                </h2>
                <BsArrowRightShort />
            </div>
            
        </Link>
    )
}

export default Card;