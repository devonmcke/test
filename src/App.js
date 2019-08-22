import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World!"
    };
  }
  formSubmitted(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input id="newTodo" name="newTodo" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
export default App;
