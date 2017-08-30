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
      'handleCountdown',
    ]

    methods.forEach(m => this[m] = this[m].bind(this))
  }

  handleCountdown (idx) {    
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        this.state.todos[idx].remaining <= 0
          ? {
              ...this.state.todos[idx],
              remaining: 1500,
              cycles: this.state.todos[idx].cycles + 1
          }
          : {
            ...this.state.todos[idx],
            remaining: this.state.todos[idx].remaining - 1,
          },
        ...this.state.todos.slice(idx + 1)
      ]      
    })
  }

  handleReset (idx) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        {
          ...this.state.todos[idx],
          remaining: 1500,
        },
        ...this.state.todos.slice(idx + 1)
      ]
      
    })
  }

  handleAdd (todo) {
    this.setState({
      todos: [
        ...this.state.todos, {
          name: todo,
          completed: false,
          cycles: 0,
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
          ...this.state.todos[idx],          
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
          {!!this.state.selected && 
            <Timer
              onCountdown={() => this.handleCountdown(this.state.selected)}
              remaining={this.state.todos[this.state.selected].remaining}
              cycles={this.state.todos[this.state.selected].cycles}
              />
          }
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
