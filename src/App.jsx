import "./App.css";
import { useState } from "react";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { Panel } from "./components/Panel/Panel";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (inputText.trim() === "") return;
    setTodos((prev) => [...prev, inputText]);
    console.log("입력");
    setInputText("");
  };

  //한글입력 중복방지
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const hadleDelete = (text) => {
    setTodos((prev) => prev.filter((todo) => todo !== text));
  };

  return (
    <div className="container">
      <div className="titleWrap">
        <h1 className="title">TODOList</h1>
        <p className="today">
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>
      <Panel>
        <div className="inputSection">
          <input
            className="inputText"
            type="text"
            placeholder="여기에 적으세요!"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          ></input>
          <button className="inputBtn" onClick={handleAddTodo}>
            확인
          </button>
        </div>
      </Panel>
      <Panel>
        <div className="todoSection">
          {todos.length === 0 ? (
            <p> 투두리스트를 입력한게 들어와요!</p>
          ) : (
            <ul className="todoList">
              {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} onDelete={hadleDelete} />
              ))}
            </ul>
          )}
        </div>
      </Panel>
    </div>
  );
}

export default App;
