import "./App.css";
import { PostProvider } from "./providers/PostProviders";

function App() {
  return (
    <PostProvider>
      <div>게시물 앱 준비중 ....</div>
    </PostProvider>
  );
}

export default App;
