import { createStore, combineReducers, applyMiddleware } from "redux"; //applyMiddleware documentation https://redux.js.org/api/applymiddleware
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { notificationReducers } from "./reducers/notificationReducers";
import {getEventReducer} from "./reducers/eventReducer";
import { getEventDetailsReducer } from "./reducers/eventDetailReducers";


const reducer = combineReducers({
  notifications: notificationReducers,
  getEvents: getEventReducer,
  getEventDetails: getEventDetailsReducer,
});

const middleware = [thunk]; // will use thunk as middleware. I will basically pause the action creator to do an async func.

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
