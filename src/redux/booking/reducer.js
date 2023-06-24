import { ADDBOOK, DELETEBOOK, LOADBOOK, UPDATEBOOK } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (state) => {
  const id = state.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    1
  );
  return id;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADBOOK:
      return action.payload;
    case ADDBOOK:
      return [...state, action.payload];

    case UPDATEBOOK:
      return state.map((book) => {
        if (book.id !== action.payload.id) {
          return book;
        }
        return {
          ...action.payload,
        };
      });

    case DELETEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
