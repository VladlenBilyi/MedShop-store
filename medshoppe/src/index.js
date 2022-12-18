import React from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { ChakraProvider } from "@chakra-ui/react";
// import Advanced from './Components/Checkout/Advanced';
// import Payment from './Components/Payment/Payment'
// import Form from './Components/LogInPages/Form';
// import {Cart} from './Components/Cart/Cart';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
