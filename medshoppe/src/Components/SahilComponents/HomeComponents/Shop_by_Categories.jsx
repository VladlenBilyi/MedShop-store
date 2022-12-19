// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home_Styles/Shop_by_Categories.css";
import { useDispatch } from "react-redux";
import { AddCategories } from "../../../Store/products/products.action";
const Shop_by_Categories = () => {
    const dispatch=useDispatch();
    const handalechange=(Category)=>{
        dispatch(AddCategories(Category))
    }

    
    return (
        <div>
            <p className="p-tag_Categories_Brands">Shop by Categories</p>
            <div className="Home_Categories_Brands">
                <Link onClick={()=>handalechange("Skin Care")} to={`/product`}>
                <div  className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png" alt="" />
                    </div>
                    <div>
                    Skin Care
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div onClick={()=>handalechange("HealthCare Devices")} className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        HealthCare Devices
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div onClick={()=>handalechange("Personal Care")} className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Personal Care
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div onClick={()=>handalechange("Health Food")} className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Health Food
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div onClick={()=>handalechange("Beauty")} className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png?dim=360x0" alt="" />
                    </div>
                    <div>
                        Beauty
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div onClick={()=>handalechange("Ayurvedic Care")} className="Home_Categories_Brands_Item">
                    <div>
                        <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png" alt="" />
                    </div>
                    <div>
                        Elderly Care
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export {Shop_by_Categories};