import {
  ADDBOOK,
  DELETEBOOK,
  LOADBOOK,
  SINGLEBOOK,
  UPDATEBOOK,
} from "./actionTypes";

export const loadbook = (books) => {
  return {
    type: LOADBOOK,
    payload: books,
  };
};
export const addbook = (bookObj) => {
  return {
    type: ADDBOOK,
    payload: bookObj,
  };
};

export const deletebook = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  };
};
export const updateBook = (bookobj) => {
  return {
    type: UPDATEBOOK,
    payload: bookobj,
  };
};
