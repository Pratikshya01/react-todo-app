import TodoItem from "./TodoItem";

function TodoList({ list, deleteTodoItem }) {
  return (
    <ul className="flex flex-col gap-5 mt-5">
      {list?.map((curr) => {
        return (
          <TodoItem
            key={curr?._id}
            item={curr?.title}
            id={curr?._id}
            deleteTodoItem={deleteTodoItem}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
