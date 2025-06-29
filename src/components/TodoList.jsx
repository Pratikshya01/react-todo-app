import TodoItem from "./TodoItem";

function TodoList({ list }) {
  return (
    <ul className="flex flex-col gap-5 mt-5">
      {list?.map((curr) => {
        return <TodoItem key={curr?._id} item={curr.title} />;
      })}
    </ul>
  );
}

export default TodoList;
