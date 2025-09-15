import "./App.css";
import { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { Panel } from "./components/Panel";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([
    { id: nanoid(), text: "리엑트 공부하기", isdone: false },
    { id: nanoid(), text: "운동하기", isDone: true },
  ]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (inputText.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: nanoid(), text: inputText.trim(), isDone: false },
    ]);

    setInputText("");
  };

  //한글입력 중복방지
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
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
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDelete}
                  onToggle={handleToggle}
                />
              ))}
            </ul>
          )}
        </div>
      </Panel>
    </div>
  );
}

export default App;
