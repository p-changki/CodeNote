import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnchange = (e) => {
    setInputText(e.target.value);
    // console.log("입력값", e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.isComposing || e.nativeEvent.isComposing) return;
    if (e.key !== "Enter") return;
    handleOnclick();
  };

  const handleOnclick = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const newTodo = {
      id: nanoid(),
      text: trimmed,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputText("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="main">
        <div className="titleWrap">
          <h1>TodoList</h1>
          <p>오늘은 {new Date().toLocaleDateString()} 입니다.</p>
        </div>
        <section className="inputWrap">
          <input
            type="text"
            placeholder="여기 입력해주세요"
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
            value={inputText}
          />
          <button type="button" onClick={handleOnclick}>
            확인
          </button>
        </section>
        <footer className="footerTodo">
          <h2>투두리스트</h2>
          <ul className="todoList">
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}{" "}
                <button type="button" onClick={() => handleDelete(todo.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
}
export default App;
