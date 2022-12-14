import "./Home_Styles/Sahil_Second_Single_Card.css";
import { useNavigate,Link } from "react-router-dom";


const Second_Single_Card = ({...elem}) => {
    const navigate=useNavigate()
    const {id,img1,title,mrp,strike,discount} = elem;
    const StoreAtLocalStorage=()=>{
        localStorage.setItem("singleProductdata",JSON.stringify(elem));
        // console.log(elem);
    }

    return (
        <Link to="/singleproduct"><div onClick={StoreAtLocalStorage} key={id} className="Sahil_Second_Single_Car_Item">
            <div>
                <img src={img1} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>MRP <span>₹{strike}</span></p>
                <p>₹{mrp} <span>{discount}% OFF</span></p>
            </div>
        </div></Link>
    );
}

export {Second_Single_Card};