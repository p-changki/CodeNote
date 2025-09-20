import "./Todolist.css";

function Todolist({ items, onDelete }) {
  return (
    <>
      <ul className="todoList">
        {items.map((todo) => (
          <li className="listTodo" key={todo.park}>
            {todo.text}
            <button
              onClick={() => onDelete(todo.id ?? todo.park ?? todo.chang)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todolist;
