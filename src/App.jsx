import "./App.css";
import { TodoItem } from "./TodoItem";
import { useState } from "react";
import { Panel } from "./Panel";

function App() {
  const todos = ["리액트 기초 배우기", "To-Do List 만들어보기"];

  return (
    <div className="container">
      <div className="tittleWrap">
        <h1 className="title">TodoList</h1>
        <p className="today">
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>
      <section className="inputWrap">
        <input
          type="text"
          // value={inputText}
          placeholder="여기에 입력 부탁드립니다."
        ></input>
        <button>확인</button>
      </section>
      <section className="todoWrap">
        {todos.length === 0 ? (
          <p className="noTodo">투두리스트가 없습니다.</p>
        ) : (
          <ul className="todoList">
            {todos.map((text, index) => (
              <li key={index} text={text}></li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
