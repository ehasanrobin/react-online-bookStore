import { addbook, deletebook } from "../booking/actions";

export const deleteBookThunk = (bookId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${bookId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      dispatch(deletebook(bookId));
    } catch (error) {
      console.log(error);
    }
  };
};
