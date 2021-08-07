import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; //applyMiddleware documentation https://redux.js.org/api/applymiddleware
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk"; // will use thunk as middleware. I will basically pause the action creator to do an async func.

const store = createStore(rootReducer); //root reducer congregates all actions to the store.
//Then we pass store to Provider to surround App and use when needed
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
