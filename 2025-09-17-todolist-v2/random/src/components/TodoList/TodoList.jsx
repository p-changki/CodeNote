export function TodoList({ todos }) {
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
