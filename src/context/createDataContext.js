import React, { useReducer } from 'react';

//we are exporting our reducer function
export default (reducer, actions, initialState) => {
  //create our context
  const Context = React.createContext();

  //create our provider
  const Provider = ({ children }) => {
    //declare our reducer
    //this way we can pass any reducer to use reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    //return our context provider
    return (
      <Context.Provider value={{ state: state }}>{children}</Context.Provider>
    );
  };

  //return our context and provider object as named exports
  return { Context, Provider };
};
