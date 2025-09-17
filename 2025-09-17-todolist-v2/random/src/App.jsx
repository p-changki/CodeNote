import "./App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { nanoid } from "nanoid";

export default App;

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    const text = inputText.trim(); //
    if (!text) return;
    setTodos((prev) => [...prev, { id: nanoid(), text }]);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key != "Enter") return;
    // e.preventDefault();
    handleAdd();
  };

  return (
    <div className="Wrap">
      <div className="titleWrap">
        <h1>Title</h1>
        <p>현재 {new Date().toLocaleDateString()} </p>
      </div>
      <div className="inputWrap">
        <input
          type="text"
          value={inputText}
          placeholder="여기에 입력하세요"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdd}>확인</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}
