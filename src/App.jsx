import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { Panel } from "./components/Panel";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "리액트 기초 배우기",
    "To-Do List 만들어보기",
  ]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKetDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key !== "Enter") return;
    handleKetDown();
  };

  const handleAddTodo = () => {
    if (inputText.trim() === "") return;
    setTodos((prev) => [...prev, inputText]);
    setInputText("");
  };

  return (
    <div className="app-wrap">
      <div className="title-wrap">
        <h1 className="title">오늘의 할일</h1>
        <p className="today">
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>
      <panel>
        <div className="input-section">
          <input
            type="text"
            className="todo-input"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKetDown}
            placeholder="새로운 할 일을 입력하세요."
          />
          <button className="add-button" onClick={handleAddTodo}>
            추가
          </button>
        </div>
      </panel>
      <panel>
        {todos.length === 0 ? (
          <p no-todos>할 일이 없습니다.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((text, index) => (
              <TodoItem key={index} text={text} />
            ))}
          </ul>
        )}
      </panel>
    </div>
  );
}

export default App;
