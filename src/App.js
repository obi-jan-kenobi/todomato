import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import Container from "./components/container";
import AddTodo from "./containers/add-todo";
import Todos from "./components/todos";
import Timer from "./containers/timer";
import { completeTodo, addTodo } from "./util";

export const MAX_TIME = 1500;

const theme = {
  background: "#2B3538",
  primary: "#50B5AE",
  secondary: "#F7F5B0",
  highlight: "#A5E6E1",
  muted: "#37494F"
};

// eslint-disable-next-line
injectGlobal`
  body {
    font-size: 19px;
    background-color: ${theme.background};
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      selected: null
    };

    const methods = [
      "handleAdd",
      "handleSelect",
      "handleComplete",
      "handleCountdown"
    ];

    methods.forEach(m => (this[m] = this[m].bind(this)));
  }

  handleCountdown(idx) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        this.state.todos[idx].remaining <= 0
          ? {
              ...this.state.todos[idx],
              remaining: MAX_TIME,
              cycles: this.state.todos[idx].cycles + 1
            } ||
            new Notification("Pomodoro done", {
              body: `You finished ${this.state.todos[idx]
                .name}. Now take a break`
            })
          : {
              ...this.state.todos[idx],
              remaining: this.state.todos[idx].remaining - 1
            },
        ...this.state.todos.slice(idx + 1)
      ]
    });
  }

  handleReset(idx) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        {
          ...this.state.todos[idx],
          remaining: MAX_TIME
        },
        ...this.state.todos.slice(idx + 1)
      ]
    });
  }

  componentDidMount() {
    if (Notification.permission === "default")
      Notification.requestPermission().then(
        permission =>
          permission === "granted"
            ? new Notification("hello")
            : console.log("not granted")
      );

    new Notification("Pomodoro done", {
      body: `You finished. Now take a break`
    });
  }

  handleAdd(name) {
    this.setState({
      todos: addTodo(this.state.todos)(name, MAX_TIME)
    });
  }

  handleComplete(idx) {
    this.setState({
      todos: completeTodo(this.state.todos, idx)
    });
  }

  handleSelect(idx) {
    this.setState({
      selected: idx
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {!!this.state.todos[this.state.selected] ? (
            <Timer
              onReset={() => this.handleReset(this.state.selected)}
              onComplete={() => this.handleComplete(this.state.selected)}
              onCountdown={() => this.handleCountdown(this.state.selected)}
              remaining={this.state.todos[this.state.selected].remaining}
              cycles={this.state.todos[this.state.selected].cycles}
            />
          ) : (
            <Timer disabled remaining={0} cycles={0} />
          )}
          <AddTodo onAdd={this.handleAdd} />
          <Todos
            onClick={this.handleSelect}
            todos={this.state.todos.map((t, i) => ({
              key: i,
              name: t.name,
              completed: t.completed,
              active: this.state.selected === i
            }))}
          />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
