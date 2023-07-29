import { productAction } from "./ActionTypes";

const initState = {
  loading: true,
  Products: [],
  error: false,
};

export const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case productAction.FETCH_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productAction.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        Products: action.payload,
        loading: false,
        error: false,
      };
    }
    case productAction.FETCH_DATA_FAILURE: {
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
