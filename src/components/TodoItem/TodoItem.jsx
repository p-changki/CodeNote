import style from "./TodoItem.module.css";
import clsx from "clsx";
import { FaRegTrashAlt } from "react-icons/fa";

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={style.todoItem}>
      <span
        className={clsx(style.todoText, todo.isDone && style.done)}
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
