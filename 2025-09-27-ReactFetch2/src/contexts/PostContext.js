import { createContext, useContext } from 'react';

const defaultContextValue = {
  posts: [],
  isLoading: false,
  error: null,
};

export const PostContext = createContext(defaultContextValue);

export const usePosts = () => {
  return useContext(PostContext);
};
