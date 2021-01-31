import React, { useReducer, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import {CATEGORIES} from '../components/categories/query'
import {CategoriesContext, initialState} from './CategoriesContext'
import reducer from "./reducer";

const CategoriesContextProvider = (props: any) => {

  const { loading, data, error } = useQuery(CATEGORIES);
  console.log(data, 'the data')

  const [categories, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (categories) {
      dispatch({
        type: "CATEGORIES",
        data,
      });
    }
  }, []);

  return (
    <CategoriesContext.Provider value={{ loading, data, error}}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesContextProvider;
