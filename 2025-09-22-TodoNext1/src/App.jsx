import { useState } from "react";
import style from "./App.module.css";

const initialUsers = [
  { id: "u3", name: "박노드", email: "parknode@example.com" },
  { id: "u1", name: "김코딩", email: "kimcoding@example.com" },
  { id: "u2", name: "이해커", email: "leehacker@example.com" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleSortByName = () => {
    setUsers((prev) => prev.toSorted((a, b) => a.name.localeCompare(b.name)));
  };

  const handleDelete = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <div className={style.appContainer}>
      <h1>유저목록</h1>
      <button onClick={handleSortByName}>이름 순 정렬</button>
      <ul className={style.userList}>
        {users.map((user) => (
          <li key={user.id} className={style.userItem}>
            <div>
              <strong>{user.name}</strong>
              <span>({user.email})</span>
            </div>
            <button onClick={() => handleDelete(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
