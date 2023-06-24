import { ADDBOOK, DELETEBOOK, UPDATEBOOK } from "./actionTypes";
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
    case ADDBOOK:
      const { bookName, author, thumbnail, price, rating, featured } =
        action.payload;
      return [
        ...state,
        {
          id: nextId(state),
          bookName,
          author,
          thumbnail,
          price,
          rating,
          featured,
        },
      ];

    case UPDATEBOOK:
      return state.map((book) => {
        const { bookName, author, thumbnail, price, rating, featured } =
          action.payload;
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
