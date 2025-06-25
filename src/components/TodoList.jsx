import TodoItem from "./TodoItem";

function TodoList({ list }) {
  return (
    <ul className="flex flex-col gap-5 mt-5">
      {list?.map((curr, index) => {
        return <TodoItem key={index} item={curr} />;
      })}
    </ul>
  );
}

export default TodoList;
