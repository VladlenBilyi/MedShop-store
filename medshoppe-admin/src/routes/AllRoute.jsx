import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Order from "../pages/order";
import Profile from "../pages/Profile";
import Product from "../pages/product";
import Login from "../pages/login";
import SingleProduct from "../pages/singleProduct";

function AllRoutes(){
    return <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
    </Routes>
}


export default AllRoutes;