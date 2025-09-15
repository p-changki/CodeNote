import style from "./TodoItem.module.css";

import { FaRegTrashAlt } from "react-icons/fa";

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={style.todoItem}>
      <span
        className={`${style.todoText} ${todo.isDone ? "done" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className={style.deleteButton} onClick={() => onDelete(todo.id)}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
