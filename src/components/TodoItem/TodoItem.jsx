import "./index.css";
import { FaRegTrashAlt } from "react-icons/fa";

export function TodoItem({ text, onDelete }) {
  return (
    <li className="todoItem">
      {text}
      <button
        className="deleteBtn"
        onClick={() => {
          onDelete(text);
        }}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
