import { useState } from "react";
import { nanoid } from "nanoid";
import { Todolist } from "./components/Todolist";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  const handleButtonClick = () => {
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

  const handleKeyDown = (e) => {
    if (e.isComposing || e.nativeEvent.isComposing) return;
    if (e.key !== "Enter") return;
    handleButtonClick();
  };

  return (
    <div className="main">
      <div className="titleWrap">
        <h1>투두리스트</h1>
        <p>현재 {new Date().toLocaleString()} 입니다.</p>
      </div>

      <section className="sectionWrap">
        <input
          type="text"
          placeholder="여기에 입력부탁드립니다."
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleButtonClick}>
          확인
        </button>
      </section>
      <div>
        <h2>리스트</h2>
        <Todolist todos={todos} />
      </div>
    </div>
  );
}

export default App;
