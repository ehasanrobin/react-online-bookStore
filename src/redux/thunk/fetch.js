import { loadbook } from "../booking/actions";

export const loadData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("http://localhost:9000/books");
      const data = await response.json();
      console.log(data);
      dispatch(loadbook(data));
    } catch (error) {
      console.log(error);
    }
  };
};
