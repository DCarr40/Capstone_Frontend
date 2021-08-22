import { createStore, combineReducers, applyMiddleware } from "redux"; //applyMiddleware documentation https://redux.js.org/api/applymiddleware
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { notificationReducers } from "./reducers/notificationReducers";
import {eventReducers} from "./reducers/eventReducers";
import { authReducers } from "./reducers/authReducers";
import { weatherReducers } from "./reducers/weatherReducers";
import { runnerReducers } from "./reducers/runnerReducers";


const reducer = combineReducers({
  notifications: notificationReducers,
  eventReducers: eventReducers,
  authReducers: authReducers,
  weatherReducers: weatherReducers,
  runnerReducers:runnerReducers,
});

const middleware = [thunk]; // will use thunk as middleware. I will basically pause the action creator to do an async func.

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
