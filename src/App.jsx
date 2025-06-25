import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl text-center mb-5 font-semibold">
        React Todo App
      </h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
