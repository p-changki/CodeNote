import { useState } from "react";
import Todolist from "./Todolist/Todolist";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todos2, setTodos2] = useState([]);

  const handleInputAdd = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.isComposing || e.nativeEvent.isComposing) return;
    if (e.key !== "Enter") return;
    handleButtonClick();
  };

  const handleButtonClick = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const text = { park: nanoid(), text: trimmed, isDone: false };
    setTodos((prev) => [...prev, text]);
    setInputText("");
  };

  const handleButtonClick2 = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const text2 = { chang: nanoid(), text: trimmed, isDone: false };
    setTodos2((prev) => [...prev, text2]);
    setInputText("");
  };

  const handleDelete = (park) => {
    setTodos((prev) => prev.filter((text) => text.park !== park));
  };

  const handleDelete2 = (id) => {
    setTodos2((prev) => prev.filter((t) => t.chang !== id));
  };
  // ...

  return (
    <div>
      <div className="main">
        <div className="titleWrap">
          <h1>TOdoList</h1>
          <p>오늘은 {new Date().toLocaleDateString()} 입니다.</p>
        </div>
        <section className="sectionWrap">
          <input
            type="text"
            placeholder="여기 입력해주세요"
            value={inputText}
            onChange={handleInputAdd}
            onKeyDown={handleKeyDown}
          />
          <button className="inputButton" onClick={handleButtonClick}>
            확인
          </button>
          <button onClick={handleButtonClick2}>확인2</button>
        </section>
        <footer className="footWrap">
          <p>투두리스트</p>

          <Todolist items={todos} onDelete={handleDelete} />
        </footer>
        <div>
          <p>두번째 투두리스트</p>
          <Todolist items={todos2} onDelete={handleDelete2} />
        </div>
      </div>
    </div>
  );
}

export default App;
