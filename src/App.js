import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Buy from "./Buy";
import PastOrders from "./PastOrders";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/buy">
            <Buy />
          </Route>

          <Route path="/pastOrders">
            <PastOrders />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
