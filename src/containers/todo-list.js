import React from 'react'
import Wrapper from '../components/todo-list-wrapper'
import Heading from '../components/todo-list-heading'
import List from '../components/todo-list'
import Item from '../components/todo-list-item'

export default props => (
  <Wrapper>
    {props.todos.length > 0 ? (
      <div>
        <div
          style={{
            flexGrow: 1,
            flexBasis: '50%',
          }}
        >
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
        </div>
        <div
          style={{
            flexGrow: 1,
            flexBasis: '50%',
          }}
        >
          <Heading>Completed</Heading>
          <List>
            {props.todos.filter(todo => todo.completed).map(todo => (
              <Item complete onClick={props.onClick} key={todo.key}>
                {todo.name}
              </Item>
            ))}
          </List>
        </div>
      </div>
    ) : (
      <Heading>Add some todos to get started...</Heading>
    )}
  </Wrapper>
)
