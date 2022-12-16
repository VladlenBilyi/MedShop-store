import { Route, Routes } from "react-router-dom"
import { Cart } from "../components/Cart/Cart"
import Advanced from "../components/Checkout/Advanced"
import Form from "../components/LogInPages/Form"
import Payment from "../components/Payment/Payment"
import { ProductInfo } from "../components/productInfo"
import { Productspage } from "../components/productsPage"
import Footer from "../components/SahilComponents/Footer/Footer"
import Navbar from "../components/SahilComponents/Navbar/Navbar"
import HealthcarePage from "../Pages/Healthcare/HealthcarePage"
import Homepage from "../Pages/Home/Home"

export const AllRoutes=()=>{
    return (
        
        <div>
            <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/products" element={<Productspage/>}/>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route path="/login" element={<Form/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Advanced/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/category" element={<HealthcarePage/>}/>
            
        </Routes>
        <Footer/>
        </div>
    )
}