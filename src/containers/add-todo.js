import React from 'react'
import AddTodo from '../components/add-todo'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
    }

    const methods = ['handleChange', 'handleClick']

    methods.forEach(m => {
      this[m] = this[m].bind(this)
    })
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value,
    })
  }

  handleClick() {
    this.setState({ todo: '' })
    this.props.onAdd(this.state.todo)
  }

  render() {
    return (
      <AddTodo
        disabled={!(this.state.todo.length > 0)}
        todo={this.state.todo}
        onChange={this.handleChange}
        onClick={this.handleClick}
      />
    )
  }
}
