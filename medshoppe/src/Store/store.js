import {legacy_createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { addressReducer } from "./Address/checkout.reducer";
import { authReducer } from "./Auth/auth.reducer";
import { productsReducer } from "./products/products.reducer";
const rootReducer=combineReducers({
products:productsReducer,
auth:authReducer,
address : addressReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))