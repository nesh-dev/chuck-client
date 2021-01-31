
import { ApolloError } from "@apollo/client";
import { createContext } from "react";

export interface Category {
    categories: string[]
}

export interface InitialStateType {
    data: Category
    loading: boolean, 
    error?: ApolloError,
}
export const initialState: InitialStateType = {
    data: {categories:[]},
    loading: true, 
    error: undefined,
}

export const CategoriesContext = createContext(initialState);
