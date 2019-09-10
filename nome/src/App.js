import React, { Component } from 'react';
import Header from "./compontens/Header"
import Home from "./compontens/Home"
import {HashRouter,NavLink} from "react-router-dom"

import "./App.css"
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
        <Header></Header>
        <Home></Home>
        </HashRouter>

      </div>
    );
  }
}

export default App;