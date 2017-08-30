import React from 'react'
import Wrapper from '../components/todo-list-wrapper'
import List from '../components/todo-list'
import Item from '../components/todo-list-item'

export default (props) =>
  <Wrapper>
    <List>
      {props.complete.map(todo =>
        <Item
          onClick={props.onClick}
          key={todo.key}>{todo.name}
        </Item>
        )}
    </List>
    <List>
      {props.incomplete.map(todo =>
        <Item
          onClick={props.onClick}
          key={todo.key}>{todo.name}
        </Item>
        )}
    </List>
  </Wrapper>
