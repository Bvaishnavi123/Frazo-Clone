import axios from "axios";

import { productOneAction } from "./ActionTypes";

export const FetchOneDataRequest = () => ({
  type: productOneAction.FETCH_ONE_DATA_REQUEST,
});
export const FetchOneDataSucess = (data) => ({
  type: productOneAction.FETCH_ONE_DATA_SUCCESS,
  payload: data,
});
export const FetchOneDataFailure = () => ({
  type: productOneAction.FETCH_ONE_DATA_FAILURE,
});

export const FetchOnedata = (query,id) => (dispatch) => {
  const getdataRequestAction = FetchOneDataRequest();
  dispatch(getdataRequestAction);
  axios({
    url: `http://localhost:4800/api/${query}/${id}`,
    method: "GET",
  })
    .then((res) => {
      console.log("res",res)
      const getdataSuccessAction = FetchOneDataSucess(res.data);
      dispatch(getdataSuccessAction);
    })
    .catch((err) => {
      const getdataErrorAction = FetchOneDataFailure();
      dispatch(getdataErrorAction);
    });
};
// https://fraazomasaiapi.herokuapp.com/api/dryfruits