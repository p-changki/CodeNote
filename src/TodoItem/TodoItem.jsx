export function TodoItem({ todos }) {
  return (
    <>
      {todos.map((todo, index) => (
        <li key={index} className="todoItem">
          {todo}
        </li>
      ))}
    </>
  );
}
