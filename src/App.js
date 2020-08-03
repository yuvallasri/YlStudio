import React, {Component} from 'react';
import './App.css';
// import Header from "./Header";
import Gallery from './Components/Gallery'
import Header from "./Header";
class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
          <Gallery />
        </div>
  );
  }
}
export default App;
