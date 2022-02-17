import  {createStore, combineReducers} from "redux";
import {userReducer} from "./reducers/userReducer";
import {productReducer} from "./reducers/productReducer";


const rootReducer = combineReducers({
    productsBought: productReducer,
    userData: userReducer
})

const store = createStore(rootReducer);

export default store;