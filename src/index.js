import App from "./components/App";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducer from "./reducers";

ReactDOM.render(
  <Provider store={createStore(allReducer)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
