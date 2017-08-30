import React, { Component } from 'react';
import Container from './components/container'
import AddTodo from './containers/add-todo'
import TodoList from './containers/todo-list'
import Timer from './containers/timer'
import logo from './logo.svg';
import './App.css';

const complete = [
  {
    key: '1',
    name: 'git init'
  }
]

const incomplete = [
  {
    key: '1',
    name: 'make awesome todomodoro'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Timer></Timer>
          <AddTodo></AddTodo>
          <TodoList incomplete={incomplete} complete={complete} />
        </Container>
      </div>
    );
  }
}

export default App;
