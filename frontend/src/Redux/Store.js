import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { ProductOneReducer } from "./ProductDetails/Reducer";
import { ProductReducer } from "./Products/Reducer";

const rootReducer = combineReducers({
  Product: ProductReducer,
  OneProduct:ProductOneReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
