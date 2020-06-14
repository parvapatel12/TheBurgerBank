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
          <Route exact path="/TheBurgerBank">
            <Home />
          </Route>

          <Route path="/TheBurgerBank/buy">
            <Buy />
          </Route>

          <Route path="/TheBurgerBank/pastOrders">
            <PastOrders />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
