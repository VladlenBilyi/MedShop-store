import { Route, Routes } from "react-router-dom"
import Homepage from "../Pages/Home/Home";
import { ProductInfo } from "../components/productInfo";
import {Productspage} from "../components/productsPage";
import Form from '../components/LogInPages/Form';
import {Cart} from '../components/Cart/Cart';
import Advanced from '../components/Checkout/Advanced';
import Payment from '../components/Payment/Payment';
import HealthcarePage from "../Pages/Healthcare/HealthcarePage";
import Navbar from '../components/SahilComponents/Navbar/Navbar';
import Footer from '../components/SahilComponents/Footer/Footer'
import OrderMedicinesPage from "../Pages/OrderMedicines/OrderMedicinesPage";
export const AllRoutes=()=>{
    return (
        
        <div>
            <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product" element={<Productspage/>}/>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route path="/login" element={<Form/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Advanced/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/category" element={<HealthcarePage/>}/>
            <Route path="/ordermedicine" element={<OrderMedicinesPage/>}/>
            
        </Routes>
        <Footer/>
        </div>
    )
}