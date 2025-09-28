import React, { useState, useEffect } from 'react';
import { fetchPosts } from '@/api/posts';
import { PostContext } from '@/contexts/PostContext';

const POSTS_PER_PAGE = 12;
const INITIAL_PAGE = 1;

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await fetchPosts(INITIAL_PAGE, POSTS_PER_PAGE);
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  const contextValue = { posts, isLoading, error };

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
