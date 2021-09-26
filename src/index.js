import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "../src/components/css/style.css";
import "../src/components/css/header.css";
import "../src/components/css/SpecialOffer.css";
import "../src/components/css/DealsOfTheDay.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
      </Switch>{" "}
    </Router>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a functio
reportWebVitals();
