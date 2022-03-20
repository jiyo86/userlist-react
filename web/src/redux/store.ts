import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer, userState } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export interface ApplicationState {
  user: userState;
}
