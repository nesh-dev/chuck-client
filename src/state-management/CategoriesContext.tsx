
import { createContext } from "react";

interface Category {
    categories: string[]
}

interface InitialStateType {
    data: Category
    loading: boolean
}
const initialState: InitialStateType = {
    data: {categories:[]},
    loading: false, 
}

export const CategoriesContext = createContext(initialState);
