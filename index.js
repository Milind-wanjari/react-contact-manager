import React, { Component } from "react";
import { render } from "react-dom";
import BaseApp from "./BaseApp";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <BaseApp />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
