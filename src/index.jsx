import React from "react";
import ReactDOM from "react-dom";
import "./global-styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { LoggedIn } from "./pages/LoggedIn";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/in" component={LoggedIn} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
