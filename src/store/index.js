import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import HouseReducer from "./reducers/house.reducer";
import OrderReducer from "./reducers/order.reducer";
import PlacesReducer from "./reducers/places.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  houses: HouseReducer,
  cart: CartReducer,
  reservation: OrderReducer,
  auth: AuthReducer,
  places: PlacesReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
