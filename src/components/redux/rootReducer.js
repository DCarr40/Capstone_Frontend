import { combineReducers } from "redux";
import { notiReducers } from "./Notifications/notificationsReducers";
import { eventReducers } from "./Events/eventReducers";
import { authReducers } from "./Auth/authReducers";
import { runnerReducers } from "./Runners/runnerReducers";
import weatherReducers from "./Weather/weatherReducers";
import runGroupReducers from "./RunGroup/rungroupReducers";

const rootReducer = combineReducers({
  event:eventReducers,
  auth:authReducers,
  weather:weatherReducers,
  runner:runnerReducers,
  notification: notiReducers,
  runGroup: runGroupReducers,
});

export default rootReducer;