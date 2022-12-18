import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Home/Home";
import { ProductInfo } from "../Components/productInfo";
import { Productspage } from "../Components/productsPage";
import Form from "../Components/LogInPages/Form";
import { Cart } from "../Components/Cart/Cart";
import Advanced from "../Components/Checkout/Advanced";
import Payment from "../Components/Payment/Payment";
import HealthcarePage from "../Pages/Healthcare/HealthcarePage";
import Navbar from "../Components/SahilComponents/Navbar/Navbar";
import Footer from "../Components/SahilComponents/Footer/Footer";
import PaymentSuccess from "../Components/Payment/PaymentSuccess";
import PaymentFailure from "../Components/Payment/PaymentFailure";
import OrderMedicinesPage from "../Pages/OrderMedicines/OrderMedicinesPage";
import PrivateRoute from "./PrivateRoute";
import { OrdersPage } from "../Components/ordersPage";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Productspage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/login" element={<Form />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Advanced />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/paymentsuccess"
          element={
            <PrivateRoute>
              <PaymentSuccess />
            </PrivateRoute>
          }
        />
        <Route
          path="/paymentfailure"
          element={
            <PrivateRoute>
              <PaymentFailure />
            </PrivateRoute>
          }
        />
        <Route path="/order" element={<OrdersPage/>}></Route>
        <Route path="/category" element={<HealthcarePage />} />
        <Route path="/ordermedicine" element={<OrderMedicinesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
