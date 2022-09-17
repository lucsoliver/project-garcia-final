import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="card">
      <form>
        <label>
            Nome:
            <input type="text" name="name" />
        </label>
        <br/>
        <label>
            Email:
            <input type="email" name="name" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
