import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';
import store from "./redux/store";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
