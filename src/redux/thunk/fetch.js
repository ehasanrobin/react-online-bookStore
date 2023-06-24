import { loadbook } from "../booking/actions";

export const loadData = () => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/books");
    const data = await response.json();
    console.log(data);
    dispatch(loadbook(data));
  };
};
