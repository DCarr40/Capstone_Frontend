import { createStore, combineReducers, applyMiddleware } from "redux"; //applyMiddleware documentation https://redux.js.org/api/applymiddleware
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { notiReducers } from "./reducers/notificationReducers";
import { eventReducers } from "./reducers/eventReducers";
import { authReducers } from "./reducers/authReducers";
import { weatherReducers } from "./reducers/weatherReducers";
import { runnerReducers } from "./reducers/runnerReducers";
import userReducer from "./reducers/userSlice";

const reducer = combineReducers({
  eventReducers,
  authReducers,
  weatherReducers,
  runnerReducers,
  notiReducers,
  user: userReducer,
});

const middleware = [thunk]; // will use thunk as middleware. I will basically pause the action creator to do an async func.

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
