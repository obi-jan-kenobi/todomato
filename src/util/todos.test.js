import { completeTodo, addTodo } from './todos'

describe('completeTodo', () => {
  it('should mark todo at given index as completed', () => {
    expect(
      completeTodo(
        [
          {
            completed: false,
          },
        ],
        0
      )
    ).toEqual([
      {
        completed: true,
      },
    ])
  })
})
