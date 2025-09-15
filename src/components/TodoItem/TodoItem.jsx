import "./index.css";
import { FaRegTrashAlt } from "react-icons/fa";

export function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="todoItem">
      <span
        className={todo.isDone ? "done" : ""}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <button
        className="deleteBtn"
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
