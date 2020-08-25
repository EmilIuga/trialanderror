import React, { Component } from "react";
import logo from "./logo.svg";
import CardPadding from "./components/card-component/card.component.jsx";

import "./App.css";

class App extends Component {
  schimb = () => {
    this.props.dispatch({ type: "Schimb" });
  };

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "franken",
          id: "asc1",
        },
        {
          name: "dracula",
          id: "asdas",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <CardPadding monsters={this.state.monsters}></CardPadding>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default App;
