
import counterSlice from "../slice/counter.slice";
import categorySlice from "../slice/category.slice";
import { combineReducers } from "redux";
import SubCategorySlice from "../slice/SubCategory.Slice";
import ShoppingSlice from "../slice/Shopping.Slice";
import ProductSlice from "../slice/Product.Slice";
import FilterSlice from "../slice/Filter.Slice";
import BrandSlice from "../slice/Brand.Slice";
import FavouriteSice, { getfav } from "../slice/Favourite.Sice";
import CartSlice from "../slice/Cart.Slice";
import ShippingAddressSlice from "../slice/ShippingAddress.Slice";
import authSlice from "../slice/auth.Slice";



export const rootReducer = combineReducers({
    count: counterSlice,
    categories: categorySlice,
    subcategories: SubCategorySlice,
    shopping: ShoppingSlice,
    product: ProductSlice,
    Filters: FilterSlice,
    BrandF: BrandSlice,
    favourites: FavouriteSice,
    fav: FavouriteSice,
    carts: CartSlice,
    Shippingaddress: ShippingAddressSlice,
    auth: authSlice

});