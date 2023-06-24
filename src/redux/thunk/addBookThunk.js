import { addbook, loadbook } from "../booking/actions";

export const addBookThunk = (bookObj) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("http://localhost:9000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj),
      });
      const data = await response.json();
      dispatch(addbook(data));
    } catch (error) {
      console.log(error);
    }
  };
};
