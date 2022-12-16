import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "./profile/reducer";


const rootReducer = combineReducers({
    auth:authReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));