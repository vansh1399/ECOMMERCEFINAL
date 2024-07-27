
import counterSlice from "../slice/counter.slice";
import categorySlice from "../slice/category.slice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    count: counterSlice,
    categories: categorySlice
});