
import counterSlice from "../slice/counter.slice";
import categorySlice from "../slice/category.slice";
import { combineReducers } from "redux";
import SubCategorySlice from "../slice/SubCategory.Slice";
import ShoppingSlice from "../slice/Shopping.Slice";


export const rootReducer = combineReducers({
    count: counterSlice,
    categories: categorySlice,
    subcategories:SubCategorySlice,
    shopping:ShoppingSlice
});