import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Pages/Home'
import CategoriesContextProvider from './state-management/Provider'

const App = () => {
  return (
      <CategoriesContextProvider>
        <Home />
      </CategoriesContextProvider>
  );
};

export default App
