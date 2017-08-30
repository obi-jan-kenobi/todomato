import React from 'react'
import Wrapper from '../components/todo-list-wrapper'
import List from '../components/todo-list'
import Item from '../components/todo-list-item'

export default (props) =>
  <Wrapper>    
    <List>
      {props.todos
        .filter(todo => !todo.completed)
        .map(todo =>
        <Item
          onClick={() => props.onClick(todo.key)}
          active={todo.active}
          key={todo.key}>
          {todo.name}
        </Item>
        )}
    </List>
    <List>
      {props.todos
        .filter(todo => todo.completed)
        .map(todo =>
        <Item
          complete
          onClick={props.onClick}
          key={todo.key}>
          {todo.name}
        </Item>
        )}
    </List>
  </Wrapper>
