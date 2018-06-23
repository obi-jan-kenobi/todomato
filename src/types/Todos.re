type description =
  | Description(string);

type duration =
  | Second(int);

type status =
  | Finished
  | Stopped
  | Running;

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

let removeTodoById = (todos, todoId) =>
  List.filter(t => t.todoId != todoId, todos);

let startTodoById = (todos, todoId) =>
  List.map(
    t =>
      if (t.todoId == todoId) {
        {...t, status: Running};
      } else {
        t;
      },
    todos,
  );

let stopTodoById = (todos, todoId) =>
  List.map(
    t =>
      if (t.todoId == todoId) {
        {...t, status: Stopped};
      } else {
        t;
      },
    todos,
  );

let tickTodoById = (todos, todoId) =>
  List.map(
    t =>
      if (t.todoId == todoId) {
        tickTodo(t);
      } else {
        t;
      },
    todos,
  );