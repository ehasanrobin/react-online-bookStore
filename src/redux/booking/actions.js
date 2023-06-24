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
export const addbook = (book) => {
  return {
    type: ADDBOOK,
    payload: book,
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
