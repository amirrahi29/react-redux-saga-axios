import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    productReducer
});

export default rootReducer;