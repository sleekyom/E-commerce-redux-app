import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  loading: false,
  products: [
    {
      id: 1,
      title: "Yommex",
      category: "Developer"
    }
  ],
  error: ""
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
