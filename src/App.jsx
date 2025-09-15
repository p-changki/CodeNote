import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { Panel } from "./components/Panel";

function App() {
  const title = "오늘의 할일";
  const todos = ["리액트 기초 배우기", "To-Do List 만들어보기"];

  return (
    <div className="app-wrap">
      <div className="title-wrap">
        <h1 className="title">{title}</h1>
        <p className="today">
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>
      <panel>
        <div className="input-section">
          <input type="text" placeholder="새로운 할 일을 입력하세요." />
          <button>추가</button>
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
