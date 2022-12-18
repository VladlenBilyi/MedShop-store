import "./Home_Styles/Sahil_Second_Single_Card.css";
import { Link } from "react-router-dom";


const Second_Single_Card = ({...elem}) => {

    const {_id,img1,title,mrp,strike,discount} = elem;

    return (
        
        <Link to={`product/${_id}`}><div  key={_id} className="Sahil_Second_Single_Car_Item">
            <div>
                <img src={img1} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>MRP <span>₹{strike}</span></p>
                <p>₹{mrp} <span>{Math.floor(strike-mrp)} rs.. OFF</span></p>
            </div>
        </div></Link>
        
    );
}

export {Second_Single_Card};