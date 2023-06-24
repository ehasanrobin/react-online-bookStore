import { FILTER } from "./actionTypes";

export const filter = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};
