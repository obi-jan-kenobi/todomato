import React, { Component } from 'react';
import Container from './components/container'
import AddTodo from './containers/add-todo'
import Timer from './containers/timer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Timer></Timer>
          <AddTodo></AddTodo>
        </Container>
      </div>
    );
  }
}

export default App;
