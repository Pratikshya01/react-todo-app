import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { createTodo, getAllTodos } from "./api/todos";

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      const response = await getAllTodos();
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddTodo(todoValue) {
    setTodos((prevValue) => [
      ...prevValue,
      { title: todoValue, _id: Date.now() },
    ]);
    try {
      const postResponse = await createTodo({ title: todoValue });
      console.log(postResponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl text-center mb-5 font-semibold">
        React Todo App
      </h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList list={todos} />
    </div>
  );
}

export default App;
