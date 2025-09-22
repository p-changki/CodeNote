import "./Todolist.css";

export function Todolist({ todos }) {
  return (
    <ul className="TodoListWrap">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
