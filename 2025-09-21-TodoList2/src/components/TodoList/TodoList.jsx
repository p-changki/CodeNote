import { FaDeleteLeft } from "react-icons/fa6";
import "./TodoList.css";
import to from "classnames";

export function TodoList({ items, onDelete, onToggle }) {
  return (
    <ul className="todoList">
      {items.map((todo) => (
        <li key={todo.id}>
          <span
            className={to("toggleSpan", { done: todo.isDone })}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button type="button" onClick={() => onDelete(todo.id)}>
            <FaDeleteLeft />
          </button>
        </li>
      ))}
    </ul>
  );
}
