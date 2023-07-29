import { productOneAction } from "./ActionTypes";

const initState = {
  loading: true,
  Product: {},
  error: false,
};

export const ProductOneReducer = (state = initState, action) => {
  switch (action.type) {
    case productOneAction.FETCH_ONE_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productOneAction.FETCH_ONE_DATA_SUCCESS: {
      return {
        ...state,
        Product: action.payload,
        loading: false,
        error: false,
      };
    }
    case productOneAction.FETCH_ONE_DATA_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    default:
      return state;
  }
};
