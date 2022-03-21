import { Dispatch } from "redux";
import { Action, ActionType } from "./userActionType";
import { userType } from "./userReducer";
import axios from "axios";

export const fetchUserList = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.USER_FETCH_REQUEST });
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/userlist`)
      .then((response) => {
        dispatch({
          type: ActionType.USER_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: ActionType.USER_FETCH_FAILURE, payload: error });
      });
  };
};

export const addUser = async (user: userType) => {
  const data = await axios
    .post(`${process.env.REACT_APP_BACKEND_API}/adduser`, user)
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.log("err", error);
      return error;
    });
  return data;
};
