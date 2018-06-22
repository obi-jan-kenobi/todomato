type description =
  | Description(string);

type duration =
  | Second(int);

type status =
  | Finished
  | Running
  | Unfinished;

type todoId =
  | TodoId(string);

type todo = {
  todoId,
  description,
  status,
  cycles: int,
  duration,
};

type tickTodo = todo => todo;

let incSecond = sec =>
  switch (sec) {
  | Second(x) => Second(x + 1)
  };

let tickTodo = todo => {...todo, duration: incSecond(todo.duration)};

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
      ReasonReact.Update({
        todos: List.filter(t => t.todoId != todoId, state.todos),
      })
    | StartTodo(todoId) =>
      ReasonReact.Update({
        todos:
          List.map(
            t =>
              if (t.todoId == todoId) {
                {...t, status: Running};
              } else {
                t;
              },
            state.todos,
          ),
      })
    | StopTodo(todoId) =>
      ReasonReact.Update({
        todos:
          List.map(
            t =>
              if (t.todoId == todoId) {
                {...t, status: Unfinished};
              } else {
                t;
              },
            state.todos,
          ),
      })
    | TickTodo(todoId) =>
      ReasonReact.Update({
        todos:
          List.map(
            t =>
              if (t.todoId == todoId) {
                tickTodo(t);
              } else {
                t;
              },
            state.todos,
          ),
      })
    },
  render: _ => <div> (ReasonReact.string("Hello from ReasonML")) </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _ => make([||]));
