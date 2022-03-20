import { userType } from "./userReducer";

export enum ActionType {
  USER_FETCH_REQUEST = "USER_FETCH_REQUEST",
  USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS",
  USER_FETCH_FAILURE = "USER_FETCH_FAILURE",
}

interface fetchUserAction {
  type: ActionType.USER_FETCH_REQUEST;
}
interface fetchUserSuccessAction {
  type: ActionType.USER_FETCH_SUCCESS;
  payload: userType[];
}

interface fetchUserFailureAction {
  type: ActionType.USER_FETCH_FAILURE;
  payload: string;
}

export type Action =
  | fetchUserAction
  | fetchUserSuccessAction
  | fetchUserFailureAction;
