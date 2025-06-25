import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <ul className="flex flex-col gap-5 mt-5">
      <TodoItem />
    </ul>
  );
}

export default TodoList;
