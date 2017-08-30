import React from 'react'
import Input from './input'
import Button from './button'

export default ({todo, onChange, onClick}) =>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    borderTop: '2px solid #222'
    }}>
    <Input
      placeholder="new todo"
      value={todo}
      onChange={onChange} 
      />
    <Button onClick={onClick}>Add Todo</Button>
  </div>
