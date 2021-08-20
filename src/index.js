import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/Redux/store";
//I gotta research lazy loading w/ React and Redux. It looks like it might work too.
//documentation for thunk is a little tough to get a good grasp of use 
//I found this link helpful to understanding structure setup in your actual code https://www.youtube.com/watch?v=qA6oyQQTJ3I&ab_channel=SanjeevThiyagarajan
// freedcodecamp.org was very helpful. Diagrams are silly but follow the numbers and
// everything will make more sense https://www.freecodecamp.org/news/how-to-connect-react-to-redux-a-diagrammatic-guide-d2687c14750a/ 


//Then we pass store to Provider to surround App and use when needed
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
