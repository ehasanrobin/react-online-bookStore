import { FILTER } from "./actionTypes";
import { initialState } from "./initialState";

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
