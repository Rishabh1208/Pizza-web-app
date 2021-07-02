import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import { StoreConfigure } from "./redux/StoreConfigure";
import * as serviceWorker from "./serviceWorker";

const store = StoreConfigure();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
