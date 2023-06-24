import { combineReducers } from "redux";
import { reducer } from "./booking/reducer";
import { filterReducer } from "./filter/reducer";

export const rootReducer = combineReducers({
  books: reducer,
  filter: filterReducer,
});
