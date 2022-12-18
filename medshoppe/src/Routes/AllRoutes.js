import { Route, Routes } from "react-router-dom"


import Homepage from "../Pages/Home/Home";
import { ProductInfo } from "../Components/productInfo";
import {Productspage} from "../Components/productsPage";
import Form from '../Components/LogInPages/Form';
import {Cart} from '../Components/Cart/Cart';
import Advanced from '../Components/Checkout/Advanced';
import Payment from '../Components/Payment/Payment';
import HealthcarePage from "../Pages/Healthcare/HealthcarePage";
import Navbar from '../Components/SahilComponents/Navbar/Navbar';
import Footer from '../Components/SahilComponents/Footer/Footer';
import PaymentSuccess from "../Components/Payment/PaymentSuccess";
import PaymentFailure from "../Components/Payment/PaymentFailure";
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
            <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
            <Route path="/paymentfailure" element={<PaymentFailure/>}/>
            <Route path="/category" element={<HealthcarePage/>}/>
            <Route path="/ordermedicine" element={<OrderMedicinesPage/>}/>
            
        </Routes>
        <Footer/>
        </div>
    )
}