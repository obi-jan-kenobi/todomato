import React from 'react'
import Button from '../components/button'
import Input from '../components/input'

class AddTodo extends React.Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Input placeholder="new todo"></Input>
        <Input placeholder="timeframe"></Input>
        <Button>Add Todo</Button>
      </div>
    )
  }
}

export default AddTodo
