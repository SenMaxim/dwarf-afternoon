import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Footer from './Footer'
import ExpandedRow from './ExpandedRow'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <ExpandedRow />
        <Footer />
      </div>
    );
  }
}

export default App;
