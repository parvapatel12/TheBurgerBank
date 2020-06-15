import React from "react";
import welcome from "./images/heading.png";
import "./App.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "real",
    };
  }

  ChangeTheme = () => {
    if (this.state.theme === "cartoon") {
      this.setState({
        theme: "real",
      });
    } else {
      this.setState({
        theme: "cartoon",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="ChangeThemeButton" onClick={this.ChangeTheme}>
          Change theme
        </div>
        <img className="welcome" src={welcome} alt="The Burger Bank" />
        {this.state.theme === "cartoon" ? (
          <div>
            <div className="burger_background1"></div>
            <div
              className="UIbutton1 buy"
              onClick={(event) => (window.location.href = "/#/buy/")}
            >
              <span>Grab a Burger</span>
            </div>
            <div
              className="UIbutton1 past_orders"
              onClick={(event) => (window.location.href = "/#/pastOrders/")}
            >
              <span>Past Orders</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="burger_background2"></div>
            <div
              className="UIbutton2 buy2"
              onClick={(event) => (window.location.href = "/#/buy/")}
            >
              <span>Grab a Burger</span>
            </div>
            <div
              className="UIbutton2 past_orders2"
              onClick={(event) => (window.location.href = "/#/pastOrders/")}
            >
              <span>Past Orders</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
