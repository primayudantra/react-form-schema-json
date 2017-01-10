import React, { Component } from 'react';
import './App.css';

import schema from './schema.json'
import switchCase from './libs/formGenerator';

class App extends Component {
  render() {
    var form = schema.map(switchCase);
    return (
      <div className="App">
        <div className="container">
          <h2>Example React Schema Form</h2>
          <div className="container">
            {form}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
