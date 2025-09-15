import style from "./App.module.css";
import { TodoItem } from "./components/TodoItem";
import { Panel } from "./components/Panel";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([
    { id: nanoid(), text: "리엑트 기초 배우기", isDone: true },
    { id: nanoid(), text: "컴포넌트 스타일링하기", isDone: false },
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
    const newTodo = {
      id: nanoid(),
      text: inputText,
      isDone: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputText("");
  };

  const handleDelete = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const handleToogle = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className={style.appWrap}>
      <div className={style.titleWrap}>
        <h1 className={style.title}>오늘의 할일</h1>
        <p className={style.today}>
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>
      <panel>
        <div className={style.inputSection}>
          <input
            type="text"
            className={style.todoInput}
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKetDown}
            placeholder="새로운 할 일을 입력하세요."
          />
          <button className={style.addButton} onClick={handleAddTodo}>
            추가
          </button>
        </div>
      </panel>
      <panel>
        {todos.length === 0 ? (
          <p className={style.no - todos}>할 일이 없습니다.</p>
        ) : (
          <ul className={style.todoList}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToogle}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </panel>
    </div>
  );
}

export default App;
