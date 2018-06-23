open Todos;

type state = {todos: list(todo)};

type actions =
  | AddTodo(todo)
  | RemoveTodo(todoId)
  | StartTodo(todoId)
  | StopTodo(todoId)
  | TickTodo(todoId);

let component = ReasonReact.reducerComponent("Todos");

let make = _children => {
  ...component,
  initialState: () => {todos: []},
  reducer: (action, state) =>
    switch (action) {
    | AddTodo(todo) => ReasonReact.Update({todos: [todo, ...state.todos]})
    | RemoveTodo(todoId) =>
      ReasonReact.Update({todos: removeTodoById(state.todos, todoId)})
    | StartTodo(todoId) =>
      ReasonReact.Update({todos: startTodoById(state.todos, todoId)})
    | StopTodo(todoId) =>
      ReasonReact.Update({todos: stopTodoById(state.todos, todoId)})
    | TickTodo(todoId) =>
      ReasonReact.Update({todos: tickTodoById(state.todos, todoId)})
    },
  render: _ => <div> (ReasonReact.string("Hello from ReasonML")) </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _ => make([||]));