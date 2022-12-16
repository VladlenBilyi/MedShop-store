import {legacy_createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { productsReducer } from "./products/products.reducer";
const rootReducer=combineReducers({
products:productsReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))