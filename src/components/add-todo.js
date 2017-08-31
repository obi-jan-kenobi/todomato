import React from 'react'
import Input from './input'
import Button from './button'
import Wrapper from './add-todo-wrapper'

export default ({ todo, disabled, onChange, onClick }) => (
  <Wrapper>
    <Input placeholder="new todo" value={todo} onChange={onChange} />
    <Button disabled={disabled} onClick={onClick}>
      Add Todo
    </Button>
  </Wrapper>
)
