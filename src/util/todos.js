export const completeTodo = (todos = [], index) => [
  ...todos.slice(0, index),
  {
    ...this.state.todos[index],
    completed: true,
  },
  ...todos.slice(index + 1),
]

const defaultTodo = {
  completed: false,
  cycles: 0,
}

export const addTodo = (todos = []) => (name, remaining) => [
  ...todos,
  {
    ...defaultTodo,
    name,
    remaining,
  },
]
