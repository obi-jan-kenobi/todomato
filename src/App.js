import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import Container from './components/container'
import AddTodo from './containers/add-todo'
import TodoList from './containers/todo-list'
import Timer from './containers/timer'

const theme = {
  background: '#2B3538',
  primary: '#50B5AE',
  secondary: '#F7F5B0',
  highlight: '#A5E6E1',
  muted: '#37494F',
}

// eslint-disable-next-line
injectGlobal`
  body {
    background-color: ${theme.background};
  }
`

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      selected: null,
    }

    const methods = [
      'handleAdd',
      'handleSelect',
      'handleComplete',
    ]

    methods.forEach(m => this[m] = this[m].bind(this))
  }

  handleAdd (todo) {
    this.setState({
      todos: [
        ...this.state.todos, {
          name: todo,
          completed: false,
          remaining: 1500
        }
      ],
    })
  }

  handleComplete (idx) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        {
          name: this.state.todos[idx].name,
          remaining: this.state.todos[idx].remaining,
          completed: true,
        },
        ...this.state.todos.slice(idx + 1)
      ],
    })
  }

  handleSelect (idx) {
    this.setState({
      selected: idx
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Timer />
          <AddTodo onAdd={this.handleAdd} />
          <TodoList
            onClick={this.handleSelect}
            todos={this.state.todos.map((t,i) => ({key: i, name: t.name, completed: t.completed, active: this.state.selected === i}))}
            />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
