import { PostProvider } from './providers/PostProviders';
import { Spinner } from './components/Spinner/Spinner';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <PostProvider>
      <Spinner />
      <Pagination currentPage={1} totalPages={10} />
    </PostProvider>
  );
}

export default App;
