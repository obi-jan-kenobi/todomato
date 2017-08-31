import React from 'react'
import Wrapper from './todo-list-wrapper'
import Heading from './todo-list-heading'
import List from './todo-list'
import Item from './todo-list-item'

const ListWrapper = props => (
  <div
    style={{
      flexGrow: 1,
      flexBasis: '50%',
    }}
    {...props}
  />
)

export default props =>
  props.todos.length > 0 ? (
    <Wrapper>
      <ListWrapper>
        <Heading>Todos</Heading>
        <List>
          {props.todos.filter(todo => !todo.completed).map(todo => (
            <Item
              onClick={() => props.onClick(todo.key)}
              active={todo.active}
              key={todo.key}
            >
              {todo.name}
            </Item>
          ))}
        </List>
      </ListWrapper>
      <ListWrapper>
        <Heading>Completed</Heading>
        <List>
          {props.todos.filter(todo => todo.completed).map(todo => (
            <Item complete onClick={props.onClick} key={todo.key}>
              {todo.name}
            </Item>
          ))}
        </List>
      </ListWrapper>
      )
    </Wrapper>
  ) : (
    <Wrapper>
      <Heading>Add some todos to get started...</Heading>
    </Wrapper>
  )
