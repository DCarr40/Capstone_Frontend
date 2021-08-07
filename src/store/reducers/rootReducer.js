import authReducer from "./authReducer";
import eventReducer from "./eventReducer";
import { combineReducers } from "redux";

//Combine reducers in here to move up to the store
const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

export default rootReducer;
