import { addbook, loadbook, updateBook } from "../booking/actions";

export const updateBookThunk = (bookObj) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:9000/books/${bookObj.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookObj),
        }
      );
      const data = await response.json();
      dispatch(updateBook(data));
    } catch (error) {
      console.log(error);
    }
  };
};
