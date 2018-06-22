type description =
  | Description(string);

type status =
  | Finished
  | Running
  | Unfinished;

type todo = {
  description,
  status,
  cycles: int,
};

type state = {todos: list(todo)};

type actions =
  | AddTodo(todo)
  | RemoveTodo(todo)
  | StartTodo(todo)
  | StopTodo(todo);

let default = ReasonReact.reducerComponent("Todos");

let make = _children => {
  ...default,
  initialState: () => {todos: []},
  reducer: (action, state) =>
    switch (action) {
    | AddTodo(todo) => ReasonReact.Update({todos: [todo, ...state.todos]})
    | RemoveTodo(_) =>
      ReasonReact.Update({
        todos:
          switch (state.todos) {
          | [] => []
          | [_, ...rest] => rest
          },
      })
    },
  render: _ => <div />,
};
