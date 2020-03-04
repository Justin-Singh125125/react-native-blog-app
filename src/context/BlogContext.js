import createDataContext from './createDataContext';

//our reducer
const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      //spread old state, push new array object in
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = () => {
  dispatch({ type: 'add_blogpost' });
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost },
  []
);
