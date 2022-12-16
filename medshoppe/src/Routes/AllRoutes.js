import { Route, Routes } from "react-router-dom"
import {Home} from '../Components/SahilComponents/homePages/Home';
import {Productspage} from '../Components/productsPage';
import {ProductInfo} from '../Components/productInfo';
import Form from '../Components/LogInPages/Form';
import {Cart} from '../Components/Cart/Cart';
import Advanced from '../Components/Checkout/Advanced';
import Payment from '../Components/Payment/Payment';
import {Healthcare} from '../Components/SahilComponents/Healthcare/Healthcare';
import Navbar from '../Components/SahilComponents/Navbar/Navbar';
import Footer from '../Components/SahilComponents/Footer/Footer'
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