import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer, userState } from "./userReducer";
import { formState, formReducer } from "./formReducer";

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export interface ApplicationState {
  user: userState;
  form: formState;
}
