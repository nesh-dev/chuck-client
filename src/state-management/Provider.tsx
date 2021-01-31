import React, { useReducer, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import {CATEGORIES} from '../components/categories/query'
import {CategoriesContext} from './CategoriesContext'
import reducer from "./reducer";

const CategoriesContextProvider = (props: any) => {

  const { loading, data, error } = useQuery(CATEGORIES);
  console.log(data, 'the data')

  const [categories, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (data) {
      dispatch({
        type: "CATEGORIES",
        data,
      });
    }
  }, [data]);

  return (
    <CategoriesContext.Provider value={{ loading, data }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesContextProvider;
