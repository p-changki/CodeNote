import { useState } from "react";
import "./App.css";
import { Panel } from "./components/panel";
import { TodoItem } from "./components/TodoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.ket !== "Enter") return;
  };

  const handleAddTodo = () => {
    if (inputText.trim() === "") return;
    setTodos((prev) => [...prev, inputText]);
    setInputText("");
  };
  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">오늘의 할일</h1>
        <p className="today">
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>
      <Panel>
        <div className="input-section">
          <input
            type="text"
            placeholder="새로운 할 일을 입력하세요"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="add-button" onClick={handleAddTodo}>
            추가
          </button>
        </div>
      </Panel>
      <Panel>
        {todos.length === 0 ? (
          <p className="no-todos">할 일이 없습니다!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((text, index) => (
              <TodoItem key={index} text={text} />
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}

export default App;
