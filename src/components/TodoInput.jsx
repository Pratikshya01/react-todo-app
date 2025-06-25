import { Button } from "./ui/button";
import { Input } from "./ui/input";

function TodoInput() {
  return (
    <div className="flex gap-2">
      <Input />
      <Button> Add Todo </Button>
    </div>
  );
}

export default TodoInput;
