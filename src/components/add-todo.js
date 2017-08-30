import React from 'react'
import Input from './input'
import Button from './button'

export default ({todo, onChange, onClick}) =>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Input
      placeholder="new todo"
      value={todo}
      onChange={onChange} 
      />
    <Button onClick={onClick}>Add Todo</Button>
  </div>
