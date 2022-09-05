import React, { Component } from 'react';
import Main from './components/Main';
import "./App.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Main/>
      </div>
      </Router>
    );
  }
}

export default App;

