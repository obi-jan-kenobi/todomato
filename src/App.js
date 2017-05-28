import React, { Component } from 'react';
import AddTodo from './containers/add-todo'
import Timer from './containers/timer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer></Timer>
        <AddTodo></AddTodo>
      </div>
    );
  }
}

export default App;
