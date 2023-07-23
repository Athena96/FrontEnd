import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { API } from 'aws-amplify';

class App extends Component {
  state = {
    res: 0
  };

  async componentDidMount() {
    const res = await API.post('Endpoint', '/router', {
      body: {
        key1: '2',
        key2: '3',
        // ...
      },
    });
    console.log("API CALL");
    console.log(JSON.stringify(res));
    console.log("response.body " + res);
    this.setState({ res: res });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Jared TS: Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>2 + 3 = {this.state.res}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
