import { Action, ActionType } from "./userActionType";
const initialState: formState = {
  loading: false,
  success: "",
  error: "",
};

export interface formState {
  loading: boolean;
  success: string | {};
  error: string | {};
}
export const formReducer = (
  state: formState = initialState,
  action: Action
): formState => {
  switch (action.type) {
    case ActionType.USER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.USER_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: "",
      };
    case ActionType.USER_CREATE_FAILURE:
      return {
        loading: false,
        success: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
