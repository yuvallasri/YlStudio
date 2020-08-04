import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Gear from "./Components/Gear";
import Gallery from './Components/Gallery';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
            <Header />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Home" component={Home} />
            <Route path="/Gear" component={Gear} />
            <Route path="/About" component={About} />
        </div>
        </Router>
  );
  }
}
export default App;
