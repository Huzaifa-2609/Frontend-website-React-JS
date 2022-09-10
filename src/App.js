import React, { Component } from 'react';
import Main from './components/Main';
import "./App.css"
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ConfigureStore } from './redux/configuer';
const store= ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <Main/>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

