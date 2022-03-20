import { Dispatch } from "redux";
import { Action, ActionType } from "./userActionType";
import { userType } from "./userReducer";
import axios from "axios";

export const fetchUserList = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.USER_FETCH_REQUEST });
    axios
      .get("http://3.83.122.242:8080/userlist")
      .then((response) =>
        dispatch({
          type: ActionType.USER_FETCH_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({ type: ActionType.USER_FETCH_FAILURE, payload: error })
      );
  };
};

export const addUser = (user: userType) => {
  return (dispatch: Dispatch<Action>) => {
    //dispatch({ type: ActionType.USER_FETCH_REQUEST });
    axios
      .post("http://3.83.122.242:8080/adduser", user)
      .then((response) =>
        dispatch({
          type: ActionType.USER_FETCH_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({ type: ActionType.USER_FETCH_FAILURE, payload: error })
      );
  };
};
