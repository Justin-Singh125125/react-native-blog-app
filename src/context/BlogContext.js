import React, { useReducer } from 'react';

//create the context
const BlogContext = React.createContext();

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      //spread old state, push new array object in
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

//export a named export. This will wrap our app component
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(BlogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
