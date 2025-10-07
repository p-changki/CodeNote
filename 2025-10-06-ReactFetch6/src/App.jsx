import { PostProvider } from './providers/PostProviders';
import { Spinner } from './components/Spinner/Spinner';
import { Pagination } from './components/Pagination';
import { PostList } from './Pages/HomePage/PostList';
import { HomeLayout } from './Pages/HomePage/HomeLayout/HomeLayout';

function App() {
  return (
    <PostProvider>
      <HomeLayout />
    </PostProvider>
  );
}

export default App;
