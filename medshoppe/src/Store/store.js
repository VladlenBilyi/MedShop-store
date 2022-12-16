import {legacy_createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/auth.reducer";
import { productsReducer } from "./products/products.reducer";
const rootReducer=combineReducers({
products:productsReducer,
auth:authReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))