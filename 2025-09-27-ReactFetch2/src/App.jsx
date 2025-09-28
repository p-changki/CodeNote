import { PostProvider } from '@/providers/PostProvider';
import { Spinner } from './components/Spinner';
import { Pagination } from './components/Pagination';
import { PostList } from '@/Pages/HomePage/PostList';

function App() {
  return (
    <PostProvider>
      <PostList />
    </PostProvider>
  );
}

export default App;
