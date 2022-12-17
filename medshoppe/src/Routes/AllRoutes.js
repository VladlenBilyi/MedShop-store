import { Route, Routes } from "react-router-dom"
import {Home} from "../components/SahilComponents/homePages/Home"
import {Productspage} from "../components/productsPage"
import {ProductInfo} from "../components/productInfo"
import Navbar from "../components/SahilComponents/Navbar/Navbar"
import Form from "../components/LogInPages/Form"
import {Cart} from "../components/Cart/Cart"
import Advanced from "../components/Checkout/Advanced"
import Payment from "../components/Payment/Payment"
import {Healthcare} from "../components/SahilComponents/Healthcare/Healthcare"
import Footer from "../components/SahilComponents/Footer/Footer"

export const AllRoutes=()=>{
    return (
        
        <div>
            <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Productspage/>}/>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route path="/login" element={<Form/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Advanced/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/category" element={<Healthcare/>}/>
            
        </Routes>
        <Footer/>
        </div>
    )
}