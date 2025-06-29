import { Button } from "./ui/button";
import { Edit2, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

function TodoItem({ item, deleteTodoItem, id }) {
  return (
    <li className="flex items-center justify-between gap-2">
      {/* Todo item text with checkbox */}
      <div className="flex items-center gap-2">
        <Checkbox className="hover:cursor-pointer w-4 h-4" />
        <p>{item}</p>
      </div>

      {/* Todo actions */}
      <div className="flex items-center gap-2">
        <Button className="bg-green-600 hover:bg-green-700 hover:cursor-pointer">
          <Edit2 />
        </Button>
        <Button
          variant="destructive"
          className="hover:cursor-pointer hover:bg-red-700"
          onClick={() => deleteTodoItem(id)}
        >
          <Trash2 />
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
