'use client';
import React, { createContext } from 'react';

const MyContext = createContext(null);

const ContextProvider = ({ children }) => {
  return <MyContext.Provider value={null}>{children}</MyContext.Provider>;
};

export default ContextProvider;
