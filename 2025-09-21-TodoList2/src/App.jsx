import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.isComposing || e.nativeEvent.isComposing) return;
    if (e.key !== "Enter") return;
    handleInputClick();
  };

  const handleInputClick = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const item = { id: nanoid(), text: trimmed, isDone: false };
    setTodos((prev) => [...prev, item]);
    setInputText("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  return (
    <div className="main">
      <div className="titleWrap">
        <h1>투두리스트v2</h1>
        <p> 지금은 {new Date().toLocaleDateString()}입니다.</p>
      </div>
      <section className="sectionWrap">
        <input
          type="text"
          placeholder="여기입력해주세요"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="inputButton"
          onClick={handleInputClick}
        >
          확인
        </button>
      </section>
      <section className="sectionTodoList">
        <p>투두리스트</p>

        <TodoList
          items={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </section>
    </div>
  );
}
export default App;
