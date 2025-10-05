import { useState } from "react";
import styles from "./App.module.css";

const initialUsers = [
  { id: "u3", name: "박노드", email: "parknode@example.com" },
  { id: "u1", name: "김코딩", email: "kimcoding@example.com" },
  { id: "u2", name: "이해커", email: "leehacker@example.com" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleSortByname = () => {
    setUsers((prev) => prev.toSorted((a, b) => a.name.localeCompare(b.name)));
  };

  const handeDelete = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <div className={styles.appContainer}>
      <h1>유저 목록</h1>
      <button onClick={handleSortByname}>이름순 정렬</button>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
            <button onClick={() => handeDelete(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
