import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function TodoInput({ onAddTodo }) {
  const todoInputRef = useRef();

  const handleClick = () => {
    const todoValue = todoInputRef.current.value;
    if (todoValue.trim() === "") return;
    onAddTodo(todoValue);
  };

  return (
    <div className="flex gap-2">
      <Input ref={todoInputRef} autoFocus />
      <Button onClick={handleClick}> Add Todo </Button>
    </div>
  );
}

export default TodoInput;
