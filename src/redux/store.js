import { legacy_createStore } from "redux";
import { reducer } from "./booking/reducer";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = legacy_createStore(rootReducer, composeWithDevTools());
