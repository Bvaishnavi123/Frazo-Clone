import axios from "axios";

import { productAction } from "./ActionTypes";

export const FetchDataRequest = () => ({
  type: productAction.FETCH_DATA_REQUEST,
});
export const FetchDataSucess = (data) => ({
  type: productAction.FETCH_DATA_SUCCESS,
  payload: data,
});
export const FetchDataFailure = () => ({
  type: productAction.FETCH_DATA_FAILURE,
});

export const Fetchdata = (query) => (dispatch) => {
  const getdataRequestAction = FetchDataRequest();
  dispatch(getdataRequestAction);
  axios({
    url: `https://fraazomasaiapi.herokuapp.com/api/${query}`,
    method: "GET",
  })
    .then((res) => {
      console.log(res)
      const getdataSuccessAction = FetchDataSucess(res.data);
      dispatch(getdataSuccessAction);
    })
    .catch((err) => {
      const getdataErrorAction = FetchDataFailure();
      dispatch(getdataErrorAction);
    });
};
// https://fraazomasaiapi.herokuapp.com/api/dryfruits