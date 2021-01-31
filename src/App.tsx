import React from 'react';
import Home from './Pages/Home';
import CategoriesContextProvider from './state-management/Provider';

const App = () => {
  return (
      <CategoriesContextProvider>
        <Home />
      </CategoriesContextProvider>
  );
};

export default App
