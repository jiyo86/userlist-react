import { Action, ActionType } from "./userActionType";
const initialState: userState = {
  loading: false,
  data: [],
  error: null,
};

export interface userType {
  firstname: string;
  lastname: string;
  email: string;
  id: string;
}
export interface userState {
  loading: boolean;
  data: userType[];
  error: string | null;
}

export const userReducer = (
  state: userState = initialState,
  action: Action
): userState => {
  switch (action.type) {
    case ActionType.USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.USER_FETCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case ActionType.USER_FETCH_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
